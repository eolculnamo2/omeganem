var React = require('react');
var Schedule = require('./schedule.jsx');
var CurrentSchedule = require('./currentSched.jsx')
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
          <br/>
        <hr/>
        <br/>
        <CurrentSchedule/>
        <br/>
        <hr/>
        <br/>
        <h3>
        Edit About Section
        </h3>
        <form method = "POST" action="/updateAbout">
          <textarea name = "about">
            {aboutVar}
          </textarea><br/>
          <button type = "submit">
          Update About Section
          </button>
        </form>
      </div>)
  },
  render: function(){
    return this.dashboard();
  }
})

module.exports = Dashboard;