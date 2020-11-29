/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stock } from '@/store/ducks/search/types'
import { SocialMedia } from '@/store/ducks/socialMedia/types'

export function stockPriceGenerator(stock: Stock, dates: []): number {
  return Math.random()
}

export function socialMediaCountGenerator(
  stock: Stock,
  media: SocialMedia
): number {
  return Math.random()
}

export function recommendationAlgorithm(
  stock: Stock,
  media: SocialMedia
): number {
  return Math.random()
}
