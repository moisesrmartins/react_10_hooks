import React, { useEffect, useReducer } from "react";
import axios from "axios";

const url = "https://hookproject-a7d09-default-rtdb.firebaseio.com/hooks.json";

const reducer = (state, action) => {
  console.log("state", state, "action", action);
};

function Hooks() {
  const [data, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    axios.get(url).then((res) => {
      dispatch({ type: "SUCCESS", data: res.data });
    });
  }, []);

  return (
    <div className="Hooks">
      <h1>Custom-Hooks</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default Hooks;
