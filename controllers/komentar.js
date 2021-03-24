const { v4: uuidv4 } = require('uuid')

const komentar = require('../models/komentar')

module.exports = {
	index: function(request, response){
		response.render('pages/komentar/index', {komentars: komentars})
	},

}