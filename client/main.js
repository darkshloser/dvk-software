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

// browserHistory
// window.browserHistory = browserHistory;

// Tracking user authentication
Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  // if on signup or loging page and user is logged in redirect
  
});

// Pages which can and can't be loaded regarding authentication status (if user is loged in or not)
const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/profilesettings', '/approom', '/accountmanager'];

// Routing
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={FrontPage}/>
    <Route path="/login" component={Login}/>
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
