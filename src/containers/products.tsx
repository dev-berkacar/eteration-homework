import { useAppSelector } from "../app/hooks";
import { Product } from "./product";

import { ProductType } from "./slice";

export const Products = () => {
  const products = useAppSelector((state) => state.global.products);

  return (
    <div className="products">
      {products.map((product: ProductType) => (
        <Product
          id={product.id}
          image={product.image}
          price={product.price}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
    // <div>
    //   <h2>Products</h2>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}>{product.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};
