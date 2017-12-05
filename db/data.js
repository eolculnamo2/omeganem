var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var uri = "mongodb://"+process.env.MONGO_USER+":"+process.env.MONGO_PASS+"@ds235785.mlab.com:35785/singletempo";
mongoose.connect(uri)
var user = new Schema ({
  username: String,
  password: String
})

var Account = mongoose.model("omeganemesis", user)

module.exports = Account;