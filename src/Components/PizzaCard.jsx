// import React from "react";
// import { pizzaData } from "../data";
// import '../css/index.css'

// const PizzaCard = () => {
//   //  let PizzaCard = pizzaData[0];

//   return (
//     <>
//       {pizzaData.map((pizza, index) => (
//         <div key={index}>
//           <img src={pizza.photoName} alt={pizza.name} />
//           <h3>{pizza.name}</h3>
//           {pizza.ingredients}
//           {pizza.price}
//           {pizza.soldOut}
//         </div>
//       ))}
//     </>
//   );
// };

// export default PizzaCard;

import React from "react";
import { pizzaData } from "../data";
import "../css/index.css";

const PizzaCard = () => {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza, index) => (
        <li key={index} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
          <img src={pizza.photoName} alt={pizza.name} className="pizza" />
          <div>
            <h3 className="pizza">{pizza.name}</h3>
            <p className="pizza">{pizza.ingredients}</p>
            {!pizza.soldOut && <p className="pizza">{pizza.price}</p>}
            {pizza.soldOut && <p className="sold-out">Sold Out</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PizzaCard;
