/*********************************************  
 * 나머지 매개 변수, 전개 구문
 *   ... 
**********************************************/
// ... 

function showName(...name) {
  console.log(name);
};
showName('Mike', 'Jane');


function addNum(...nums) {
  let result = 0;
  nums.forEach((num) => (result += num));
  console.log(result);  
};

function addNum1(...nums) {
  let result = nums.reduce((prev, cur) => prev + cur);
  console.log(result);
}

addNum(1,2,3,4,5);
addNum1(1,2,3,4,5,6);

/*********************************************  
 * User 객체를 만들어 주는 생성자 함수를 만듬
 * 나머지 매개변수는 항상 마지막 인자로 사용해야 한다
**********************************************/
function User(name, age,  ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User('Moike', 23, 'React', 'NodeJs');
const user2 = new User('Jane', 32, 'Tensor', 'CSs');
const user3 = new User('Tomeson', 19, 'Python', ['html', 'css']);

console.log(user1);
console.log(user2);
console.log(user3);

//전개구문 : 배열
let arr11 = [1,2,3];
let arr22 = [5,6,7];
//let res_arr = [...arr11, ...arr22];
let res_arr = [11, 22, ...arr11, 55,66,77, ...arr22]
console.log(res_arr);

/*********************************************  
 * 전개구문
 * arr을 [4,5,6,1,2,3] 으로 
**********************************************/
let arr33 = [1,2,3];
let arr44 = [4,5,6];

// arr44.reverse().forEach((num) => {
//   console.log(arr33.unshift(num));
// });

let arr55 = [...arr44, ...arr33]
console.log(arr55);


/*********************************************  
 * 전개구문
 * user 객체에서 전개구문 사용하기
**********************************************/
let user_1 = { name : 'Jayden'};
let info = {age: 34};
let fe = ["Js", "node"];
let lang = ['Korean', 'English'];


// user_1 = Object.assign({}, user_1, info, {
//   skills: [],
// });
// 어려운 방법 순횐 시켜서 푸쉬하기
// fe.forEach((item) => {
//   user_1.skills.push(item);
// });
// lang.forEach((item) => {
//   user_1.skills.push(item);
// })

//전개 구문 하면 쉽다
user_1 = {
  ...user_1,
  ...info,
  skills: [...fe, ...lang]
  };
console.log(user_1);

