import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { Appconsts } from '../globals/Appconsts';
// import { Accounts } from 'meteor/accounts-base';


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err)=>{
      if (err) {
        this.setState({error: 'Unable to login. Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });

    // if(email != '' && password === confirm_password){
    //   console.log(email + ' - ' + password);
    //   Accounts.createUser({email, password, profile}, (err)=>{
    //     if(err){console.log('Error accured during signup: ', err);}
    //   });
    // }

    // this.setState({
    //   error: "Something went wrong!!!"
    // });
  }
  render(){
      return (
        <div>
            <h1>Login to {Appconsts.app_name}</h1>
            <p>Please sign up with your real name and email address.</p>
            {this.state.error ? <p>{this.state.error}</p> : undefined }
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <Link to="/signup">"I don't have an account."</Link>
        </div>
      );
  }
}
