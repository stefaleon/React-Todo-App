const React = require('react');

const Todo = React.createClass({
    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <h3>{id}. {text}</h3>
            </div>
        );
    }
});

module.exports = Todo;
