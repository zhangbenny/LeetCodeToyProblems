// var sortColors = function(nums) {
//   if (nums.length < 1) {
//     return [];
//   }
//   var pivot = Math.floor(Math.random() * nums.length);
//   var equal = [];
//   var less = [];
//   var greater = [];
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[pivot]) {
//       equal.push(nums[i]);
//     }
//     if (nums[i] < nums[pivot]) {
//       less.push(nums[i]);
//     }
//     if (nums[i] > nums[pivot]) {
//       greater.push(nums[i])
//     }
//   }
//   nums = [].concat(sortColors(less), equal, sortColors(greater));
// };



var sortColors = function(nums) {
  var changesThisRound = false;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1]) {
      var temp = nums[i];
      nums[i] = nums[i+1];
      nums[i+1] = temp;
      changesThisRound = true;
    }
  }
  if (changesThisRound) {
    sortColors(nums);
  }
}

