import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);
// TODO: key in loadStripe missing

const Payment = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(totalPrice.toFixed(2));
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="max-w-xl container mx-auto xl:p-0 text-center">
        <Helmet>
          <title>Bistro Boss | Payment</title>
        </Helmet>
        <h3 className="text-2xl md:text-4xl font-semibold">
          Amount to Pay: ${price}
        </h3>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
