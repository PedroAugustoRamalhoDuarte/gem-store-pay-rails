import { Link } from "@inertiajs/react";

const GemDetail = ({ gem }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/precious_gems"
        className="mb-4 inline-block text-blue-600 hover:text-blue-800"
      >
        &larr; Back to Collection
      </Link>
      <div className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white shadow-md">
        <img
          src={gem?.image}
          alt={gem?.name}
          className="h-96 w-full object-cover"
        />
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{gem?.name}</h1>
          <p className="mb-4 text-gray-700">{gem?.description}</p>
          <p className="mb-6 text-2xl font-semibold text-gray-800">
            ${gem?.price.toLocaleString()}
          </p>
          <Link
            href={`/precious_gems/${gem?.id}/checkout/`}
            method="post"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Buy Now with PIX
          </Link>
          <Link
            href={`/precious_gems/${gem?.id}/stripe_checkout/`}
            method="post"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Stripe Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GemDetail;
