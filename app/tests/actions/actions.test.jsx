const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    it('should generate text search action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });


    it('should generate add todo action', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Some text'
            };
            var res = actions.addTodo(action.text);

            expect(res).toEqual(action);
    });

    it('should generate add todos action object', () => {
            var todos = [{
                id: '1111',
                text: 'Some text',
                completed: false,
                completedAt: undefined,
                createdAt: 333332
            }];
            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = actions.addTodos(todos);

            expect(res).toEqual(action);
    });

    it('should generate toggleShowCompleted action', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = actions.toggleShowCompleted();

            expect(res).toEqual(action);
    });

    it('should generate toggleTodo action', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: '1234'
            };
            var res = actions.toggleTodo(action.id);

            expect(res).toEqual(action);
    });

});
