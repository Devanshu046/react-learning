import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DependencyArray = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

//   console.log("Component rendered");

  useEffect(() => {
    console.log("Effect ran");

    return (()=> {
        console.log("Clean up",count)
    })
  },[count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default DependencyArray;
