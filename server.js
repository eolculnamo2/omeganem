var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieSession = require('cookie-session')
var LocalStrategy = require('passport-local').Strategy;

var users = require('./routes/users')
var app = express();
var router = express.Router();

//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", users)

app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/views/index.html")
})
app.get("/bandLogin", (req,res)=>{
  res.sendFile(__dirname+"/views/bandLogin.html")
})


app.listen(3000,()=>{
  console.log("Server ON")
})
