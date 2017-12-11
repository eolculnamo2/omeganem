var React = require('react');

var Inbox = React.createClass({
  render: function(){
    return(
      <div>
        <h3>
        Inbox
        </h3>
        <div className="inboxBox">
        {messageVar.map((x)=>{
          return(
          <div>
               {"Name: "+x.name+" Number: "+x.number+" Email "+x.email+" Message "+x.details}
            </div>)
   })}
        </div>
      </div>
      )
  }
})

module.exports = Inbox;