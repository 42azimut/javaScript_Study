function User (name, age) {
  this.name = name;
  this.age = age;
}
let user1 = new User('Jayden', 32);
let user2 = new User('kayty', 23);

console.log(user1);
console.log(user2);
// User { name: 'Jayden', age: 32 }
// User { name: 'kayty', age: 23 }


//실제 생성자 함수 동작 방식  아래 this, return 문이 있는것 처럼 
function User(name, age) {
  //this = {}  //없어도 됨
  this.name = name;
  this.age = age;
  //return this;  //없어도 됨
}

new User();

//생성자함수에 메서드 추가
function User2 (name, age) {
  this.name = name;
  this.age = age;
  this.sayName = () => {
    console.log(this.name);
  }
}
let user3 = new User2('kkk', 22);
console.log(user3);
user3.sayName();