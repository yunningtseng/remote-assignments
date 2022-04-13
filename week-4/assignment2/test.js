let data = `[
    {
        "name": "Pixel 3",
        "price": 27700,
        "description": "最新的 Google 手機。"
    },
    {
        "name": "Chromecast",
        "price": 1500,
        "description": "在大螢幕上播放喜歡的影片。"
    },
    {
        "name": "Pixel Book",
        "price": 12000,
        "description": "最新的 Chromebook 產品。"
    }
]`



let result = JSON.parse(data);
// console.log(JSON.stringify(result));
// console.log(typeof result);

// console.log(result[0]["name"]);

let productName = result.map((i) => result[i]["name"])
console.log(productName1);


let productName1 = result.map((product) => {
    return { productName: product.name, productPrice: product.price }
})

console.log(productName);


// let input = [1, 2, 3];
// let output = input.map((i) => i * 2);
