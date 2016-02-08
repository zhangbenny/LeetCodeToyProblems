var sortColors = function(nums) {
  function recurse (array) {
    if (array.length < 1) {
      return [];
    }
    var pivot = Math.floor(Math.random() * array.length);
    var equal = [];
    var less = [];
    var greater = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[pivot]) {
        equal.push(array[i]);
      }
      if (array[i] < array[pivot]) {
        less.push(array[i]);
      }
      if (array[i] > array[pivot]) {
        greater.push(array[i])
      }
    }
    return [].concat(recurse(less), equal, recurse(greater));
  }
  return recurse(nums);
};

console.log(sortColors([0,1,2,1,2,1,2,1,1,1,1,2,2,2,1,1,1,1,0]))
