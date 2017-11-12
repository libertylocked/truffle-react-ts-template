pragma solidity ^0.4.18;

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

// Slightly modified for 0.4.18 Solidity style. Removed the library for simplicity.

contract MetaCoin {
	mapping (address => uint) balances;

	function MetaCoin() public {
		balances[msg.sender] = 10000;
	}

	function sendCoin(address receiver, uint amount)
	    public
	    returns (bool)
    {
		if (balances[msg.sender] < amount) {
            return false;
        }
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		return true;
	}

	function getBalance(address addr)
	    public
	    view
	    returns (uint)
    {
  	    return balances[addr];
	}
}
