var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var validAuth = require('../../validation/auth.js')
var passConfig = require('./workerConfig.js')


passConfig(passport, LocalStrategy);

router.post('/registerWorker', validAuth.isAlreadyName, validAuth.registerWorker,
	passport.authenticate('registerWorker', {
		successRedirect: '/comnAuth/success',
		failureRedirect: '/comnAuth/registerFail'
	})
)

router.post('/loginWorker', validAuth.login,
	passport.authenticate('loginWorker', {
		successRedirect: '/comnAuth/success',
		failureRedirect: '/comnAuth/loginFail'
	})
)

module.exports = router;