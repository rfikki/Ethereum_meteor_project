Template.blockStatusComponent.helpers({

  //最新のブロック番号の取得
  latestBlockNum: function(){
    return EthBlocks.latest.number;
  },

  //最新ブロックのハッシュ値を取得
  latestBlockHash: function(){
    return EthBlocks.latest.hash;
  },

  // address who mined recently block
  latestBlockMiner: function(){
    return EthBlocks.latest.miner;
  },

  // recent mined date
  latestBlockDatetime: function(){
    return unix2datetime(EthBlocks.latest.timestamp);
  },

  // block Size
  blockSize: function(){
    return EthBlocks.latest.size;
  },
  
  // Transactions
  transactions: function(){
    var getTrn = EthBlocks.latest.transactions;
    if (getTrn.length == 0){
      return "Empty."
    }else{
      return getTrn;
    }
  },
  checks: function(){
    if (EthBlocks.latest.transactions.length == 0){
      return false;
    }else{
      return true;
    }
  }
});
