import React, { useState, useEffect } from "react";

const Test = () => {
  // const [data, setData] = useState("none");

  const getData = async () => {
    const res = await fetch("/resources");
    console.log(res);
    const data = await res.text();
    console.log(data);
    return data;
  };

  useEffect(() => {
    const data = getData();
    // setData(data);
  }, []);
  return (
    // <div>
    //   <h2>{data}</h2>
    // </div>
    <div>
      <h2>Yaldi ya</h2>
    </div>
  );
};

export default Test;
