import {ADD_BOOK, REMOVE_BOOK} from "../actions/cards-actions";


const initialState = {
    items: []
};


const cardsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return{
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            };
        case REMOVE_BOOK:
            return{
                ...state,
                items: state.items.filter( el => el.id != action.payload)
            };
        default:
            return state;
    }
};

export default cardsReducers;