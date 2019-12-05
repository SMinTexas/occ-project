import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { render } from "react-dom";
import reducer from "./store/reducer";
import BaseLayout from "./components/BaseLayout";
import Logon from "./components/Logon";
import Dashboard from "./components/Dashboard";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render( 
<Provider store = { store } >
    <BrowserRouter >
        <div style = {{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }
        } >
            <BaseLayout >
                <Switch >
                    <Route path = "/" exact component = { App } />  
                    <Route path = "/logon" component = { Logon } /> 
                    <Route path = "/dashboard" component = { Dashboard } /> 
                </Switch>  
            </BaseLayout>  
        </div>  
        </BrowserRouter>  
    </Provider>,
    document.getElementById("root")
);