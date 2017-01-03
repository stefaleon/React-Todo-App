const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                <h2 className='page-title'>This is the TodoList component</h2>
                {renderTodos()}
             </div>
        );
    }
});

module.exports = TodoList;
