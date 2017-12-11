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

var contact = new Schema({
  "contact": Array
})
var scheduleModel = mongoose.model("once", sched,"omeganemeses")
var aboutModel = mongoose.model("second", ab,"omeganemeses")
var contactModel = mongoose.model("third", contact,"omeganemeses")
//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", users)

app.get("/", (req,res)=>{
  aboutModel.findById("5a28d348734d1d69e07e8205",(err,result)=>{
    scheduleModel.findById("5a28d331734d1d69e07e81f8",(err2,result2)=>{
  res.render(__dirname+"/views/index.ejs",{
    about: result.about,
    schedule: result2.schedule
  })
      })
  });
})
app.get("/bandLogin", (req,res)=>{
  res.render(__dirname+"/views/bandLogin.ejs",{
  user: "",
  about: "",
  schedule: "",
  messages: ""
  })
})

app.get("/dashboard", (req,res)=>{
  aboutModel.findById("5a28d348734d1d69e07e8205",(err,result)=>{
    scheduleModel.findById("5a28d331734d1d69e07e81f8",(err2,result2)=>{
      contactModel.findById("5a28d331734d1d69e07e81f8",(err3,result3)=>{
       
  res.render(__dirname+"/views/bandLogin.ejs",{
    user: req.user.username,
    about: result.about,
    schedule: result2.schedule,
    messages: result3.contact
      });
        
        });
      });
   });
});

app.get("/logout",(req,res)=>{
  req.logout();
  res.redirect("/bandLogin")
})

app.post("/updateAbout", (req,res)=>{
  aboutModel.findByIdAndUpdate("5a28d348734d1d69e07e8205",{"about": req.body.about},(err,result)=>{
    res.redirect("/dashboard")
  })
});

app.post("/addEvents",(req,res)=>{
    var length = req.body.totalInputs;
  
  for(var i=0; i< length; i++){
    var places = "place"+i.toString();
    var date = "date"+i.toString();
    var time = "time"+i.toString();
  
  scheduleModel.findByIdAndUpdate("5a28d331734d1d69e07e81f8",
                                  {$push: {"schedule": {
                                    "place": req.body[places],
                                    "date": req.body[date],
                                    "time": req.body[time]}}},(req,res)=>{
    
  })
  }
    
    res.redirect("/dashboard")
})

app.post("/deleteEvent",(req,res)=>{
  scheduleModel.findByIdAndUpdate("5a28d331734d1d69e07e81f8",{$pull:
                                                             {"schedule": {place: req.body.index}}},(err,result)=>{
    res.redirect("/dashboard")
  })
})

app.post("/contactInfo", (req,res)=>{
  
  var cont = {
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    details: req.body.details
  }
  //NOTE: This needs to become accessible to users in scroll box where messsages can be read and deleted
  contactModel.findByIdAndUpdate("5a28d331734d1d69e07e81f8", {$push: {"contact": cont}},(err,result)=>{
    res.send("Thank you! We will contact you soon.")
  });
  
});
                                     
app.listen(3000,()=>{
  console.log("Server ON")
})
