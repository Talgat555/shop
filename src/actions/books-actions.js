export const SET_BOOKS='SET_BOOKS';
export const ADD_BOOKS='ADD_BOOKS';



export const setBooks = (books) => ({
    payload: books,
    type: SET_BOOKS,
});