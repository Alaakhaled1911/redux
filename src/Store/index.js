import { createStore } from 'redux';
const initState = { counter : 0 , showCounter : false};
const counterReducer = (state = initState , action ) => {
    if (action.type === 'increase')
    {
        return {...state, counter :state.counter + action.payload  }
    }
    if (action.type === 'decrease')
    {
        return {...state, counter :state.counter - action.payload  }
    }
    if (action.type ==='toggleCounter')
    {
        return {...state, showCounter: !state.showCounter}
       
    }
    return state;
}
const store = createStore(counterReducer);
export default store;