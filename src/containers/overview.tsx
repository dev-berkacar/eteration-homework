import { OverviewCart } from "./overview-cart";
import { OverviewCheckout } from "./overview-checkout";

export const Overview = () => {
  return (
    <div className="overview">
      <OverviewCart />
      <OverviewCheckout />
    </div>
  );
};
