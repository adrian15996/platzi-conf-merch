import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/components/Header.css";

const Header = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;
  const [buttonIsHovered, setButtonIsHovered] = React.useState(false);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img src="https://static.platzi.com/media/user_upload/2-c9a8cf3d-d804-4613-a2ef-d28c1afd778d.jpg" />
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i
            onMouseEnter={() => setButtonIsHovered(true)}
            onMouseLeave={() => setButtonIsHovered(false)}
            className={
              "fas fa-shopping-basket fa-2x " + (buttonIsHovered && "fa-beat")
            }
          ></i>
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </Link>
      </div>
    </div>
  );
};

export { Header };
