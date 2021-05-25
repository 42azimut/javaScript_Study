# 자바스크립트 중급 강좌

[코딩앙마 자바스크립트 중급 유튜브 재생목록](https://www.youtube.com/playlist?list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4)


## 02. 생성자 함수  / 붕어빵틀 과 붕어빵
```
function User (name, age) {   //User 첫글자 대문자
  this.name = name;
  this.age = age;
}
let user1 = new User('Jayden', 32);  //new 연산자 사용하여 호출
let user2 = new User('kayty', 23);
```

## 03. Methods (computed method)
Object.assign()  : 객체를 복제한다.변수에 담으면 객체의 주소만을 참조!
Object.keys()   : 프로퍼티 키 만 반환
Object.values()   : 밸류 만 반환
Object.entries()  : 둘다 반환
Object.fromEntiries()  : 키/값 배열을 객체로 변환!

1) assign()
const cloneUser = Object.assign({}, user);  //객체 복제
cloneUser.name = 'Tom';

Object.assign(user, info1, info2)   //2개 이상 객체도 user에 병합 가능

2) Object.fromEntries() : 
```
let arr = [
  ["mon", "월"],
  ["tue", "화"]
];

const result = Object.fromEntries(arr);
console.log(result);
```

## 04. Symbom()  
- `const a = Symbol();  // new 를 붙이지 않는다! "유일한 식별자"`

- 유일성 보장
'''
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2);  //false
'''

- `Symbol.for() // 전역 심볼. `

## 05. math method
- toString(2)   // 2 진법(문자형)
- Math.PI   //3.14.....
- Math.ceil()  //올림
- Math.floor()  //내림
- Math.round()  //반올림
```
let userRate = 30.1234; //소수점 둘쨰자리 까지 표현(셋째 자리에서 반올림)
console.log(Math.round(userRate * 100) / 100); 
```

- toFixed()   //소수점 자릴수 (문자열로 반환)
`userRate.toFixed(2);  // "30.12"  `

- parseInt()  // 앞에서부터 숫자만 반환
- parseInt('f2', 16);  // 243 --> 10진수로 반환
- parseInt('11', 2)  // 3  --> 10진주로 반환

- parseFloat();   //부동소수점 이하까지(수)만 반환

- Math.random();  //1이내 소수점에서 임의의 수 반환
`Math.floor(Math.random() * 100) + 1);`  //1~100 임의 수!

- Math.max(1,2,3);  //배열 안됨!
- Math.min(1,2,3);   

- Math.abs(-1)

- Math.pow(2, 10);   // 2의 10승

- Math.sqrt(16);   //루트 근!

## 06. String methods
```
// str.indexOf(text)   //텍스트 첫번째 문자열의 위치값 반환
// str.slice(n, m) : n 시작점, m 까지 문자열 반환
// str.substring(n, m)  : n과 m사이 문자열 반환  
// str.substr(n, m)  : n부터 시작, m 개를 반환한다
// str.trim() : 앞뒤 공백 문자 제거
// "a".codePointAt(0);    :문자를 아스키 코드 숫자로 반환
// String.fromCodePoint(97)  : 숫자 아스키 코드 97을 해당 문자로 반환

//  위 indexOf 대신 includes 사용! 
// includes  --> 트루 , 폴스만 판단.
- if(str.indexOf('cola') > -1) {}
- if(str.includes('cola')) {} 
```

## 07. Array methods
- arr.splice(n, m, x, y)  : 특정 요소 지우고(n ~ m) x, y 추가
- arr.splice(1,2)  : n부터 m 까지 삭제된 요소 반환
- arr.concat(arr2, arr3 ..)  : 합쳐서 새배열 반환
- arr.forEach(fn(item, index, arr) => {}) : 배열반복 중요~ 함수를 인자로받아 반복한다.
```
let users = ['Mike', 'Tom', 'JKane'];
users.forEach((name, index) => {
  console.log(`${index + 1} - ${name}`);
});
```
- arr.idnexOf()  / arr.lastIndexOf()
- arr.includes() : 포함하는지만 확인 (true, false)
- arr.find(fn)  / arr.findIndex(fn) 
```
const result3 = userList.findIndex((user) => {
if (user.age <= 19) {
    return true;;
  }
  return false;
});
```

- arr.filter(fn)   : 만족하는 모든 요소를 배열로 반환
```
let arr6 = [1,2,3,4,5];
const result6 = arr6.filter((item) => {
  return item % 2 === 0;
});
console.log(result6);
```

- arr.reverse()  : 역순으로 재정렬
- arr.map(fn)  // 함수를 인자로 받아 특정 기능을 실행하고 **새로운 배열**을 반환
```
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
```

- arr.split(",")   // (문자열을 받아  쉼표기준으로 분리 배열로 반환)
- arr.join("-")  // 원소를 한개로 - 연결

-  Array.isArray()  : typeof ... 는 기본적으로 객체와, 배열은 모두 객체의 형태이다  따라서 위 메서드를 이용하여 배열인지 확인 할수 있다. 

- push() :뒤에 삽입
- pop() : 뒤에 삭제
- unshift() :앞에 삽입
- shift() : 앞에 삭제

## 08. arr.sort(),   reduce(callback, acc(prev), cur, index, array)

- Lodash  :  유용한 기능을 모아둔 라이브러리
`_.sortBy(arr);`    // 숫자, 문자 소트 가능! 

- reduce(fn, acc(prev), cur, idx, array )   //acc 누적값