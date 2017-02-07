const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const TodoSearch = React.createClass({
    render: function () {
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="container_todosearch">
                <div>
                        <input type="search" ref="searchText" value={searchText}
                             placeholder="Search todos" onChange={() => {
                                 var searchText = this.refs.searchText.value;
                                 dispatch(actions.setSearchText(searchText));
                             }} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" checked={showCompleted}
                            onChange={() => {
                                dispatch(actions.toggleShowCompleted());
                            }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
) (TodoSearch);
