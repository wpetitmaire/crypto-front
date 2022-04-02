
/**
 * Created by willy on 24/03/2022
 */

interface PriceHistory {
  date: String,
  price: Number
}

export interface CoinbaseRecap {
  iconUrl: String,
  accountId: String,
  accountName: String,
  unitPrice: Number,
  unitPriceDeltaVariation: Number,
  amount: Number,
  amountPrice: Number,
  amountPriceDeltaVariation: Number,
  weekHistory: PriceHistory[]
}
