const React =  require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const About = require('About');
const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Eat a carrot'));
store.dispatch(actions.setSearchText('carrot'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    // <Router history={hashHistory}>
    //     <Route path="/" component={Main}>
    //         <Route path="todoapp" component={TodoApp} />
    //         <Route path="about" component={About} />
    //         <IndexRoute component={TodoApp} />
    //     </Route>
    // </Router>,
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
