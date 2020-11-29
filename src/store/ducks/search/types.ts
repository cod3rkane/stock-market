import { SocialMedia } from '../socialMedia/types'

export type StockData = {
  readonly date: string
  readonly socialMediaCount: number
  readonly buyRating: number
  readonly sellRating: number
  readonly holdRating: number
  readonly price: {
    currency: string
    amount: number
    decimals: number
  }
}

export type Stock = {
  readonly id: string
  readonly title: string
  readonly description?: string
  readonly data: StockData[]
}

export type SearchList = {
  readonly stockList: Stock[]
  readonly socialMediaList: SocialMedia[]
}
