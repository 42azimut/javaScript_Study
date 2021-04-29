/*********************************************  
 * Promise
 * -  사용법
 * const pr = new Promise ((resolve, reject) => {
 *   // coding.... 
 *  })
**********************************************/

// const pr = new Promise((resolve, reject) => {    //resolve 는 성공했을때 실행, reject 는 실패했을떄 실행
//   // code ...  어떤일이 완성되고 실행되는 함수 콜백함수
// });

/***********************************************************************  
 * new Promise
 * -  사용법
 * state : pending(대기)                               fulfilled(이행됨)
 *                      --> 성공 : resolve(value) --> 
 * result : undefiend                                 value
 * 
 * 
 * state : pending(대기)                               rejected(거부됨)
 *                      --> 실패 : reject(error) --> 
 * result : undefiend                                 error
*************************************************************************/


const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OKKK --> value 전달 : ')
    reject(new Error("Error........"));
  }, 2000);
});
console.log('시작함');
pr.then(
  function(result) {
    console.log(result + '가지러  ~');
  }).catch(
    function(err) {
      console.log('에러 : 다시 주문하세요');
  }).finally(
    function() {
      console.log('---- 주문 완료 ---');
    }
  )


  //  16 프로미스 ing 5:30