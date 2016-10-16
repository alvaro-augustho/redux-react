var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();




// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    
    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if(state.map.url) {
        document.getElementById('app').innerHTML = '<a target="_blank" href="'+state.map.url+'" >View your location<a/>'
    }
    
    console.log('State is ', store.getState());
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Alvaro'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));