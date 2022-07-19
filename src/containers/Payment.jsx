import React from "react";
import { PayPalButton } from "react-paypal-button";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../styles/components/Payment.css";
import { handleSumTotal } from "../utilities/handleSum";
const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = React.useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId:
      "ATPL9DcWC6FjZQCL2IdeaILnUxCDKLnjIC9F0rLel4OhEdnpbZavf_mPyFNaq2zBUZw3w6ETf7TSwayH",
    intent: "capture",
    currency: "MXN",
  };
  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log("start Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
          <button onClick={() => navigate("/checkout/success")}>button</button>
        </div>
      </div>
    </div>
  );
};

export { Payment };
