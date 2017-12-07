var React = require('react');
var ReactDOM = require('react-dom')

var Login = require('./components/login')
var Dashboard = require('./components/dashboard')

var application = ReactDOM.render(
 userOnline.length > 0 ? <Dashboard/> : <Login/>
  , document.getElementById('app'))

