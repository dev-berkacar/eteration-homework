import { Filter } from "../containers/filter";
import { Header } from "../containers/header";
import { Overview } from "../containers/overview";
import { Products } from "../containers/products";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Filter />
        <Products />
        <Overview />
      </div>
    </>
  );
};
