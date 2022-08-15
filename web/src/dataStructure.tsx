// import data from './mock/navData'


export interface Item {
    id: string | null;
    rank: string | null; 
    symbol: string | null; 
    name: string | null; 
    supply: string | null; 
    maxSupply: string | null; 
    marketCapUsd: string | null; 
    volumeUsd24Hr: string | null; 
    priceUsd: string | null; 
    changePercent24Hr: string | null; 
    vwap24Hr: string | null; 
    explorer: string | null;
  }

export type ItemListType = Item[]



//   export const toItemData:AppState = data.data