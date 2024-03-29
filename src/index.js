import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Body from "./containers/app/Body";
import MessageInfo from "./containers/info/MessageInfo";

if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    worker.start();
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <Body/>
            <MessageInfo/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);