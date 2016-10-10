web3 = new Web3();

if(!web3.currentProvider)
	web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

// EthAccounts初期化
EthAccounts.init();

// EthBlocksの初期化
EthBlocks.init();

//Session変数の初期化
initSessionVars();

//オブザーバの起動
observeNode();
