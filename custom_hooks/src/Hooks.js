import React from "react";
import useGet from "./useGet";
import usePost from "./usePost";
import useRemove from "./useRemove";

const url = "https://hookproject-a7d09-default-rtdb.firebaseio.com/delete.json";

function Hooks() {
  const data = useGet(url);
  const data2 = useGet("https://httpbin.org/ip");
  const [postData, post] = usePost(url);

  const saveNew = () => {
    post({ chave: "value", key: "value1", valor: 10 });
  };

  if (data.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Hooks">
      <h1>Custom-Hooks</h1>
      {JSON.stringify(data)}
      <pre>{JSON.stringify(data2)}</pre>
      <button onClick={saveNew}>Save</button>
      <pre>{JSON.stringify(postData)}</pre>
    </div>
  );
}

export default Hooks;
