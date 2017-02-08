const React =  require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const About = require('About');
const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


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
    <div className="container">
        <h3 className="text-center">Todo App </h3>
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    </div>,
        document.getElementById('app')
);
