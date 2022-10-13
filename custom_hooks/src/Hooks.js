import React from "react";
import useGet from "./useGet";
import usePost from "./usePost";

const url = "https://hookproject-a7d09-default-rtdb.firebaseio.com/hooks.json";

function Hooks() {
  const data = useGet(url);
  const data2 = useGet("https://httpbin.org/ip");

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Hooks">
      <h1>Custom-Hooks</h1>
      {JSON.stringify(data)}
      <pre>{JSON.stringify(data2)}</pre>
    </div>
  );
}

export default Hooks;
