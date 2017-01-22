var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var Worker = mongoose.model('Worker');

router.get('/best', function(req, res){
  Worker.findOne({}).sort('-average').exec(function (err, worker) {
    if(err){
      console.log(err)
    }
    return res.send(worker)
  });
})

module.exports = router;