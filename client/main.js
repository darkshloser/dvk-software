// Packages
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Pages
import Signup from './../imports/ui/Signup';
import ProfileSettings from './../imports/ui/ProfileSettings';
import FrontPage from './../imports/ui/FrontPage';
import AppRoom from './../imports/ui/AppRoom';
import AccountManager from './../imports/ui/AccountManager';
import NotFound from './../imports/ui/NotFound';

// Routing
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/profilesettings" component={ProfileSettings}/>
    <Route path="/approom" component={AppRoom}/>
    <Route path="/accountmanager" component={AccountManager}/>
    <Route path="*" component={NotFound}/>
  </Router>
);


Meteor.startup(() => {
  ReactDOM.render( routes , document.getElementById('app'));
});
