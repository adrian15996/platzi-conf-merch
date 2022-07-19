import React from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payload) => {
    const aux = state.cart.indexOf(payload);
    if (aux !== -1) {
      state.cart[aux].quantity++;
      setState({
        ...state,
      });
    } else {
      setState({
        ...state,
        cart: [...state.cart, payload],
      });
    }
  };
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const removeFromCart = (payload) => {
    if (payload.quantity === 1) {
      setState({
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
      });
    } else {
      const aux = state.cart.indexOf(payload);
      state.cart[aux].quantity--;
      setState({
        ...state,
      });
    }
  };
  const deleteFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
    addNewOrder,
    deleteFromCart,
  };
};

export { useInitialState };
