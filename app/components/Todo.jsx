const React = require('react');

const Todo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div onClick={ () => {
                    this.props.onToggle(id)
                }}>
                <input type="checkbox" checked={completed} />
                {text}
            </div>
        );
    }
});

module.exports = Todo;
