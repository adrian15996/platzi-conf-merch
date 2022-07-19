import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const [buttonIsHovered, setButtonIsHovered] = React.useState(false);
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button
        type="button"
        onClick={handleAddToCart(product)}
        onMouseEnter={() => setButtonIsHovered(true)}
        onMouseLeave={() => setButtonIsHovered(false)}
      >
        agregar a carrito
        <i
          className={"fa-solid fa-cart-plus " + (buttonIsHovered && "fa-beat")}
        ></i>
      </button>
    </div>
  );
};

export { Product };
