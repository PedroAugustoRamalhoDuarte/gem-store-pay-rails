import { useState } from 'react'

    const maskCPF = (value: string) => {
      return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }

    export const CheckoutForm = ({ price }: { price: number }) => {
      const [name, setName] = useState('')
      const [cpf, setCpf] = useState('')
      const [email, setEmail] = useState('')

      const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(maskCPF(e.target.value))
      }

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle PIX payment
      }

      return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">CPF</label>
            <input
              type="text"
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="000.000.000-00"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700">Total: ${price.toLocaleString()}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Pay with PIX
          </button>
        </form>
      )
    }
