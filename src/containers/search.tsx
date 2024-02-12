import Icon from "../components/Icon";

export const Search = () => {
  return (
    <form action="#" className="search">
      <button className="search__button">
        <div className="search__icon">
          <Icon color="#999" size={24} icon="magnifying-glass" />
        </div>
      </button>
      <input type="text" className="search__input" placeholder="Search" />
    </form>
  );
};
