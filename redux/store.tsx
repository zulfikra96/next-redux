import { Context, createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import rootReducer from "./reducers/root_reducer";

const store = createStore(rootReducer);

const makeStore = (contex:Context) => store

export const wrapper = createWrapper(makeStore,{debug:false})