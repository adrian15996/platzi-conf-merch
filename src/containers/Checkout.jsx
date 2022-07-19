import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/components/Checkout.css";
import { CartItems } from "./CartItems";
import { handleSumTotal } from "../utilities/handleSum";
const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin Pedidos</h3>}

        {cart.map((item) => (
          <CartItems item={item} key={item.id} handleRemove={handleRemove} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Checkout };
