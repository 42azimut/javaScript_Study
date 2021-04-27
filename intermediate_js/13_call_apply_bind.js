/*********************************************  
 * call, apply, bind
 * 1) call 메서드: 모든 함수를 사용할수 있으며, 
 *    this를 특정값으로 지정할수 있다
**********************************************/

const mike = {
  name : 'Mike',
};

const tom = {
  name: 'Tom',
};

function showThisName() {
  console.log(this.name);
}
showThisName();  // 아무것도 안나온다. 여기서 this는  window.name;
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
};

update.call(mike, 2001, 'developer'); // call : 매개변수 사용
console.log(mike);


/*********************************************  
 * call, apply, bind
 * 2) apply는 함수 매개변수를 처리하는 방법을 제외하면,
 *   call과 완전히 같다
 *   call은 일반적인 함수와 마찬가지로 매개변수를 직접 받음
 *   apply는 매개변수를 배열로 받는다
**********************************************/

update.apply(tom, [1902, 'singer']);   //apply : 배열을 사용
console.log(tom);


//const minNum = Math.min(3,10,1, 2, 7,4);   
const nums = [3,10,1, 2, 7,4]
// const minNum = Math.min(...nums);   //배열 사용하면 NaN: 따라서 스프레드연산자 사용
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums);
// Math.min.apply(null, [3,10,1, 2, 7,4]);  //배열  apply는 array를 받는다.  a.. - a..
const maxNum = Math.max.call(null, ...nums); 
// Math.max.call(null, 3,10,1, 2, 7,4);  //매개변수 직접 받음

console.log(minNum);
console.log(maxNum);


/*********************************************  
 * call, apply, bind
 * 3) bind
 *  함수의 this 값을 영구히 바꿀수 있다. 
**********************************************/

const jieun = {
  name : 'IU',
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
};

const updateJieun = update.bind(jieun);
updateJieun(1995, 'singer');
console.log(jieun);


/*********************************************  
 * call, apply, bind
 * 사용 예제
**********************************************/

const user = {
  name : 'Azimut',
  showName: function(){
    console.log(`hello, ${this.name}`);
  },
};
user.showName();  //hello, Azimut

let fn = user.showName;  
fn(); //hello, undefined   
//이럴때 call 사용
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();

