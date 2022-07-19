const handleSumTotal = (cart) => {
  const reducer = (acumalator, currentValue) =>
    acumalator + currentValue.price * currentValue.quantity;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export { handleSumTotal };
