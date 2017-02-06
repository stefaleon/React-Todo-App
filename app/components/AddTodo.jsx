const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var text = this.refs.text.value;

        if (text.length > 0) {
            dispatch(actions.addTodo(text));
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

export default connect() (AddTodo);
