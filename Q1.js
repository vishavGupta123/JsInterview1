// Q1. Implement customMap() function for JS arrays.
// The functionality should be exactly the same as that of JS native .map() function.
// Function customMap() should return a new array and not change the array on which we are mapping

//Creating a new method inside the Array Class in javascript
Array.prototype.customMap = function (callback) {
  //creating a new array
  const resultArray = [];
  //traverse over all the array elements
  for (let index = 0; index < this.length; index++) {
    //calling the callback function on all the array elements
    resultArray.push(callback(this[index], index, this));
  }
  //returning the modified array elements
  return resultArray;
};

const sample = [1, 2, 3];

//output will contain the modified array elements
var output = sample.customMap(function (val, index, array) {
  return val * 2;
});

console.log(output);
