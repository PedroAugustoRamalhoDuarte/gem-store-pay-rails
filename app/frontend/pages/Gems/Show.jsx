import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGem } from "../../api";

export const GemDetail = () => {
  const { id } = useParams();
  const { data: gem, isLoading, error } = useGem(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading gem details</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
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
            to={`/checkout/${gem?.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Buy Now with PIX
          </Link>
        </div>
      </div>
    </div>
  );
};
