import {ADD_BOOKS, SET_BOOKS} from "../actions/books-actions";


const initialState = {
    books: [
        {
            id: 0,
            title: 'Джордж Оруел',
        },
    ]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                    ]
            };
        case ADD_BOOKS:
            return{
                books: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
};