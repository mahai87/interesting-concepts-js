// const nums = [24, 43, 53, 56];
// console.log(Array.isArray(nums));
// // console.log(typeof (nums))

function triple(x, y, z) {
    x.age = 44;
    // y = 784;
    // z = 478578;

}
const num1 = 2;
const num2 = 5;
const num3 = 554;
// triple(num1, num2, num3)
const myObj = { name: 'Kuddo', age: 22 };
triple(myObj);

console.log(myObj);

let p = 'JavaScript';
let q = p; p = 'React';
console.log(q);

const isTrue = 'false';

if (!isTrue) {

    console.log('hello');

}

else {
    console.log('world');

}


function sum(p, q) {

    console.log(p + q);

}

const result = sum(2, 3);
console.log(result);

if ('2' === 2) {

    console.log('Inside if');

}

else {

    console.log('Inside else');

}

function work(x, y = 4) {

    return x + y;

}

console.log(work(32));