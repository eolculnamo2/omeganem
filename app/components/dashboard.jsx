var React = require('react');

//Schedule Editor and About Editor Components Nested in Dashboard for Changes to site by Band Members

var Schedule = React.createClass({
  render: function(){
    <form method = "POST" action = "/addEvents">
      <input/> 
    </form>
  }
})

var Dashboard = React.createClass({
  dashboard: function(){
    return(
    <div>
        <a href = "/logout">Logout</a>
      <h1>
        Welcome: {userOnline}
        </h1> 
      
      </div>)
  },
  render: function(){
    return this.dashboard();
  }
})

module.exports = Dashboard;