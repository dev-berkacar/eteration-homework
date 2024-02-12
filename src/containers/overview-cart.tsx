export const OverviewCart = () => {
  return (
    <div className="overview__cart">
      <span className="overview__cart-label">Cart</span>
      <div className="overview__cart-box">
        <div className="overview__cart__product">
          <span className="overview__cart__product-name">Samsung s22</span>
          <span className="overview__cart__product-price">12.000₺</span>
        </div>
        <div className="overview__cart__quantity">
          <button className="overview__cart__quantity-decrement">-</button>
          <div className="overview__cart__quantity-number">3</div>
          <button className="overview__cart__quantity-increment">+</button>
        </div>
      </div>
      <div className="overview__cart-box">
        <div className="overview__cart__product">
          <span className="overview__cart__product-name">Iphone 14 Pro</span>
          <span className="overview__cart__product-price">20.000₺</span>
        </div>
        <div className="overview__cart__quantity">
          <button className="overview__cart__quantity-decrement">-</button>
          <div className="overview__cart__quantity-number">1</div>
          <button className="overview__cart__quantity-increment">+</button>
        </div>
      </div>
      <div className="overview__cart-box">
        <div className="overview__cart__product">
          <span className="overview__cart__product-name">Iphone 12</span>
          <span className="overview__cart__product-price">8.000₺</span>
        </div>
        <div className="overview__cart__quantity">
          <button className="overview__cart__quantity-decrement">-</button>
          <div className="overview__cart__quantity-number">5</div>
          <button className="overview__cart__quantity-increment">+</button>
        </div>
      </div>
    </div>
  );
};
