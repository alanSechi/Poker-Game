//this function checks if there are 3 duplicated values inside the array of the points
function checkTris(arra1) {
  var tris = {};
  var trisArray = [];

  arra1.forEach(function (item) {
    if (!tris[item]) tris[item] = 0;
    tris[item] += 1;
  });

  for (var prop in tris) {
    if (tris[prop] >= 3) {
      trisArray.push(prop);
    }
  }

  return trisArray;
}

export {checkTris}