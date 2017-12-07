var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var Account = require('../db/data');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser')
var express = require('express');
var router = express.Router();
 var Strategy = require('passport-local').Strategy;

router.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: ["l023f2oginsdlkbjenrbuerlibun34gunbo4g2"]
}))

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
//Register User
router.post('/register', function(req, res) {
  console.log(req.body.password +"===" +req.body.confirmPassword)
  if(req.body.password === req.body.confirmPassword){
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            //return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/dashboard');
        });
    });
  }
  else{
    res.send("Passwords Do Not Match")
  }
});

router.use(passport.initialize());
router.use(passport.session());


passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req.user)
    res.redirect('/dashboard');
});

module.exports = router;