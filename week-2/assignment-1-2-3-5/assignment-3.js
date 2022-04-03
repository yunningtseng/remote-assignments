// calculate the average price
function avg(data) {
  let productLength = data.size;
  let totalPrice = 0;
  for (let i = 0; i < productLength; i++) {
    let price = data.products[i].price;
    totalPrice += price;
  }
  let avgPrice = totalPrice / productLength;
  return avgPrice;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // show the average price of all products
