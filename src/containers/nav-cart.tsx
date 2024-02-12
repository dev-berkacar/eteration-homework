import Icon from "../components/Icon";

export const NavCart = () => {
  return (
    <div className="user-nav__cart">
      <div className="user-nav__cart-icon">
        <Icon color="#fff" size={24} icon="briefcase" />
      </div>
      <span className="user-nav__cart-amount">0.00₺</span>
    </div>
  );
};
