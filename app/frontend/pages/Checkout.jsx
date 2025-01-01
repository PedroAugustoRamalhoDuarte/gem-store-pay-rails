import { useParams } from "react-router-dom";

import { useGem } from "../api";
import { CheckoutForm } from "../components/CheckoutForm";

export const Checkout = () => {
  const { id } = useParams();
  const { data: gem, isLoading, error } = useGem(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading gem details</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
      <div className="mx-auto max-w-2xl">
        <CheckoutForm price={gem?.price} />
      </div>
    </div>
  );
};
