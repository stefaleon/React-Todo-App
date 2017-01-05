const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {

        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo('some test text');

        expect(todoApp.state.todos[0].text).toBe('some test text');
    });

    it('should toggle completed value when handleToggle called', () => {

        var todoData = {
            id: 123 ,
            text: 'Feed the cat',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(123);
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(123);
        expect(todoApp.state.todos[0].completed).toBe(false);
    });


});
