

import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { studentGetReducers } from './Reducers/Student';
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    student: studentGetReducers
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))