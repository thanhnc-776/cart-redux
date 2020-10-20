import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import appReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById("root"));
serviceWorker.register();
