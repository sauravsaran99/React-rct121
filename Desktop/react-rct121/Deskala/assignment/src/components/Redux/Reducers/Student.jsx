

import { STUDENT_GET } from "../Actions/Student";

const initialState = {
    student: []
}
export const studentGetReducers = (store=initialState, action) => {
    switch(action.type) {
        case STUDENT_GET:
            return {...store, student: action.payload}
        default:
            return store
    }
}