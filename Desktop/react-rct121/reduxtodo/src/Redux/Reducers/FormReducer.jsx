

const initStore = {
    
}


export const FormReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FORM_ACTION':
            return {
                ...state,
                [action.form.id]: action.form
            }
        default:
            return state
    }
}