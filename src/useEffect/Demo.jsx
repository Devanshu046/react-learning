import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Demo = () => {
  const [seconds, setSeconds] = useState(0);
  console.log("Component rendered");

  useEffect(() => {
    const interval = setInterval(()=> {
       setSeconds(prev => prev + 1)
    },1000)

    return () => {
        clearInterval(interval)
    }
  },);
  
  return <>
   <p>{seconds}</p>
  </>;
};

export default Demo;
