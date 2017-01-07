const React = require('react');

const AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var text = this.refs.text.value;

        if (text.length > 0) {
            this.props.onAddTodo(text);
            this.refs.text.value = '';
        } else {
            this.refs.text.focus();
        }
    },
    render: function () {
        return (
            <div className="container_addtodos">
                <form onSubmit={this.onSubmit} className="addtodo-form">
                    <input type="text" ref="text" placeholder="What to do?" />
                    <input type="submit" className="button expanded" value='Add Todo' />
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
