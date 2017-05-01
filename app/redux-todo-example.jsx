var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    showCompleted: false,
    searchText: '',
    todos: []
}

var reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'drive'
});