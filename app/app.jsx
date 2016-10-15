var React = require('react');
var ReactDOM = require('react-dom');
var {
    Route, Router, IndexRoute, hashHistory
} = require('react-router');

// Load Foundation
$(document).foundation();

//App style
require('style!css!sass!ApplicationStyles')

//ReactDOM.render(
  //      <p>Boilerplate project</p>,
    //    document.getElementById('app')
    //);

require('./redux-example.jsx');
//require('./redux-todo-example.jsx');