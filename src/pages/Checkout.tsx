import { useParams } from 'react-router-dom'
    import { useGem } from '../api'
    import { CheckoutForm } from '../components/CheckoutForm'

    export const Checkout = () => {
      const { id } = useParams()
      const { data: gem, isLoading, error } = useGem(id!)

      if (isLoading) return <div>Loading...</div>
      if (error) return <div>Error loading gem details</div>

      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          <div className="max-w-2xl mx-auto">
            <CheckoutForm price={gem!.price} />
          </div>
        </div>
      )
    }
