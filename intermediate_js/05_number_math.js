// toString()

//10진수 --> 2진수 / 16진수 변환
let num = 10;
console.log(num.toString());  // '10'   숫자를 문자로 변환
console.log(num.toString(2));   // toString(2) 2진법으로 변환

let num2 = 255;
console.log(num2.toString(16));  // "ff"


// Math
console.log(Math.PI); //3.141592653589793

// ceil()
let num3 = 3.443545;
console.log(Math.ceil(num3));

// floor()
console.log(Math.floor(num3));

// round()  반올림
console.log(Math.round(num3));

let userRate = 30.1234; //소수점 둘쨰자리 까지 표현(셋째 자리에서 반올림)
console.log(Math.round(userRate * 100) / 100); 

// toFixed(n)  //문자열로 반환한다. 주의! Number(toFixed()) 사용하여 숫자로 변환
console.log(userRate.toFixed(2)); // "30.12"  문자로 나오네

// toFixed 0이거나, 소수점자리수보다 큰 수를 대입하면?
console.log(userRate.toFixed(0));  //"30"
console.log(userRate.toFixed(7));  //"30.1234000"
console.log(Number(userRate.toFixed(7)));  //30.1234000   <- 숫자


// parseInt()
let margin = '10pxsnv234';
console.log(parseInt(margin));  // 10 앞에만

let redColor = 'f3';
console.log(parseInt(redColor));  //NaN
console.log(parseInt(redColor, 16));  //243 <-- 16진수로 변환
console.log(parseInt('11', 2));  // 3 <-- 10진수로 변환
console.log(parseInt('11'));  // 3 <-- 10진수로 변환

// parseFloat()
let padding = '18.5%'
console.log(parseInt(padding));  // 18
console.log(parseFloat(padding)); // 18.5

// Math.random()
// 1 ~ 100 사이 임의숫자 뽑으려면?
console.log(Math.floor(Math.random()*100) + 1);
console.log(Math.random());  // 소수점  부터 랜덤수 발생
console.log(Math.random());  // 소수점  부터 랜덤수 발생

// Math.max()  _ Math.min()
console.log(Math.max(1, 2, 34, 4, 6, 77, 99));
console.log(Math.min(1, 2, 34, 4, 6, 77, 99));
console.log(Math.max([1, 2, 34, 4, 6, 77, 99]));   //배열은 안됨 Nan

//Math.abs() 절대값
console.log(Math.abs(-3));

// Math.pow(n,m)  : n의 m승 거듭제곱(승수)
console.log(Math.pow(2,10));

// Math.sqrt() 
console.log(Math.sqrt(16));
console.log(Math.sqrt(223445613));