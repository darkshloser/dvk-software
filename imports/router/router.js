// Packages
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Pages
import Signup from '../ui/Signup';
import ProfileSettings from '../ui/ProfileSettings';
import FrontPage from '../ui/FrontPage';
import AppRoom from '../ui/AppRoom';
import AccountManager from '../ui/AccountManager';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

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

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  // if unauthenticated user wants to go to page requiring authentication
  if(isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/');
  }else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/login');
  }
};

// Routing
export const routes = (
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
