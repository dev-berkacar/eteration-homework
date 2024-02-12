import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductType } from "./slice";

export const ProductDetail = () => {
  const { state } = useLocation();

  const [product, setProduct] = useState<ProductType>();

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
        <button className="product__detail-information-add">Add to Cart</button>
        <span className="product__detail-information-description">
          {product?.description}
        </span>
      </div>
    </div>
  );
};
