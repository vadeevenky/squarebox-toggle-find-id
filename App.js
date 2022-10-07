import React, { useState } from "react";
import Boxes from "./Boxes";
import "./App.css";
import Box from "./Box";
function App() {
  const [box, setBox] = useState(Boxes);

  // const styles = {
  //   width: "100px",
  //   height: "100px",
  //   backgroundColor: "blue",
  //   display: "inline-block",
  //   border: " 2px solid black",
  //   marginRight: "4px",
  //   marginTop: "10px",
  //   borderRadius: "4px",
  // };

  function clickhandler(id) {
    console.log(id);
  }

  console.log(box);
  let boxmodel = box.map((val) => (
    <div className="boxmodel" key={val.id}>
      <Box
        key={val.id}
        id={val.id}
        values={val.on}
        clickhandler={clickhandler}
      />
    </div>
  ));

  return <center>{boxmodel}</center>;
}

export default App;
