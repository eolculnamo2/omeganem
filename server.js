var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieSession = require('cookie-session')
var LocalStrategy = require('passport-local').Strategy;

var Account = require("./db/data.js")
var users = require('./routes/users')
var app = express();
var router = express.Router();
var Schema =mongoose.Schema;
var uri = "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds235785.mlab.com:35785/singletempo";
mongoose.connect(uri)

var sched = new Schema({
  schedule: Array
})
var ab = new Schema({
  about: String
})
var scheduleModel = mongoose.model("once", sched,"omeganemeses")
var aboutModel = mongoose.model("second", ab,"omeganemeses")
//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", users)

app.get("/", (req,res)=>{
  res.sendFile(__dirname+"/views/index.html")
})
app.get("/bandLogin", (req,res)=>{
  res.render(__dirname+"/views/bandLogin.ejs",{
  user: ""
  })
})

app.get("/dashboard", (req,res)=>{
  //Will add below findbyidandupdate to a .post according to form data
  aboutModel.findByIdAndUpdate("5a28d348734d1d69e07e8205",{"about": "bacon"},(err,result)=>{
    console.log(result)
  })
  res.render(__dirname+"/views/bandLogin.ejs",{
    user: req.user.username
  });
});

app.get("/logout",(req,res)=>{
  req.logout();
  res.redirect("/bandLogin")
})


app.listen(3000,()=>{
  console.log("Server ON")
})
