const React = require('react');

const About = () => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p> React Todo App
            </p>
            <p> It is a part of <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">
                    The Complete React Web App Developer Course </a> by <a href="http://www.mead.io/" target="_blank">Andrew Mead</a>.
            </p>
            <p>
               It is built on <a href="https://facebook.github.io/react" target="_blank">React</a> and styled with <a href="http://foundation.zurb.com/" target="_blank">Foundation</a>.
            </p>
        </div>
    );
};

module.exports = About;
