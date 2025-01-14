// Reducer is a Pure Function
// A reducer is a function that determines changes to an application's state.
// It uses the action it receives via dispatcher, to determine this change. 

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.count, action) => {
    let newState;

    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            newState = state + action.payload;
            return newState;
        case actionTypes.DECREMENT_COUNTER:
            newState = state - action.payload;
            return newState;
        case actionTypes.MULTIPLY_COUNTER:
            newState = state * action.payload;
            return newState;
        default:
            return state;
    }
};

export default counterReducer;