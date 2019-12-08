import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import './app.css';
import Provider from "react-redux/es/components/Provider";
import store from "./redux/store";
import AppContainer from "./App";


ReactDOM.render(
    <Provider store={store()}>
        <AppContainer />
    </Provider>, document.getElementById('root'));
