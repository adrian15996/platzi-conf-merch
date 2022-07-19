import React from "react";
import { AppContext } from "../context/AppContext";

const CartItems = ({ item, handleRemove }) => {
  const { addToCart, deleteFromCart } = React.useContext(AppContext);
  const [buttonIsHovered, setButtonIsHovered] = React.useState(false);
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{item.title}</h4>
        <div>
          <button className="interactions">
            <i
              className="fa-solid fa-minus"
              onClick={() => handleRemove(item)}
            ></i>
          </button>
          <span>{item.quantity}</span>
          <button className="interactions" onClick={handleAddToCart(item)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <span>${item.price}</span>
      </div>
      <button type="button" onClick={() => deleteFromCart(item)}>
        <i
          className={"fas fa-trash-alt " + (buttonIsHovered && "fa-shake")}
          onMouseEnter={() => setButtonIsHovered(true)}
          onMouseLeave={() => setButtonIsHovered(false)}
        />
      </button>
    </div>
  );
};

export { CartItems };
