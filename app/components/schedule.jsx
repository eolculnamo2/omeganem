var React = require('react');

var Schedule = React.createClass({
  getInitialState: function(){
    return {inputTally: ["x"], inputs: []}
  },
  changeInputs: function(x){
    //changeInputs takes input from buttons in addEvents to add or reduce inpu tags in addEvents
    var tally = this.state.inputTally;
    x === "push" ? tally.push("x") : tally.pop();
    this.setState({inputTally: tally});
  },
  addEvents: function(){
     return(
       <div>
        <h3>
          Add Events to Schedule 
         </h3>
         <button onClick = {()=>{this.changeInputs("push")}}>
         + Add Event
         </button>
         <button onClick = {()=>{this.changeInputs("pull")}}>
         - Delete Event
         </button>
       <form method = "POST" action = "/addEvents">
         <input type = "hidden" name = "totalInputs" value = {this.state.inputTally.length}/>
          {this.state.inputTally.map((x,i)=>{
           
           return(<div>
               Place:
               <input ref = "place" name = {"place"+i.toString()}/>
               Date:
               <input ref = "date" name = {"date"+i.toString()}/>
               Time:
               <input ref = "time" name = {"time"+i.toString()}/><br/>
          </div>
             )
           
             })}<br/>
         <button type = "submit">
         Add Events to Schedule
         </button>
    </form>
       </div>
       )
  },
  render: function(){
   return this.addEvents();
  }
})

//Is sent to components/dashboard.jsx
module.exports = Schedule