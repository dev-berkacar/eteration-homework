import Icon from "./Icon";

export const FilterSearch = () => {
  return (
    <div className="filter__search">
      <button className="filter__search__button">
        <div className="filter__search__icon">
          <Icon color="#999" size={16} icon="magnifying-glass" />
        </div>
      </button>
      <input
        type="text"
        className="filter__search__input"
        placeholder="Search"
      />
    </div>
  );
};
