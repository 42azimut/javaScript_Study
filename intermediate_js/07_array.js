// array method

// push() // 뒤에 삽입
// pop()  // 뒤에 삭제
// unshift()  // 앞에 삽입
// shift()   // 앞에 삭제


// arr.splice(시작, 개수)  : 특정 요소 지움 
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);   //[ 1, 4, 5 ]

// arr.splice(n, m, x) : 특정요소 지우고 추가
let arr1 = [1,2,3,4,5];
arr1.splice(1,3, 100, 222);
console.log(arr1);   //[ 1, 100, 222, 5 ]
arr1.splice(1, 0, "Mike", "Riot");
console.log(arr1);  //[ 1, 'Mike', 'Riot', 100, 222, 5 ]

// arr.splice() : 삭제된 요소 반환
let result = arr1.splice(2,2); 
console.log(arr1);  //[ 1, 'Mike', 222, 5 ]  => 원본에 남은 원소들
console.log(result);  //[ 'Riot', 100 ]  => 삭제 요소들

//arr.slice(n, m) :  n 부터 m (미만) 까지 반환
let arr2 = [1,2,3,4,5];
res = arr2.slice(1,3);
console.log(res);  // [ 2, 3 ]

//arr.concat(arr2, arr3 ..)  : 합쳐서 새배열 반환
let arr3 = [1,2];
console.log(arr3.concat([5,6]));  //[ 1, 2, 5, 6 ]
console.log(arr3.concat([7,8], [22,33]));  //[ 1, 2, 7, 8, 22, 33 ]

// arr.forEach(fn) : 배열반복 중요~ 함수를 인자로받아 반복한다.
let users = ['Mike', 'Tom', 'JKane'];
users.forEach((name, index) => {
  console.log(`${index + 1} - ${name}`);
});

//arr.idnexOf()  / arr.lastIndexOf()
let arr4 = [1,2,3,4,5,6,7,8,9,3];
let i4 = arr4.indexOf(3);
console.log(i4);  //2
console.log(arr4.indexOf(3,5));  //arr.indexOf(찾을원소, 검색할 시작 인덱스) :  원소 3을 5번째 어레이에서 부터 찾아라
console.log(arr4.lastIndexOf(3));  //마지막에서부터 3을 찾아라! 

//arr.includes() : 포함하는지만 확인 (true, false)
console.log(arr4.includes(4));  //true
console.log(arr4.includes(234));  //false

//arr.find(fn)  / arr.findIndex(fn) 
// 첫번째 true 값만 반환하고 끝, 만약 없으면 undefined 를반환
let arr5 = [1,2,3,4,5];
const result2 = arr5.find((item) => {
  console.log('item : ', item); 
  return item % 2 === 0;  // 짝수를 찾으면 결과값으로 저장하고 끝! 뒤에 순환할 필요 없음..  
});
console.log(result2);


let userList = [
  { name: 'Mike', age: 34 },
  { name: 'Jane', age: 45 },
  { name: 'Tom', age: 14 },
]; 
//const result3 = userList.find((user) => {
const result3 = userList.findIndex((user) => {
if (user.age <= 19) {
    return true;;
  }
  return false;
});
console.log(result3);

// arr.filter(fn)   : 만족하는 모든 요소를 배열로 반환
let arr6 = [1,2,3,4,5];
const result6 = arr6.filter((item) => {
  return item % 2 === 0;
});
console.log(result6);


// arr.reverse()  : 역순으로 재정렬
let arr7 =[1,2,3,4,5];
console.log(arr7.reverse());  //[ 5, 4, 3, 2, 1 ]

// arr.map(fn)  // 함수를 인자로 받아 특정 기능을 실행하고 새로운 배열을 반환
let userList2 = [
  { name: 'Mike', age: 34 },
  { name: 'Jane', age: 45 },
  { name: 'Tom', age: 14 },
]; 

let newUserList = userList2.map((user, index) => {
  console.log('index:', index);
  return Object.assign({}, {
    idx: index + 1, 
    isAdult: user.age > 19,
  }, user);
});
console.log(newUserList);


// join, split (배열로 반환)
// arr.join("-")  // 원소를 한개로 - 연결

const users4 = "Mike, Jane, Tom, Tony";
const result7 = users4.split(",");
console.log(result7);  //[ 'Mike', ' Jane', ' Tom', ' Tony' ]

// Array.isArray()  : typeof ... 는 기본적으로 객체와, 배열은 모두 객체의 형태이다
// 따라서 위 메서드를 이용하여 배열인지 확인 할수 있다. 
