import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import MyTicket from "./MyTicket";
import ModalLogin from "./ModalLogin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={ModalLogin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/myticket" component={MyTicket} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
