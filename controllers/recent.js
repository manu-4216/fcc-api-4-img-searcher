var Search = require('../models/searches')

module.exports = {
    getAll: function(req, res) {
        Search.find()
        .then(function (result) {
            res.send(result.map(search => {
                return {
                    query: search.query,
                    date: search.created
                }
            }))
        })
        .catch(function (err) {
            res.send(err)
        })
    }
}
