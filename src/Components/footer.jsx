import React from "react";
import "../css/index.css";

const Footer = () => {
  const currentTime = new Date().getHours(); 

  const isWithinOpeningHours = currentTime >= 10 && currentTime <= 22;

  return (
    <>
      <div className="order">
      
        {isWithinOpeningHours ? (
          <>
            <h2 className="footer">
              We're open from 10:00 to 22:00. Come visit us or order online
            </h2>
            <button className="btn">Order</button>
          </>
        ) : (
          <h2 className="footer">
            We are happy to welcome you between 10:00 and 22:00
          </h2>
        )}
      </div>
    </>
  );
};

export default Footer;
