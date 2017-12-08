var React = require("react")

var CurrentScheduleList = React.createClass({
  iterator: function(){
    return(
    <div>
        {scheduleVar.map((x,i)=>{
      return(
      <div>
          <form method = "POST" action = "/deleteEvent">
      <input name = "index" value = {x.place} type = "hidden"/>
        <h5 className = "inline">{x.place+" "+ x.date +" at "+ x.time+"  "}</h5>
            <button className = "inline" type = "submit">
            Delete
            </button>
            <br/>
            </form>
      </div>
        )
    })}
    </div>
      )
  },
  render: function(){
    return(
    <div>
        <h3>
        Delete Scheduled Event
        </h3>
     {this.iterator()}
    </div>
      )
  }
})

module.exports = CurrentScheduleList;