const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid input', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value = 'Buy eggs';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Buy eggs');
    });

    it('should not call onAddTodo prop with empty input', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo = {spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();      
    });
});
