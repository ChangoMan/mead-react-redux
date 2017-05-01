var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        movie: action.movie,
                        genre: action.genre
                    }
                ]
            };
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();
    console.log('Name is', state.name);
    console.log('New State', state)
});

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
    type: 'CHANGE_NAME',
    name: 'Hunter'
};
store.dispatch(action);

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Cool Runnings',
    genre: 'comedy'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Mary'
});

store.dispatch({
    type: 'ADD_MOVIE',
    movie: 'Matrix',
    genre: 'action'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});