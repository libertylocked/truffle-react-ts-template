import * as BigNumber from "bignumber.js";

export default interface IMetaCoin {
  address: string;
  sendCoin(addr: string, amount: BigNumber.BigNumber, opts?: any): Promise<string>;
  getBalance(addr: string, opts?: any): Promise<BigNumber.BigNumber>;
}
