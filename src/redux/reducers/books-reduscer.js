import {SET_BOOKS, SET_IS_READY} from "../actions/books-actions";


const initialState = {
    isReady: false,
    items: null
};


 const booksReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                items: action.payload,
                isReady:true
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
};

export default booksReducers;