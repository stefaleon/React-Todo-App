const React = require('react');
const {connect} = require('react-redux');
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
                    <Todo key={todo.id} {...todo} />
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

module.exports = connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
) (TodoList);
