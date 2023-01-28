/* const product = {
    name: 'laptop',
    price: 3200,
    brand: 'lenovo',
    color: 'silver'
};

const keys = Object.keys(product);
const values = Object.values(product);
console.log(keys, values); */

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yello' },
    { name: 'sunglass', price: 320, brand: 'riboon', color: 'black' }
];

const newProduct = { name: 'webcam', price: 453200, brand: 'SAMSUNG', color: 'silver' };
/* newProduct['id'] = 11;
console.log(newProduct); */

const newProducts = [...products, newProduct]
// console.log(newProducts);

const remaining = newProducts.filter(product => product.name !== 'webcam');
// console.log(remaining);

const str = '36';
const num = +'36';
// console.log(num);

const isActive = 1;
const showUser = () => console.log('Show User');
const hideUser = () => console.log('Hide User');
// isActive ? showUser() : hideUser();
isActive && hideUser();



