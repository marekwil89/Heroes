var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');

router.get('/list', function(req, res){
	Worker.find({}, function(err, workers){
		if(err){
			console.log(err)
		}
		return res.send(workers)
	})
})

module.exports = router;