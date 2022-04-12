
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
  unitPriceVariationPourcentage: Number,
  amount: Number,
  amountPrice: Number,
  weekHistory: PriceHistory[]
}

export interface WalletRecap {
  id: string,
  buyTotal: number,
  sellTotal: number,
  feeTotal: number,
  walletBalance: number,
  walletBalanceWithoutFees: number
}
