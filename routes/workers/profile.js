var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');
var validAuth = require('../validation/auth.js')
var validProfile = require('../validation/profile.js')

router.put('/editProfile/:id', validAuth.isAuth, validAuth.isWorker, validAuth.isAlreadyName, validProfile.editProfile, function(req, res){
	Worker.findById({_id: req.params.id}, function(err, worker){
		worker.name = req.body.name;
		worker.descr = req.body.descr
		worker.adress = req.body.adress

		worker.save(function(err){
			if(err){
				console.log(err)
			}
			return res.send({state: 'success'})
		})
	})
})

module.exports = router;