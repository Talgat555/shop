import combineReducers from "redux/src/combineReducers";
import books from "./books-reduscer";
import cards from "./cards-reducer";


export default combineReducers({
        books,
        cards
});