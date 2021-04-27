/*********************************************  
 * Closure
 * 어휘적 환경 (Lexical Enviroment)
 * 함수와 렉시컬 환경의 조함
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
**********************************************/

function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add3 = makeAdder(3);
console.log(add3(2));  //5

const add10 = makeAdder(10);
console.log(add10(50));



/*********************************************  
 * makeCounter()
**********************************************/

function makeCounter() {
  let num = 0;  //은닉화
  return function() {
    return num++;
  };
};

let counter = makeCounter();
console.log(counter());   // 0 
console.log(counter());   // 1
console.log(counter());   // 2
console.log(counter());   // 3 
// 숫자 변경 불가능! 