//this function checks if there are 2 duplicated values inside the array of the points
function checkPair(arra1) {
  var coppia = {};
  var coppiaArray = [];

  arra1.forEach(function (item) {
    if (!coppia[item]) coppia[item] = 0;
    coppia[item] += 1;
  });

  for (var prop in coppia) {
    if (coppia[prop] >= 2) {
      coppiaArray.push(prop);
    }
  }

    return coppiaArray;
  
}

export {checkPair}