import { useParams } from 'react-router-dom'
    import { useGem } from '../api'
    import { Link } from 'react-router-dom'

    export const GemDetail = () => {
      const { id } = useParams()
      const { data: gem, isLoading, error } = useGem(id!)

      if (isLoading) return <div>Loading...</div>
      if (error) return <div>Error loading gem details</div>

      return (
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            &larr; Back to Collection
          </Link>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <img src={gem!.image} alt={gem!.name} className="w-full h-96 object-cover" />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{gem!.name}</h1>
              <p className="text-gray-700 mb-4">{gem!.description}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-6">${gem!.price.toLocaleString()}</p>
              <Link
                to={`/checkout/${gem!.id}`}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Buy Now with PIX
              </Link>
            </div>
          </div>
        </div>
      )
    }
