import Icon from "../components/Icon";
import { NavCart } from "./nav-cart";
import { Search } from "./search";

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Eteration
      </a>

      <Search />

      <nav className="user-nav">
        <NavCart />
        <div className="user-nav__account">
          <div className="user-nav__account-icon">
            <Icon color="#fff" size={24} icon="user" />
          </div>
          <span className="user-nav__account-name">Kerem</span>
        </div>
      </nav>
    </header>
  );
};
