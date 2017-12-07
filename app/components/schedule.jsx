var React = require('react');

var Schedule = React.createClass({
  getInitialState: function(){
    return {inputTally: ["x"]}
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
         +
         </button>
         <button onClick = {()=>{this.changeInputs("pull")}}>
         -
         </button>
       <form method = "POST" action = "/addEvents">
          {this.state.inputTally.map((x,i)=>{
           return(<div>
               Place:
               <input name = {"place"+i.toString()}/>
               Date:
               <input name = {"date"+i.toString()}/>
               Time:
               <input name = {"time"+i.toString()}/><br/>
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