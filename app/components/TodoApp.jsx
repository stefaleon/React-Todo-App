const React = require('react');
const uuid = require('uuid');
const moment = require('moment');


import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


const TodoApp = React.createClass({


    render: function () {

        return (
            <div className='page-title'>
                <TodoSearch />
                <TodoList />
                <AddTodo />
             </div>
        );
    }
});

module.exports = TodoApp;
