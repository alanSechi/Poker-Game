//this function checks if the points are consecutive
function checkConsecutive(array) {
  var conseq = 1;
  for (var idx = 1; idx < array.length; idx++) {
    if (array[idx] == array[idx - 1] + 1) conseq++;
    else conseq = 1;
    if (conseq == 5) return true;
  }
  return false;
}

export {checkConsecutive}