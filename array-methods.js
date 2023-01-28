const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'Iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yello' },
    { name: 'sunglass', price: 320, brand: 'riboon', color: 'black' }
];

const brands = products.map(product => product.brand);
// console.log(চাrands);
products.forEach(product => {
    //console.log(product.name, ':', product.price)
});

const cheaper = products.filter(product => product.price <= 5000);
// console.log(cheaper);

const containing = products.filter(product => product.name.toUpperCase().includes('N'));
const special = products.find(product => product.name.includes('n'));
// console.log(containing);

const binaryArr = products.filter(product => {
    if (product.name.includes('n'))
        return 1;
    else
        return 0;
});
console.log(binaryArr);
