export const ADD_BOOK='ADD_BOOK';
export const REMOVE_BOOK='REMOVE_BOOK';



export const addBook =(payload)=>({type: ADD_BOOK, payload});

export const removeBook =(payload)=>({type: REMOVE_BOOK, payload});