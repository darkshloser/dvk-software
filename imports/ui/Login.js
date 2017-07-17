import React from 'react';
import { Appconsts } from '../globals/Appconsts';

export default class Login extends React.Component {
  render(){
      return (
        <div>
          <h1>Login to {Appconsts.app_name}</h1>
        </div>
      );
  }
}
