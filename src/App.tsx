import * as React from "react";
import * as Web3 from "web3";
import getWeb3 from "./util/getWeb3";

const appStyles = require("./App.css");
const logo = require("./logo.svg");

import MetaWallet from "./components/MetaWallet";

interface IAppState {
  web3: Web3;
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };
  }

  public async componentWillMount() {
    const web3 = await getWeb3();
    this.setState({
      web3,
    });
  }

  public render() {
    return (
      <div className={appStyles.app}>
        <div className={appStyles.appHeader}>
          <img src={logo} className={appStyles.appLogo} alt="logo" />
          <h2>React Ethereum DApp Template</h2>
        </div>
        <div className={appStyles.appIntro}>
          {this.state.web3 ? (
            <div>
              <p>
                Provider is MetaMask: {(this.state.web3.currentProvider as any).isMetaMask ? "yes" : "no"}
              </p>
              <p>
                Provider is Mist: {(window as any).mist ? "yes" : "no"}
              </p>
              {(this.state.web3.currentProvider as any).host ?
                <p>Provider is {(this.state.web3.currentProvider as any).host}</p> : null}
            </div>
          ) :
            <p>Web3 is loading</p>}
        </div>
        <hr />
        {this.state.web3 ? <MetaWallet web3={this.state.web3} /> : null}
      </div>
    );
  }
}

export default App;
