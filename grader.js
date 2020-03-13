function average(arr){
  var xLength =arr.length;
  var sum = function (arr){
    return arr.reduce(function(a, b){
      return a + b
    }, 0);
  }
  console.log("The sum of the array is -> " + sum(arr));
  console.log("This length of the array is -> " + xLength);
  return Math.round(sum(arr) / xLength);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log("The rounded average of the array is -> " + average(scores));
console.log("The rounded average of the array is -> " + average(scores2));