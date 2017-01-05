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
                    text: 'Feed the cat',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Buy milk',
                    completed: true
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        //alert(id);
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
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
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo = {this.handleAddTodo} />
             </div>
        );
    }
});

module.exports = TodoApp;
