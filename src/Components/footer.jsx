import React from "react";
import '../css/index.css'

const footer = () => {
  return (
    <>
      <div className="order">
        <h2 className="footer">
          Our hours are from 12:00 to 22:00. Come visit us or order online
        </h2>
        {/* <div className="order"> */}
          <button className="btn">Order</button>
        {/* </div> */}
      </div>
    </>
  );
};

export default footer;
