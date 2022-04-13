// Assignment 2: Callback Function and Advanced HTML DOM

function ajax(src, callback) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState == 4) {
      if (request.status == 200) {
        // - 接收 JSON 格試，轉為 JS 格式
        let result = JSON.parse(request.responseText);
        callback(result);
      }
    }
  };
  request.open("GET", src);
  request.send();
}

function render(data) {
  let div = document.createElement("div");
  let productName = "zzz"
  // let productName = document.
  div.innerHTML = `<div>
  <h1>${productName}</h1>
  <p></p>
  <p></p>
  </div>`


  document.body.appendChild(div);

  // document.createElement() and appendChild() are preferred. No innerHTML or something alike
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);

// you should get product information in JSON format and render data in the page
