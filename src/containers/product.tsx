import { Link } from "react-router-dom";
import { ProductType } from "./slice";

export const Product = (state: ProductType) => {
  const { id, name, price, image, description } = state;
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
      <button className="product-add">Add to Cart</button>
    </div>
  );
};
