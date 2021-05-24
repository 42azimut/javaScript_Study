// 03 객체 메소드(Object methods), 계산된 프로퍼티(Computed property)


// 계산된 프로퍼티
let a = 'age';
const user = {
  name : 'Jayden',
  //age : 34; 
  [a] : 34,   //계산된 프로퍼티 >>>  age: 34
}
console.log(user);

function makeObj(key, val) {
  return {
    [key] : val,   //어떤 키가 될지 모르는 경우 유용하다. 
  };
}
const obj1 = makeObj('나이', 22);
const obj2 = makeObj('성별', 'male');
const obj3 = makeObj('name', 'Jayden Azimut');
console.log('makeObj : ', obj1, obj2, obj3);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 객체 메서드 
// Object.assign()   : 객체 복제
const user1 = {
  name : 'Kayty',
  age : 30,
} 
// 객체 복제 하려면 
// const cloneUser = user; 이렇게 담으면 복제 되는건가? NO ! 
const cloneUser = user1;
console.log('user : ', user1);
console.log('cloneUser : ', cloneUser);  // user1 동일한 객체를 "참조" 할뿐, 복제가 아니다. 

const newUser = Object.assign({}, user1);  //빈 객체안에 user1과 병합됨. 따라서 그대로 name, age 출력!
console.log('newUser : ', newUser);

const newUser2 = Object.assign({ gender: 'male' }, user1);
console.log('newUser2 : ', newUser2);


//두개 이상의 객체 복제
const user3 = {
  name : 'Kim Yon a ',
}
const info1 = {
  age : 30,
}
const info2 = {
  gender : 'female',
}
const multiObj = Object.assign(user3, info1, info2);
console.log('multiObj : ', multiObj);

//Object.keys() : 키 배열 반환 cf.) 자바스크립트 배열은 [] 파이썬 리스트
const user4 = {
  name : 'pretty',
  age : 23,
  gender : 'female',
}
console.log(Object.keys(user4))  //[ 'name', 'age', 'gender' ]

// Object.values() : 값 배열 반환
console.log(Object.values(user4));   //[ 'pretty', 23, 'female' ]

// Object.entries() : 키 / 값 배열 반환
console.log(Object.entries(user4));   //[ [ 'name', 'pretty' ], [ 'age', 23 ], [ 'gender', 'female' ] ]
const entries_Obj = Object.entries(user4);   // 배열을 변수에 담음. 객체로 변경할려고

// Object.fromEntires()  : 키/값 배열을 객체로 반환
console.log(Object.fromEntries(entries_Obj));    //{ name: 'pretty', age: 23, gender: 'female' }

