const mongoose = require('mongoose')
const { Schema } = mongoose

const komentarSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    isiKomentar: String
}, { timestamps: true })

const Komentar = mongoose.model('Komentar', komentarSchema)
module.exports = Komentar