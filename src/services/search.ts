import { http } from '@/services'
import { SearchList } from '@/store/ducks/search/types'

export const search = async (query: string): Promise<SearchList> => {
  const stocks = await http.get('/api/stocks', { params: { search: query } })
  const medias = await http.get('/api/social-medias', {
    params: { search: query },
  })

  return {
    stockList: stocks.data.items,
    socialMediaList: medias.data.items,
  }
}
