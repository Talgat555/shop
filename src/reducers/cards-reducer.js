




const initialState = {
    cards: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                cards: action.payload
            };
        case 'ADD_CARDS':
            return{
                cards: [
                    ...state.cards,
                    action.payload
                ]
            };
        default:
            return state;
    }
};