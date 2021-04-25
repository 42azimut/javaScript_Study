// property key : 문자형

const obj = {
  1: '1ㅇㅣㄴ데요',
  false: '거짓',
};
obj1 = Object.keys(obj);
console.log(obj1);  //[ '1', 'false' ]
console.log(obj['1']);
console.log(obj['false']);

// 심볼형 Symbol  
// Symbol(); new를 붙이지 않는다. 유일한 식별자!
const a = Symbol();
const b = Symbol();
console.log(a);   //Symbol()
console.log(b);
console.log(a === b);  //false

// 유일성 보장
const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2);  //false


// 심볼형은 Object 메서드에서 건너뛴다. 
const idx = Symbol('idx');
const user = {
  name : 'Azimut',
  age : 23,
  [idx] : 'ttl',
};
console.log(Object.keys(user));     //[ 'name', 'age' ] 

for (let i in user) {
  console.log(i);    // name, age
}

// 어디서 유용하게 사용할수 있나. 
// Symbol.for() : 전역 심볼. 
const id11 = Symbol.for('idz');
const id22 = Symbol.for('idz');
console.log(id11 === id22);  //true   위의 심볼과 전역심볼 차이
console.log(Symbol.keyFor(id11));  // idz
console.log(Object.getOwnPropertySymbols(user));  //[ Symbol(idx) ]
console.log(Reflect.ownKeys(user));    //[ 'name', 'age', Symbol(idx) ]

// 사용예제
// 타 개발자가 만든 객체
const user_1 = {
  name : 'Mike',
  age : 23,
};

// 내가 작업
// user_1.showName = function () {};  // 이렇게 하지 말고 ==> 아래 심볼사용
const showName = Symbol('show Name');
user_1[showName] = function() {
  console.log(this.name, 'female?');
}

user_1[showName]();

// 사용자 접속하면 보는 메시지
for (let key in user_1) {
  console.log(`His ${key} is ${user_1[key]}`);
};
