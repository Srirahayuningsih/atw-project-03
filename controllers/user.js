const { v4: uuidv4 } = require('uuid')

const User = require('../models/user')

/*let users = [
{id: 1, name: 'Simerah', email: 'merah123@gmail.com'},
{id: 2, name: 'Sibiru', email: 'biru234@gmail.com'},
{id: 3, name: 'Sikuning', email: 'kuning345@gmail.com'},
{id: 4, name: 'Sihijau', email: 'hijau456@gmail.com'}
]
*/
module.exports = {
	index: function(request, response){

		//User.find({email: 'hijau456@gmail.com'}, function(error, users){
		//User.findById("6051f6dd05e9e01b4c95f8ef", function(error, users){
		//User.find({name: /si/i}, "name _id", function(error, users){
			let keyword = {}

			if(request.query.keyword) {
				keyword = {name: {$regex: request.query.keyword}}
			}

			//cara pertama
			/*User.find(keyword, "name _id", function(error, users){
			if(error) console.log(error)

			//const users = users
			console.log(users)
			response.render('pages/user/index', {users: users})
		})*/

		//cara kedua
		const query = User.find(keyword)
		query.select('name _id')
		query.exec(function(error, users){
			if(error) console.log(error)

			//const users = users
			console.log(users)
			response.render('pages/user/index', {users: users})
		})
	},
	show: function(request, response) {
		const id = request.params.id
		/*const data = users.filter(user => {
			return user.id == id
		})*/

		User.findById(id, function(error, data){
			if(error) console.log(error)
			console.log(data)
			response.render('pages/user/show', {user: data})
		})
		
	},

	create: function(request, response) {
		response.render('pages/user/create')

	},
	store: function(request, response){
		//CARA PERTAMA
		/*const user = new User({
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
		})

		user.save(function(error, data){
			if(error) console.log(error)

				console.log(data)
			response.redirect('/users')

		})

*/
		//CARA KEDUA
		User.create({
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
		}, function(error, data){
			if(error) console.log(error)

			console.log(data)
			response.redirect('/users')

		})


		/*users.push({
		id: uuidv4(),
		name: request.body.name,
		email: request.body.email
		})*/

		

		//response.send(users)
		//console.log(users)
		//response.end()
		//console.log(request.body)
	},
	edit: function(request, response) {
		const id = request.params.id

		User.findById(id, function(error, data){
			if(error) console.log(error)
		response.render('pages/user/edit', {user: data})
		})
	},
	update: function(request, response){
		const id = request.params.id
		users.filter(user => {
			if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
		response.json({
		    status: true,
			data: users,
			message: 'Data Users Berhasil diedit',
			method: request.method,
			url: request.url
	})
	//response.send(id)
	//melakukan update
	},
	delete: function(request, response){
		let id = request.params.userId
		users = users.filter(user => user.id != id)
		response.send({
		    status: true,
			data: users,
			message: 'Data Users Berhasil dihapus',
			method: request.method,
			url: request.url
	})
	//response.send(request.params.userId)
	//menghapus data
	}
}