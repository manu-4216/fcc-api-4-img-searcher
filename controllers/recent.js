var Search = require('../models/searches')

module.exports = {
    getAll: function(req, res) {
        Search.find(function (err, searches) {
            if (err) throw err
            
            res.send(searches.map(search => {
                return {
                    query: search.query,
                    date: search.created
                }
            }))
        })
    }
}
