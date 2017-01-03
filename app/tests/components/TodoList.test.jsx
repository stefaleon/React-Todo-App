const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'do something'
        }, {
            id: 2,
            text: 'do it'
        }];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    });
});
