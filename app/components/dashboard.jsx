var React = require('react');
var Schedule = require('./schedule.jsx');
var CurrentSchedule = require('./currentSched.jsx')
var Inbox = require('./inbox.jsx')

//Schedule Editor and About Editor Components Nested in Dashboard for Changes to site by Band Members

var Dashboard = React.createClass({
  dashboard: function(){
    return(
    <div>
        <a href = "/logout">Logout</a><br/>
      <h1 className = "inline">
        Welcome {userOnline}
        </h1> 
        <img className = "dashImg" src = "https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/11329921_921379911217891_8472838618740884602_n.jpg?oh=0f2e28d24626f21243bdf726d45fb04e&oe=5AD51A65"/>
      <Schedule/>
          <br/>
        <hr/>
        <br/>
        <Inbox/>
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