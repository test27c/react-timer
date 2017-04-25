var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// Load foundation
$(document).foundation();

// Load app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}></Route>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('app')
);
