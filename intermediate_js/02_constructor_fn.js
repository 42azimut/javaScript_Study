// 파이썬 인스턴스 객체 만들기와 비슷! 용어혼동 주의!

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
  this.sayName = function() {
    console.log(this.name);  //여기 this는 아래 user3 를 가리킴! 
  }
}
let user3 = new User2('kkk', 22);
user3.sayName();


// Item 으로 생성자 함수 상품 객체 생성해보기
function Item (title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`이 상품 ${title}의 가격은 ${price} 입니다.`);
  }
};
item1 = new Item ('apple Watch', '230,000');
item2 = new Item ('apple TAG', '60,000');
item3 = new Item ('keyboard', '1,538,120');
item1.showPrice();
item2.showPrice();
item3.showPrice();

console.log(item1, item2, item3);
