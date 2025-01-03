import { usePage } from '@inertiajs/react'
import { CheckoutForm } from "../../components/CheckoutForm";

export const Checkout = () => {
  const { gem } = usePage().props;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout: {gem.name}</h1>
      <div className="mx-auto max-w-2xl">
        <CheckoutForm price={gem.price} />
      </div>
    </div>
  );
};
