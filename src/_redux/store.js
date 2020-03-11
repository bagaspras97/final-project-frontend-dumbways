import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "./midleware";

import loginR from "../_reducers/loginR";
import registerR from "../_reducers/registerR";
import dataUser from "../_reducers/loginR";
import addTicketR from "../_reducers/addTicketR";
import findUser from "../_reducers/getUserR";

const reducers = combineReducers({
  loginR,
  registerR,
  dataUser,
  addTicketR,
  findUser
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
