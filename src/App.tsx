import * as React from "react";
import web3 from "./global/web3client";

const appStyles = require("./App.css");
const logo = require("./logo.svg");

const App: React.StatelessComponent<{}> = () => {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.appHeader}>
        <img src={logo} className={appStyles.appLogo} alt="logo" />
        <h2>React DApp Template</h2>
      </div>
      <div className={appStyles.appIntro}>
        <p>
          Provider is MetaMask: {(web3.currentProvider as any).isMetaMask ? "yes" : "no"}
        </p>
        <p>
          Provider is Mist: {(window as any).mist ? "yes" : "no"}
        </p>
        {(web3.currentProvider as any).host ? <p>Provider is {(web3.currentProvider as any).host}</p> : null }
      </div>
      <hr />
    </div>
  );
};

export default App;
