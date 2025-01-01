import { Link } from 'react-router-dom'
    import { Gem } from '../api'

    interface GemCardProps {
      gem: Gem
    }

    export const GemCard = ({ gem }: GemCardProps) => {
      return (
        <Link to={`/gems/${gem.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <img src={gem.image} alt={gem.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{gem.name}</h3>
            <p className="text-gray-600">${gem.price.toLocaleString()}</p>
          </div>
        </Link>
      )
    }
