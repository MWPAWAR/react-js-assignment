import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from '../containers/container';
import Contact from '../components/Contact';
import Profile from '../components/Profile';
import Team from '../components/Team';
import AboutUs from '../components/AboutUs';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="aboutus/profile" component={Profile} />
      <Route path="aboutus/team" component={Team} />
      <Route path="aboutus/contact" component={Contact} />
    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
