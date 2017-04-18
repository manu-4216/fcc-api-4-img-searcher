var express = require('express'),
    router = express.Router(),
    searchController = require('../controllers/search'),
    recentController = require('../controllers/recent')
    
// api home route:
router.get('/', function(req, res) {
    res.send('Available routes: api/search/:query  and  api/recent')
})

router.get('/search/:query', searchController.getAll)
router.get('/recent', recentController.getAll)

module.exports = router