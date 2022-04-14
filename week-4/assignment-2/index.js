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
  let root = document.getElementById("root");

  // - 迴圈 data
  // 1. 篩出 productName、productPrice、productDescription
  // 2. 用 creatElement 產出多個 tag
  // 3. 將資料放進 tag
  // 4. 將多個 tags append 進 root

  data.forEach((product) => {
    let productName = document.createElement("h1");
    let productPrice = document.createElement("p");
    let productDescription = document.createElement("p");
    // console.log(product.name);

    productName.textContent = product.name;
    productPrice.textContent = product["price"];
    productDescription.textContent = product["description"];

    root.append(productName, productPrice, productDescription);
  });
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
