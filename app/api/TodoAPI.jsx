const $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e.message);
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return (todo.completed === false || showCompleted);
        });

        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            return ( searchText === '' || text.indexOf(searchText.toLowerCase()) > -1);
        });

        // sort, non-completed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            }
            else if (a.completed && !b.completed) {
                return 1;
            }
            else {
                return 0;
            }
        });

        return filteredTodos;
    }
};
