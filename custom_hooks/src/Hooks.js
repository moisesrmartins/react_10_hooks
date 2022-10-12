import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  console.log("state", state, "action", action);
};

function Hooks() {
  const [data, dispatch] = useReducer(reducer);

  useEffect(() => {
    dispatch({ type: "REQUEST" });
  }, []);

  return (
    <div className="Hooks">
      <h1>Custom-Hooks</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default Hooks;
