import createStore from "redux/src/createStore";
import applyMiddleware from "redux/src/applyMiddleware";
import {logger} from "redux-logger";
import rootReducer from "./reducers/index-redusers";





export default ()=> {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store;
};