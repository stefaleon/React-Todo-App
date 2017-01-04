const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch when text is entered', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy} />)

        todoSearch.refs.searchText.value = 'eggs';
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'eggs');
    });

    it('should call onSearch when checkbox is ticked', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch = {spy} />)

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });

});
