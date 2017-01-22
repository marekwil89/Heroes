var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');
var validAuth = require('../validation/auth.js')
var validWorkers = require('../validation/workers.js')

var success = []

router.get('/detail/:id', function(req, res){
	Worker.findOne({_id: req.params.id}, function(err, worker){
		if(err){
			console.log(err)
		}
		res.send(worker)
	})
})

router.post('/addOpinion/:id', validAuth.isAuth, validAuth.isUser, validWorkers.addOpinion, function(req, res){
	Worker.findOne({_id: req.params.id}, function(err, worker){

		var sumRate = 0;
		var opinion = {
			author: req.user,
			text: req.body.text,
			rate: req.body.rate
		}

		worker.opinions.push(opinion)

		for(var i = 0; i < worker.opinions.length; i++){
			sumRate = sumRate + worker.opinions[i].rate
		}

		worker.average = sumRate / worker.opinions.length

		worker.save(function(err){
			if(err){
				console.log(err)
			}
			
			success[0] = {msg: 'you added opinion'}
			return res.send(success)
		})
	})
})

module.exports = router;