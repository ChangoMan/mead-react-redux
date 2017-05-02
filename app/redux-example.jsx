var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();
    console.log('New State', state);
    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a target="_blank" href="'+state.map.url+'">View Your Location</a>'
    }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Hunter'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Cool Runnings', 'comedy'));

store.dispatch(actions.changeName('Mary'));

store.dispatch(actions.addMovie('Matrix', 'action'));
store.dispatch(actions.removeMovie(1));