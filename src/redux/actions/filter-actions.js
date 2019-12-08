export const SET_FILTER = 'SET_FILTER';
export const SET_QUERY = 'SET_QUERY';



export const setFilter=(payload)=>({type: SET_FILTER, payload});

export const setSearchQuery=(payload)=>({type: SET_QUERY, payload});