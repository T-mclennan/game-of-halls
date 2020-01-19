import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import AppNavbar from "./components/layout/AppNavbar";
import { Provider } from "react-redux";
import store from "./store";
import history from "../src/history";
import Landing from "./components/layout/landing/Landing";
import Kemper from "./components/layout/building/Kemper";
import Young from "./components/layout/building/Young";
import Wellmen from "./components/layout/building/Wellmen";
import InputForm from "./components/layout/input/InputForm";
import About from "./pages/About";
import Contributions from "./pages/Contributions";
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
              <Route exact path="/input" component={InputForm} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Kemper" component={Kemper} />
              <Route exact path="/Young" component={Young} />
              <Route exact path="/Wellmen" component={Wellmen} />
              <Route exact path="/contributions" component={Contributions} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
