import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  /* In lines below, if redux devtools exixts in browser , then use it, otherwise give it some fake function */
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ != "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);
export default store;
