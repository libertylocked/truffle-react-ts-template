import { BigNumber } from "bignumber.js";
import * as React from "react";
import * as TruffleContract from "truffle-contract";
import * as Web3 from "web3";

const MetaCoinContract = TruffleContract(require("../../build/contracts/MetaCoin.json"));

interface IMetaCoinProps {
  web3: Web3;
}

interface IMetaCoinState {
  account: string;
  accountError: boolean;
  balance: string;
}

export default class MetaCoin extends React.Component<IMetaCoinProps, IMetaCoinState> {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      accountError: false,
      balance: "",
    };
  }

  public async componentWillMount() {
    if (this.props.web3.eth.accounts.length === 0) {
      this.setState({
        account: "",
        accountError: true,
      });
      return;
    }
    MetaCoinContract.setProvider(this.props.web3.currentProvider);
    const instance = await MetaCoinContract.deployed();
    const balance: BigNumber  = await instance.getBalance(this.props.web3.eth.accounts[0]);
    this.setState({
      account: this.props.web3.eth.accounts[0],
      accountError: false,
      balance: balance.toString(),
    });
  }

  public render() {
    return (
    <div>
      <h3>MetaCoin</h3>
      <p>Account: {this.state.accountError ? "No accounts found" : this.state.account}</p>
      <p>Balance: {this.state.balance}</p>
    </div>
    );
  }
}
