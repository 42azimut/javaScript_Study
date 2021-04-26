// 06 String

//length : 문자열 길이
let desc = 'hello';
console.log(desc.length);
console.log(desc[1]);

//toUpperCase() / toLowerCase()
let desc1 = "Hi guys, What in the World";
console.log(desc1.toUpperCase());
console.log(desc1.toLowerCase());

// str.indexOf(text)   //텍스트 첫번째 문자열의 위치값 반환
console.log(desc1.indexOf('in'));  //만약 없으면 -1

//주의
if (desc1.indexOf('Hi') > -1) {   //그래서 -1보다 큰 값으로 설정 인덱스값이 0이기 때문에 아래 실행됨
  console.log('Hi 포함위치는 0값 if 문 0이면 false 따라서 여기 출력 안됨');
};

//str.slice(n, m) : n 시작점, m 까지 문자열 반환
// m 없으면 끝까지, 있으면 m미만까지 
// 음수는 끝에서부터 역시 포함 안함 "미만"
let desc2 = "abcdefg";
console.log(desc2.slice(1,4));
console.log(desc2.slice(1,-2));  //bcde
console.log(desc2.slice(2));

//str.substring(n, m)  : n과 m사이 문자열 반환  
// 음수 0으로 인식
console.log(desc2.substring(2, 4));
console.log(desc2.substring(4, 2));  //숫자 위치 바껴도 동작 m, n 사이라고 하면 됨! 

//str.substr(n, m)  : n부터 시작, m 개를 반환한다
console.log(desc2.substr(2,4));  //cdef  --> 2부터 시작 4개 반환

//str.trim() : 앞뒤 공백 문자 제거
let desc3 = "    coding   ";
console.log(desc.trim());  // "coding"
console.log(desc.trim().repeat(3));  //hellohellohello

// 문자열 크기 비교 가능 (아스키코드 참조)
console.log("a" < "c");  //true

// "a".codePointAt(0);    :문자를 아스키 코드 숫자로 반환
console.log("a".codePointAt(0));  //97

// String.fromCodePoint(97)  : 숫자 아스키 코드 97을 해당 문자로 반환
console.log(String.fromCodePoint(97));  //a

//////////////////
//////////////////
// 실습예제
let list = [
  '01. 들어가며',
  "02. js의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];
for (let i=0; i < list.length; i++) {
  newList.push(list[i].slice(4));
};
console.log(newList);


// 금지어 : 콜라
function hasCola(str) {
  if(str.indexOf('cola') > -1) {   // if(str.indexOf('cola') {}  과 차이점!! 
    console.log('금지어가 있어요');
  } else {
    console.log('success');
  }
}
hasCola("콜라가 이 사이다 냐?  ")  // cola 가 없으면 -1  
hasCola("콜라가 이 cola 냐?  ")
hasCola("cola")  // if(0) ==  false 이기때문에 "성공"

console.log("=====================");

//  위 indexOf 대신 includes 사용! 
// includes  --> 트루 , 폴스만 판단.
function hasCola(str) {
  if(str.includes('cola')) { 
    console.log('금지어가 있어요');
  } else {
    console.log('success');
  }
}
hasCola("콜라가 이 사이다 냐?  ")  
hasCola("콜라가 이 cola 냐?  ")
hasCola("cola") 