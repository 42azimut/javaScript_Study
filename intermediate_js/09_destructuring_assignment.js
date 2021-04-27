/*********************************************  
  구조 분해 할당(Destructuring assignment)
  -> 구조분해 할당 구문은 배열이나 객체의 속성을 분해해서 
  그 값을 그 변수에 담을 수 있게 하는 표현식
**********************************************/

// let [x, y] = [1, 2];
// console.log(x);
// console.log(y);

/*
let users = ['Mike', 'Jane', 'Tom'];
let [user1, user2, user3] = users;  // let user1 = users[0]; 같음
console.log(user1);
console.log(user2);
console.log(user3);
*/

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split('-');   // - 기준으로 자름
console.log(user1);

// let [a,b,c] = [1, 2]; // 이경우 c 에는 undefined 가 된다. 
// 기본값 세팅
let [a=3, b=5, c= 6] = [1,2];
console.log(a, b, c);

let [u1, ,u2] = ['Mike', 'Jane', 'Tom', 'Jackson'];   //Jane, Jackson 은 안들어감
console.log(u1, u2);

//배열 구조 분해 : 바꿔치기  swap
// [x, y] =[y, x];  

// 객체 구조 분해
let user4 = {name4: 'Azimut', age4: 23};
let {name4, age4} = user4;  // 객체 키 순서 상관 없음
let { name4: userName, age4: userAge} = user4;
//let {name4, age4, gende='male'} = user4;

console.log(userName);
console.log(userAge);