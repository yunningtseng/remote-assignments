// Assignment 1 : Callback Function

function delayResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;

  // - 把 callback 包在匿名 function 中
  window.setTimeout(() => {
    callback(result);
  }, delayTime);

  // * setTimeout(function, milliseconds, param)
  // window.setTimeout(callback(result), delayTime);
}

delayResult(4, 5, 3000, function (result) {
  console.log(result);
});
// 9，3秒後出現

delayResult(-5, 10, 5000, function (result) {
  window.alert(result);
});
// 5，2 秒後出現
