// Assignment 1 : Callback Function
console.log(123);
window.alert(234);

function delayResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;

  // * setTimeout(function, milliseconds, param)
  // window.setTimeout(callback, delayTime, result);
  // * result 參數傳進 callback function 中
  setTimeout(callback, delayTime, result);

  // setTimeout(() => {
  //   // let result = n1 + n2;
  //   callback(result);
  // }, delayTime);

  // * 把 callback 包在匿名 function 中
  window.setTimeout(() => {
    callback(result);
  }, delayTime);

  window.setTimeout(callback(result), delayTime);


}

delayResult(4, 5, 3000, function (result) {
  console.log(result);
});
// 9，3秒後出現

delayResult(-5, 10, 5000, function (result) {
  window.alert(result);
  // console.log(result);
});
// 5，2 秒後出現