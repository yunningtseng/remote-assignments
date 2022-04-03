// algorithm
function twoSum(nums, target) {
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = 0; j < numsLength; j++) {
      // console.log(i, j);
      if (target == nums[i] + nums[j]) {
        // console.log("result: ", [i, j]);
        return;
      }
    }
  }
}

function twoSum(nums, target) {
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    // matchNums 當成 key ; i 當成 value
    let matchNums = target - nums[i];

    let obj = {};
    // 建立 obj 的 key 與 value
    obj[matchNums] = i;

    // console.log(obj);
    let matchNum = parseInt(matchNums);
    console.log(matchNum);
    console.log(obj);

    if (matchNum == nums[i]) {
      // console.log(matchNums, i);
      // console.log(i);
    }
  }
}
let nums = [1, 3, 5, 12, 22, 33];
let target = 27;
twoSum(nums, target);
