const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-centered">
                <ul className="menu">
                    <li className="menu-text">React Todo App</li>
                    <li><IndexLink to="/todoapp" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Todos</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                </ul>
            </div>            
        </div>
    );
};

module.exports = Nav;
