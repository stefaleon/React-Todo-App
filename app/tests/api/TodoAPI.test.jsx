const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    // clear localStorage before running each TestUtils
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 123 ,
                text: 'Feed the cat',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var todos = { bad: 1234 };
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for invalid or not available todos', () => {
            // since localStorage is cleared, we get the empty array
            expect(TodoAPI.getTodos()).toEqual([]);
        });

        it('should return the todo if it is valid', () => {
            var todos = [{
                id: 123 ,
                text: 'Feed the cat',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'sometext',
            completed: true
        }, {
            id: 2,
            text: 'othertext',
            completed: false
        },{
            id: 3,
            text: 'sometext',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return only non-completed items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

    });


});
