import React, { useState } from "react";
import "./App.css";

function Box(props) {
  const [on, setOn] = useState(props.values);
  let styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };
  function flipflop() {
    setOn((prev) => !prev);
    props.clickhandler(props.id);
  }
  return <div className="boxmodel" style={styles} onClick={flipflop}></div>;
}

export default Box;
