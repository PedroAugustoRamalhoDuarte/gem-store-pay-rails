import { useQuery } from '@tanstack/react-query'

    interface Gem {
      id: string
      name: string
      description: string
      price: number
      image: string
    }

    const fetchGems = async (): Promise<Gem[]> => {
      // Placeholder data
      return [
        {
          id: '1',
          name: 'Emerald',
          description: 'A beautiful green gemstone',
          price: 1200,
          image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679'
        },
        {
          id: '2',
          name: 'Sapphire',
          description: 'A stunning blue gemstone',
          price: 1500,
          image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679'
        }
      ]
    }

    const fetchGem = async (id: string): Promise<Gem> => {
      const gems = await fetchGems()
      const gem = gems.find(g => g.id === id)
      if (!gem) throw new Error('Gem not found')
      return gem
    }

    export const useGems = () => {
      return useQuery({ queryKey: ['gems'], queryFn: fetchGems })
    }

    export const useGem = (id: string) => {
      return useQuery({ queryKey: ['gem', id], queryFn: () => fetchGem(id) })
    }
