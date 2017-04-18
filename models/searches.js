var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var searchesSchema = new Schema({
    query: String,
    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('searches', searchesSchema)
