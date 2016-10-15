var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: []
}

var nextHobbyId = 1;
var reducer = (state = stateDefault, action) => {
    
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
        default:
            return state;
    }
    
    return state;
};
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    
    console.log('Name is ', state.name);
    document.getElementById('app').innerHTML = state.name;
    
    console.log('State is ', store.getState());
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Alvaro'
});

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
    type: 'CHANGE_NAME',
    name: 'Emily'
});