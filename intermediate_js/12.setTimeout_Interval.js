/*********************************************  
 * setTimeout(fn, 1000, 인수) 
 
 * setInterval(fn, 1000)
**********************************************/

function fn(){
  console.log('2초');
};
setTimeout(fn, 2000);

setTimeout(function() {
  console.log("2sec");
}, 3000);

const tId = function showName(name) {
              console.log(name);
            };
//setTimeout(showName, 2000, 'Azims');
//setTimeout(tId, 2000, 'Azims');
//clearTimeout(tId);

//setInterval(tId, 1000, 'Kayty');
clearInterval(tId);


/*********************************************  
 * setTimeout() 
**********************************************/
setTimeout(function() {
  console.log(2);  //2 나중에 실행
}, 0);
console.log(1); // 1 먼저 실행


/*********************************************  
 * setTimeout()  5sec 만 실행되고 끝!
**********************************************/
let num = 0;
function showTime() {
  console.log(`접속시간은 ${num++}sec 가 지나간다.`);
  if (num > 5) {
    clearTimeout(ctime);
  }
}
const ctime = setInterval(showTime, 1000);