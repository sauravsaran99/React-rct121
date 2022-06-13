

import { INCR_EASE } from '../Action/Increase';
import { DECREASE } from '../Action/Decrease';

const initialStore = {
    count: 0
}

export const IncreaseReducer = (store=initialStore, action) => {
    switch(action.type) {
        case INCR_EASE:
            return {
                ...store,
                count: store.count + 1
            }

       case DECREASE:
           return {
               ...store,
               count: store.count - 1
           }    

        default:
            return store;
    }
}