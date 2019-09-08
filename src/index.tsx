import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import App from "components/App";
import configureStore from "configureStore";

ReactDOM.render(
    <Provider store={configureStore}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
