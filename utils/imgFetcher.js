var axios = require('axios')

// Helper used to return a specific page 
function getPageFromArray (array, page) {
    var result = [],
        pageNr = page,
        base = 10, // 10 results per page
        startPage = base * (pageNr - 1) + 1,
        endPage = base * pageNr

    array.forEach(function(item, index, list) {
        if (index >= startPage && index <= endPage) {
            result.push(item)
        }
    })
    
    return result
}


/////////////////////////////////////////////////////////////////////////////
module.exports = function (query, page) {
    var clientID = process.env.CLIENT_ID // from imgur
    
    var config = {
        headers: {Authorization: 'Client-ID ' + clientID}
    }
    
    var BASE_URI = 'https://api.imgur.com/3/gallery/search'
    var queryUri = BASE_URI + '?q=' + query + '&q_type=jpg'  // restrict to jpg type
        
    return new Promise(function (resolve, reject) {
        axios.get(queryUri, config)
        .then(function (response) {
            var rawResultList = response.data.data
            
            // Map the response to only the useful info:
            var allResults = rawResultList.map(function (result) {
                return {
                    title: result.title,
                    imageUrl: result.cover && 'http://i.imgur.com/' + result.cover + '.jpg' || '',
                    sourceUrl: result.link
                }
            })
            
            // Filter the response to get only one page
            var pagedResult = getPageFromArray(allResults, page)
            
            resolve(pagedResult)
        })
        .catch(function (err) {
            reject(err)
        })
    })
}

