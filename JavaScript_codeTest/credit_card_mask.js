// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, 
// you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, 
// which changes all but the last **four** characters into '#'.

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
  //console.log(cc.split('').map(letter, idx) => letter);
  return cc.split('').map((val, idx) => idx < cc.length - 4 ? '#' : val).join('');
}

console.log(maskify("4556364607935616"));
console.log( maskify("Nananananananananananananananana Batman!"));

const numbers = [1,2,3,4,5];

const numDouble = numbers.map(double)

function double(val, idx, arr) {
  return val * 2;
}

console.log(numDouble);