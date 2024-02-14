import { useDispatch } from "react-redux";
import { ProductType, commitCartItems } from "./slice";
import { useAppSelector } from "../app/hooks";

export const OverviewCart = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.global.cartItems);

  const handleAddItem = (item: ProductType) => {
    dispatch(commitCartItems({ type: "add", payload: item }));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(commitCartItems({ type: "delete", payload: itemId }));
  };

  return (
    <div className="overview__cart">
      <span className="overview__cart-label">Cart</span>
      <div className="overview__cart-box">
        {cartItems.map((item: ProductType) => (
          <div key={item.id} className="overview__cart__product">
            <div className="overview__cart__product__flex">
              <span className="overview__cart__product-name">{item.name}</span>
              <span className="overview__cart__product-price">
                {parseFloat(item.price) * item.quantity} ₺
              </span>
            </div>
            <div className="overview__cart__quantity">
              <button
                className="overview__cart__quantity-decrement"
                onClick={() => handleRemoveItem(item.id)}
              >
                -
              </button>
              <div className="overview__cart__quantity-number">
                {item.quantity}
              </div>
              <button
                className="overview__cart__quantity-increment"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
