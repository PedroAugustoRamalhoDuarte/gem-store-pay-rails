import { useGems } from '../api'
    import { GemCard } from '../components/GemCard'
    import { Link } from 'react-router-dom'

    export const GemList = () => {
      const { data: gems, isLoading, error } = useGems()

      if (isLoading) return <div>Loading...</div>
      if (error) return <div>Error loading gems</div>

      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Our Gems Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gems?.map((gem) => (
              <GemCard key={gem.id} gem={gem} />
            ))}
          </div>
        </div>
      )
    }
