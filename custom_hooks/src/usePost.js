import { useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  console.log("state", state, "action", action);
  if (action.type === "REQUEST") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "SUCCESS") {
    return { ...state, loading: false, data: action.data };
  }
  return state;
};
