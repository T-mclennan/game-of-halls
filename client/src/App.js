import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import { Provider } from "react-redux";
import store from "./store";
import history from "../src/history";
import Landing from "./components/layout/landing/Landing";
import Buildings from "./components/layout/building/Building";
import Input from "./components/layout/input/Input";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App ">
            <AppNavbar />
            <div className="display">
              <Route exact path="/" component={Landing} />
              <Route exact path="/input" component={Input} />
              <Route exact path="/buildings" component={Buildings} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
