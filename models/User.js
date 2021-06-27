const mongoose = require('mongoose');

const userSchema({
	name: {
		type: String
		maxlength: 50
	},
	email: {
		type: String,
		trim: true,
		unique: true
	},
	password: {
		type: String
		minlength: 8
	},
	lastname: {
		type: String,
		maxlength: 30
	},
	role: {
		type: Number,
		default: 0
	},
	image: String,
	token: {
		type: String
	},
	tokenExp: {
		type: Number
	}
})

const USer = mongoose.model('USer', userSchema)

module.exports = { User }