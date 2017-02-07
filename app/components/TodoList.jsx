const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export const TodoList = React.createClass({
    render: function () {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <div id="no_todos">
                        Nothing to do
                     </div>
                );
            }

            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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

export default connect(
    (state) => {
        return state;
    }
) (TodoList);
