// Packages
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

// Pages
import Signup from '../imports/ui/Signup';
import ProfileSettings from '../imports/ui/ProfileSettings';
import FrontPage from '../imports/ui/FrontPage';
import AppRoom from '../imports/ui/AppRoom';
import AccountManager from '../imports/ui/AccountManager';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

// Pages which can and can't be loaded regarding authentication status (if user is loged in or not)
const unauthenticatedPages = ['/signup', '/login'];
const authenticatedPages = ['/profilesettings', '/approom', '/accountmanager'];

const onEnterPrivatePage = () => {
  if (!Meteor.userId()){
      browserHistory.replace('/login');
  }
};

const onEnterPublicPage = () => {
  if (Meteor.userId()){
      browserHistory.replace('/');
  }
};


// Routing
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage}/>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/profilesettings" component={ProfileSettings} onEnter={onEnterPrivatePage}/>
    <Route path="/approom" component={AppRoom} onEnter={onEnterPrivatePage}/>
    <Route path="/accountmanager" component={AccountManager} onEnter={onEnterPrivatePage}/>
    <Route path="*" component={NotFound}/>
  </Router>
);



// browserHistory
// window.browserHistory = browserHistory;

// Tracking user authentication
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  
});


Meteor.startup(() => {
  ReactDOM.render( routes , document.getElementById('app'));
});
