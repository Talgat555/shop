import createStore from "redux/src/createStore";
import applyMiddleware from "redux/src/applyMiddleware";
import {logger} from "redux-logger";
import combineReducers from "redux/src/combineReducers";
import cardsReducers from "./reducers/cards-reducer";
import booksReducers from "./reducers/books-reduscer";
import filterReducers from "./reducers/filter-reducer";


const reducers = combineReducers({
    books: booksReducers,
    cards: cardsReducers,
    filter: filterReducers
});


const store = ()=> createStore(reducers, applyMiddleware(logger));

export default store;