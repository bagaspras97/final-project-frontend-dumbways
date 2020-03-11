import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import MyTicket from "./MyTicket";
import ModalLogin from "./ModalLogin";
import ModalDaftar from "./ModalDaftar";
import Payment from "./Payment";
import IndexAdmin from "./IndexAdmin";
import AddTicket from "./AddTicket";
import ModaLKonfirmasi from "./ModalKonfirmasi";
import ConfirmMyTicket from "./ConfirmMyTicket";
import ModalAddTicket from "./ModalAddTicket";
import ModalLoginAdmin from "./ModalLoginAdmin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={ModalLogin} />
          <Route path="/daftar" component={ModalDaftar} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/myticket" component={MyTicket} />
          <Route path="/payment" component={Payment} />
          <Route path="/loginadmin" component={ModalLoginAdmin} />
          <Route path="/admin" component={IndexAdmin} />
          <Route path="/addticket" component={AddTicket} />
          <Route path="/konfirmasi" component={ModaLKonfirmasi} />
          <Route path="/konfirmasitiket" component={ConfirmMyTicket} />
          <Route path="/modaladdticket" component={ModalAddTicket} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
