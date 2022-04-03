// algorithm
function twoSum(nums, target) {
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < numsLength; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
}

let nums = [1, 3, 5, 12, 22, 33];
let target = 27;
let result = twoSum(nums, target);
console.log(result);
