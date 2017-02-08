const expect = require('expect');
const reducers = require('reducers');
const df =  require('deep-freeze-strict');

describe('Reducers', () => {
     describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
        var res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
       it('should flip the showCompleted state', () => {
           var action = {
               type: 'TOGGLE_SHOW_COMPLETED'
           };
       var res = reducers.showCompletedReducer(df(false), df(action));
       expect(res).toEqual(true);
       });
   });

   describe('todosReducer', () => {
      it('should add new todo', () => {
          var action = {
              type: 'ADD_TODO',
              text: 'Walk the dog'
          };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
      });

      it('should toggle todo completed to incomplete', () => {
          var todos = [{
              id: '123',
              text: 'some text',
              completed: true,
              createdAt: 123,
              completedAt: 124
          }];
          var action = {
              type: 'TOGGLE_TODO',
              id: '123'
          };
          var res = reducers.todosReducer(df(todos), df(action));

          expect(res[0].completed).toEqual(false);
          expect(res[0].completedAt).toEqual(undefined);
      });

      it('should toggle todo incomplete to completed', () => {
          var todos = [{
              id: '123',
              text: 'some text',
              completed: false,
              createdAt: 123,
              completedAt: undefined
          }];
          var action = {
              type: 'TOGGLE_TODO',
              id: '123'
          };
          var res = reducers.todosReducer(df(todos), df(action));

          expect(res[0].completed).toEqual(true);
          expect(res[0].completedAt).toNotEqual(undefined);
      });

      it('should add existing todos', () => {
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

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
      });

  });
});
