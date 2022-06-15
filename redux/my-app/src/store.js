import { createStore } from "redux";

const addNumber = () => {
  return { type: "ADD" };
};

const substractNumber = () => {
  return { type: "SUBSTRACT" };
};

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;