//this funtion checks if all the suits are the same
function sameSuit(arra1) {
  for (var i = 0; i < arra1.length - 1; i++) {
    if (arra1[i] !== arra1[i + 1]) {
      return false;
    }
  }
  return true;
}

export {sameSuit}