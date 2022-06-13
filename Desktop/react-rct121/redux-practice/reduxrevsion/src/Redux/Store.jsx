
import { IncreaseReducer } from './Reducers/Increase';
// import { DecreaseReducer } from './Reducers/Increase';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const rootReducer = combineReducers({
    IncreaseReducer,
    // DecreaseReducer
});

export const Store = createStore(rootReducer);