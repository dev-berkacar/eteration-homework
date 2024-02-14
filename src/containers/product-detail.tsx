import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductType, commitCartItems } from "./slice";
import { useDispatch } from "react-redux";

export const ProductDetail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<ProductType>();

  const handleAddItem = () => {
    if (product) {
      dispatch(
        commitCartItems({
          type: "add",
          payload: { name: product.name, price: product.price, id: product.id },
        })
      );
    }
  };

  useEffect(() => {
    if (state) setProduct(state);
  }, [state]);

  return (
    <div className="product__detail">
      <img
        className="product__detail-image"
        id={product?.id}
        src={product?.image}
        alt={product?.name}
      />
      <div className="product__detail-information">
        <span className="product__detail-information-name">
          {product?.name}
        </span>
        <span className="product__detail-information-price">
          {product?.price} ₺
        </span>
        <button
          onClick={handleAddItem}
          className="product__detail-information-add"
        >
          Add to Cart
        </button>
        <span className="product__detail-information-description">
          {product?.description}
        </span>
      </div>
    </div>
  );
};
