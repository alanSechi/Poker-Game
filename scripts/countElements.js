//this function checks if there are 4 duplicated values inside the array of the points
function countElements(arra1) {
  var uniqueCount = arra1;
  var counts = {};
  var result = []
  uniqueCount.forEach(function(element) {
    counts[element] = (counts[element] || 0) + 1;
  });
  
  for (var element in counts) {
    result.push(counts[element]);
    
  } 

  return result.sort()
}
  
export {countElements}