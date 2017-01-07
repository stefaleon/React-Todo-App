const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created on '
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed on';
                timestamp = completedAt;    
            }

            return  message + moment.unix(timestamp).format('MMM Do, YYYY @ hh:mm');
        };

        return (
            <div onClick={ () => {
                    this.props.onToggle(id)
                }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;
