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
router.post('/register',(req,res)=>{
  console.log("registration attempt "+Account)
 Account.findOne({username: req.body.username}, (err,result)=>{
   if(!result){
     new Account ({
       username: req.body.username,
       password: req.body.password
     }).save().then(()=>{
       res.send('registration complete')
     })
   }
 })

})
router.use(passport.initialize());
router.use(passport.session());


passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
        return done(null, false);
      }
      return done(null, user);
    });
  }
));

router.post('/login',
  passport.authenticate('local', {
     successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);

passport.serializeUser(function(user, done) {
 console.log("serializing")
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log("serializing")
  done(null, user);
});


router.get('/loginFailure', function(req, res, next) {
  res.send('Failed to authenticate');
});

router.get('/loginSuccess', function(req, res, next) {
  res.send('Successfully authenticated');
});

module.exports = router;