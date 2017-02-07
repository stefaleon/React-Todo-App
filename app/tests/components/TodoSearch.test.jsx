const React =  require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const {TodoSearch} = require('TodoSearch');

describe('TodoSearch', () => {

    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT when text is entered', () => {

        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'eggs'
        };
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch = {spy} />)

        todoSearch.refs.searchText.value = 'eggs';
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is ticked', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch = {spy} />)

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });

});
