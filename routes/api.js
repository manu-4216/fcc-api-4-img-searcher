var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose')

// api home route:
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
})

router.get('/search/:query', function(req, res) {
    var query = req.params.query
    
    if (!query) {
        res.send('You can search images by adding an query to the url')
    } else {
        res.send('You searched for ' + query)
    }
})

router.get('/recent', function(req, res) {
    //res.send('Recent api')
    /*
    mongoose.model('searches').find(function (err, searches) {
        if (err) throw err
        res.send(searches)
    })
    */
})

module.exports = router