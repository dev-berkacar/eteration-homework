import { Header } from "../containers/header";
import { Overview } from "../containers/overview";
import { ProductDetail } from "../containers/product-detail";

export const ProductDetailScreen = () => {
  return (
    <>
      <Header />
      <div className="product-detail-screen">
        <ProductDetail />
        <Overview />
      </div>
    </>
  );
};
