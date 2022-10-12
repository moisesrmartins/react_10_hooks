import React, { useEffect, useReducer } from "react";
import axios from "axios";

const url = "https://hookproject-a7d09-default-rtdb.firebaseio.com/hooks.json";

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

function Hooks() {
  const [data, dispatch] = useReducer(reducer, { loading: true, data: {} });

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    axios.get(url).then((res) => {
      dispatch({ type: "SUCCESS", data: res.data });
    });
  }, []);

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Hooks">
      <h1>Custom-Hooks</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default Hooks;
