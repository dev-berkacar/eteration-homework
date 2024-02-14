import { useAppSelector } from "../app/hooks";
import Icon from "../components/Icon";

export const NavCart = () => {
  const cartTotalPrice = useAppSelector((state) => state.global.cartTotalPrice);

  return (
    <div className="user-nav__cart">
      <div className="user-nav__cart-icon">
        <Icon color="#fff" size={24} icon="briefcase" />
      </div>
      <span className="user-nav__cart-amount">{cartTotalPrice} ₺</span>
    </div>
  );
};
