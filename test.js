const numbers = [7, 35];

const arr = numbers.map(x => x);
const arr2 = numbers.forEach(x => x);
const arr3 = numbers.filter(x => x % 2 == 0);

// console.log(arr, arr2, arr3);
/* const x = 0;
if (x) {
    console.log('true');
}
else {
    console.log('false');

} */

/* const name = 'Hero';
const age = 34;
const person = { name, age }; console.log(person);

console.log(person[name]); */

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Lucy'
    }
};

const jsonStr = JSON.stringify(adventurer);
const jsonObj = JSON.parse(jsonStr);
const ratName = adventurer?.rat?.name;

// console.log(jsonStr, jsonObj);

let person = null;
// console.log(person ? person : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);