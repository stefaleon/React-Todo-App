const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <div id="no_todos">
                        Nothing to do
                     </div>
                );
            }

            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
                );
            });
        };

        return (
            <div className="container_todolist">
                {renderTodos()}
             </div>
        );
    }
});

module.exports = TodoList;
