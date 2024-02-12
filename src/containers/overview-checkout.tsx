export const OverviewCheckout = () => {
  return (
    <div className="overview__checkout">
      <span className="overview__checkout-label">Checkout</span>
      <div className="overview__checkout-box">
        <span className="overview__checkout-total">
          Total Price:
          <span className="overview__checkout-price"> 17.000 ₺</span>
        </span>
        <button className="overview__checkout-button">Checkout</button>
      </div>
    </div>
  );
};
