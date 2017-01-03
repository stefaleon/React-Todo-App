const React =  require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const About = require('About');
const TodoApp = require('TodoApp');


// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="todoapp" component={TodoApp} />
            <Route path="about" component={About} />
            <IndexRoute component={TodoApp} />
        </Route>
    </Router>,
    document.getElementById('app')
);
