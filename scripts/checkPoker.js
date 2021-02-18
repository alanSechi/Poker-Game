//this function checks if there are 4 duplicated values inside the array of the points
function checkPoker(arra1) {
  var poker = {};
  var pokerArray = [];

  arra1.forEach(function (item) {
    if (!poker[item]) poker[item] = 0;
    poker[item] += 1;
  });

  for (var prop in poker) {
    if (poker[prop] >= 4) {
      pokerArray.push(prop);
    }
  }

  return pokerArray;
}

export {checkPoker}