import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app";
import {compose, createStore} from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(app,
    document.getElementById('root'));