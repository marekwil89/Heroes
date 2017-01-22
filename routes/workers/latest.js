var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');

router.get('/latest', function(req, res){
  Worker.find({}).sort({created_at: -1}).limit(3).exec(function(err, latest) {
    if(err){
      console.log(err)
    }
    return res.send(latest)
  });
})

module.exports = router;