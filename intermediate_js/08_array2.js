/*********************************************  
  arr.sort()   : 배열 재정렬. 배열 원본 자체가 변경됨
  인수로 정렬 로직을 담은 함수를 받음
**********************************************/

let arr = [4,2,1,3,5];
let alpha = ['b', 'r', 'a', 'd', 'k']
res = arr.sort();
res1 = alpha.sort();
console.log(res);
console.log(arr);
console.log(alpha);


let arr2 = [ 27, 34, 11, 3, 15];
//  27, 34, 11, 3, 15
//  11, 27, 34, 3, 15
//  3, 11, 27, 34, 15
//  3, 11, 15, 27, 34

arr2.sort((a,b) => {
  console.log(a, b);
  return a - b;
});
console.log(arr2);

/*********************************************  
  arr.reduce()
  인수로 함수를 받음
  (누적 계산값, 현재값)  => (return 누적 계산값)
**********************************************/

let arr3 = [1,2,3,4,5];
let result = 0;

arr3.forEach((num) => {
  result += num;
});
console.log(result);

// reduce() 사용
const result1 = arr3.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc + cur;
}, 0);  //0 으로 초기값 설정
console.log(result1);


let userList = [
  {name: 'Mike', age: 30},
  {name: "Tom", age: 23},
  {name: 'Jayn', age: 17},
  {name: 'Iu', age: 27},
  {name: 'Trumpy', age: 76},
];
let result2 = userList.reduce((acc, cur) => {
  if(cur.age > 19) {
    acc.push(`${cur.name} - ${cur.age}`);
  }
  return acc;
}, []);
console.log(result2);

// 나이 합계
let age_sum = userList.reduce((acc, cur) => {
  return acc += cur.age;
}, 0);
console.log(age_sum);

// 이름길이가 3자인 사람
let length_name = userList.reduce((acc, cur) => {
  if (cur.name.length === 3) {
   acc.push(cur.name); 
  }
  return acc;
}, []);
console.log(length_name);
