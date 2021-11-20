// Exporting module
console.log('Exporting module');

//Blocking code
// console.log('Start fettching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finsihed fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
};

const totalPrice = 267;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to cart`);
}
