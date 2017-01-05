const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('uuid');

const TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Feed the cat'
                },
                {
                    id: uuid(),
                    text: 'Buy milk'
                }
            ]
        };
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('componentDidUpdate');
    },
    componentWillUpdate: function (nextProps, nextState) {
        // console.log('componentWillUpdate');
    },
    componentWillMount: function () {
        // console.log('componentWillMount');
    },
    componentDidMount: function () {
        console.log('componentDidMount');
        console.log('refs:', this.refs);
        console.log('props:', this.props);
        //console.log('state:',this.state);
    },
    componentWillUnmount: function () {
        // console.log('component did unmount');
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div className='page-title'>
                <TodoSearch onSearch={this.handleSearch} />
                <h1 >This is the Todo App</h1>
                <TodoList todos={todos} />
                <AddTodo onAddTodo = {this.handleAddTodo} />
             </div>
        );
    }
});

module.exports = TodoApp;
