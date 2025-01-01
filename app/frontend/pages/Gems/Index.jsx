import { useGems } from "../../api";
import { GemCard } from "../../components/GemCard.jsx";

export const GemList = () => {
  const { data: gems, isLoading, error } = useGems();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading gems</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Our Gems Collection</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gems?.map((gem) => (
          <GemCard key={gem.id} gem={gem} />
        ))}
      </div>
    </div>
  );
};