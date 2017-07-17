import React from 'react';
import { Link } from 'react-router';
import { Appconsts } from '../globals/Appconsts';
import { Accounts } from 'meteor/accounts-base';


export default class Signup extends React.Component {
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
    let confirm_password = this.refs.confirm_password.value.trim();
    let profile = {
      username: '',
      first_name: this.refs.profile_name.value.trim(),
      last_name: '',
      title: '',
      profile_picture: '',
      credentials_macroses: {},
      registration_date: Date.now(),
      influencer: [],
      follower: [],
      created_macroses: {},
      credentials_macroses: {},
      status: ''
    }

    if(email != '' && password === confirm_password){
      console.log(email + ' - ' + password);
      Accounts.createUser({email, password, profile}, (err)=>{
        if(err){console.log('Error accured during signup: ', err);}
      });
    }

    // this.setState({
    //   error: "Something went wrong!!!"
    // });
  }
  render(){
      return (
        <div>
            <h1>Join to {Appconsts.app_name}</h1>
            <p>Please sign up with your real name and email address.</p>
            {this.state.error ? <p>{this.state.error}</p> : undefined }
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="First name" ref="profile_name" name="name" placeholder="First name"/>
                <input type="email" ref="email" name="email" placeholder="Email"/>
                <input type="password" ref="password" name="password" placeholder="Password"/>
                <input type="password" ref="confirm_password" name="confirm_password" placeholder="Confirm password"/>
                <button>Create an account</button>
            </form>
            <Link to="/login">I already have an account.</Link>
        </div>
      );
  }
}
