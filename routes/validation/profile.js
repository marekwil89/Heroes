var express = require('express');
var router = express.Router();

module.exports = {
	editProfile: function(req, res, next){

		var name = req.body.name
		var descr = req.body.descr
		var adress = req.body.adress

		req.checkBody('name', 'name is required').notEmpty();
		req.checkBody('name', 'name required 6 to 20 characters').len(6, 20);

		req.checkBody('descr', 'description is required').notEmpty();
		req.checkBody('descr', 'description required 10-800 characters').len(10, 800)

		req.checkBody('adress', 'adress is required').notEmpty();
		req.checkBody('adress', 'adress required 0-50 characters').len(0, 50)

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}	

		next()
	}
}