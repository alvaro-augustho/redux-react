var redux = require('redux');

console.log('Starting redux example');

//  Name reducer and generators
// --------------------------------
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

//  Hobbies reducer and generators
// --------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {   
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
                ];
        case 'REMOVE_HOBBY':
             return state.filter((hobby) => hobby.id !== action.id)
        default:
            return state;
    }  
};

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }  
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }  
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer
});

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

store.dispatch(changeName('Alvaro'));

store.dispatch(addHobby('Walking'));

store.dispatch(addHobby('Running'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));