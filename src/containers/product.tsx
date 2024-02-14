import { Link } from "react-router-dom";
import { ProductType, commitCartItems } from "./slice";
import { useDispatch } from "react-redux";

export const Product = (state: Partial<ProductType>) => {
  const { id, name, price, image, description } = state;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(commitCartItems({ type: "add", payload: { name, price, id } }));
  };

  return (
    <div className="product">
      <Link
        className="product__information"
        to="/product-detail"
        state={{ product: id, name, price, image, description }}
      >
        <img
          className="product__information-image"
          id={id}
          src={image}
          alt={name}
        />
        <span className="product__information-price">{price} ₺</span>
        <span className="product__information-name">{name}</span>
      </Link>
      <button onClick={handleAddItem} className="product-add">
        Add to Cart
      </button>
    </div>
  );
};
