var React = require('react');
var Schedule = require('./schedule.jsx')
//Schedule Editor and About Editor Components Nested in Dashboard for Changes to site by Band Members

var Dashboard = React.createClass({
  dashboard: function(){
    return(
    <div>
        <a href = "/logout">Logout</a>
      <h1>
        Welcome {userOnline}
        </h1> 
      <Schedule/>
      </div>)
  },
  render: function(){
    return this.dashboard();
  }
})

module.exports = Dashboard;