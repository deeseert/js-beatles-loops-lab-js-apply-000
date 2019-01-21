function theBeatlesPlay(mu, instruments){
    let emptyArr = [];
    for (var i = 0; i < mu.length; i++) {
      emptyArr.push(mu[i] + " plays " instruments[i]);
    }
    return emptyArr;
}
