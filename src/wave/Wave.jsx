import React from "react";
import "./Wave.css"
import bottomSvg from "../assets/bottom.svg"
const Wave = () => {
  return (
    <div className="svg">
      <img src={bottomSvg} style={{
        filter: "invert(1)"
      }}/>
    </div>
  )
}
export default Wave;