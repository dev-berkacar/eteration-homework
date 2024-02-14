import { useAppSelector } from "../app/hooks";
import { OverviewCart } from "./overview-cart";
import { OverviewCheckout } from "./overview-checkout";

export const Overview = () => {
  const cartItems = useAppSelector((state) => state.global.cartItems);

  return (
    <div className="overview">
      {cartItems.length > 0 && (
        <>
          <OverviewCart />
          <OverviewCheckout />
        </>
      )}
    </div>
  );
};
