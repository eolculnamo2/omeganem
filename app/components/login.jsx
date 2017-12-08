var React = require('react');

var LoginPage = React.createClass({
  getInitialState: function(){
    return {display: "login"}
  },
  toggle: function(){
    this.state.display === "login" ? this.setState({display: "register"}) : this.setState({display: "login"})
  },
  register: function(){
    var test = prompt("Please Enter Band Key to Register")
    if(test !== "fa4ofFEFno23of32fOnon"){
    this.setState({display: "login"});
    }
    return(
    <div>
    <h1>
        Registration
        </h1>
    <form method = "POST" action = "/register">
      <input className = "input1" placeholder = "Username" name = "username" />
      <input className = "input1" placeholder = "Password" name = "password" type = "password"/>
      <input className = "input1"  placeholder = "Confirm Password" name = "confirmPassword" type = "password"/>
      <br/>
      <button type = "submit">
        Register
      </button>
      <button onClick = {this.toggle} type = "button">
      Back
      </button>
    </form>
    </div>
      )
  },
  form: function(){
    return(
    <div>
        <h1>
        Admin Login
        </h1>
      <form method = "POST" action = "login">
        <input className = "input1" placeholder = "username" name = "username" /><br/>
        <input className = "input1"  placeholder = "password" name = "password" type = "password"/>
        <br/>
        <button type = "submit">
        Login
        </button>
        <button onClick = {this.toggle} type = "button">
        Register
        </button>
        </form>
      </div>
    )
  },
  render: function(){
    if(this.state.display === "login"){
      return this.form();
    }
    if(this.state.display === "register"){
     return this.register();
    }
  }
});

module.exports = LoginPage