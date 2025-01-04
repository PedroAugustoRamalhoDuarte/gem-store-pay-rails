import { Link } from "@inertiajs/react";
export const GemCard = ({ gem }) => {
  return (
    <Link
      href={`/precious_gems/${gem.id}`}
      className="block rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <img
        src={gem.image}
        alt={gem.name}
        className="h-48 w-full rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{gem.name}</h3>
        <p className="text-gray-600">${gem.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};
