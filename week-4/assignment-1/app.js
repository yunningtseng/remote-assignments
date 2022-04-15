// Assignment 1 : Callback Function

function delayResult(n1, n2, delayTime, callback) {
  let result = n1 + n2;

  // - 把 callback 包在匿名 function 中
  // - callback(result) 等同於 console.log(result) or window.alert(result)
  window.setTimeout(() => {
    callback(result);
  }, delayTime);

  // * setTimeout(function, milliseconds, param)
  // window.setTimeout(callback(result), delayTime);
}

// - console.log => callback
delayedResult(4, 5, 3000, console.log);
// 9，3秒後出現

delayedResult(-5, 10, 2000, window.alert);
// 5，2 秒後出現
