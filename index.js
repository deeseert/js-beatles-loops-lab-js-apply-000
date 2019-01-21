function theBeatlesPlay(mu, ins){
    let emptyArr = [];
    for (var i = 0; i < mu.length; i++) {
      emptyArr.push(mu[i] + " plays " ins[i]);
    }
    return emptyArr;
}
