// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }


const doubleIt = num => num * 2;


const add = (x, y) => x + y;

const giveFive = () => 5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result3 = doMath(7, 5, 13)
const result = add(50, 70);
const result2 =giveFive();
console.log(result3);
