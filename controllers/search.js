var Search = require('../models/searches'),
    imgFetcher = require('../utils/imgFetcher')

module.exports = {
    getAll: function (req, res) {
        var searchQuery = req.params.query
        var page = req.query.offset || 1
        
        // Get the list of images
        imgFetcher(searchQuery, page)
        .then(function (result) {
            res.send(result)
        })
        .catch(function (err) {
            res.send(err)
        })
        
        // Save the search
        var latestSearch = new Search({ query: searchQuery })
        latestSearch.save(function (err) {
            if (err) throw err
        })
    }
}



