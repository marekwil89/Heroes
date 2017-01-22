var express = require('express');
var router = express.Router();

module.exports = {

	addOpinion: function(req, res, next){

		console.log(req.body.rate)

		var text = req.body.text
		var rate = req.body.rate

		req.checkBody('text', 'text is required').notEmpty();
		req.checkBody('rate', 'rate is required').notEmpty();

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}	

		next()
	}
}