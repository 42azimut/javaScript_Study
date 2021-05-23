// Take an array and remove second element out of that array.
// Always keep the first element and start removing 
// with the next element.

function removeEveryOther(arr) {
  return arr.filter((_, idx) => idx % 2 === 0);
}



const numbers = [1,2,3,4,5,6];

// const even = numbers.filter((_, idx) => idx % 2 ===0)

// function isEven(value) {
//   return value % 2 ===0;
// }

// console.log(even);

function evenNum(arr) {
  return arr.filter((value, idx, arr) => idx % 2 ===0)
  
}

console.log(evenNum(numbers)); 

const no = numbers.filter((val, idx, arr) => {
  console.log(val, idx);
})