export type Stock = {
  readonly id: string
  readonly title: string
  readonly price: {
    currency: string
    amount: number
    decimals: number
  }
  readonly picture: string
  readonly description?: string
  readonly date: string
  readonly socialMediaCount: number
}

export type StockList = {
  readonly items: Stock[]
}
