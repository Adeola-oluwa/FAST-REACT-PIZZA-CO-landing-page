// import React, { useState } from "react";
// import "../css/incase.css";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         <span>{isOpen ? "Close" : "Open"} Menu</span>
//       </button>
//       <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
//         <li>
//           <a href="/home">Home</a>
//         </li>
//         <li>
//           <a href="/courses">Courses</a>
//         </li>
//         <li>
//           <a href="/about-us">About Us</a>
//         </li>
//         <li>
//           <a href="/pricing">Pricing</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//         <li>
//           <a href="/sign-up">Sign Up</a>
//         </li>
//         <li>
//           <a href="/login">Login</a>
//         </li>
//       </ul>
//     </nav>

//

import React from "react";
import "../css/incase.css"; // Import your CSS file

const Incase = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Incase;
