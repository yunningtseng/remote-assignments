// find max num
function max(numbers) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
let arr = [1, 2, 4, 5];
max(arr);

console.log(max(arr))