/* CGV PJ 인트로 페이지 CSS-intro.js */

const myvid = document.querySelector('#myvid');


myvid.addEventListener('timeupdate',()=>{
//동영상 멈춤 여부 확인
// 비디오요소.paused => 멈춤상태면 true, 아니면 false
let isStop = myvid.paused;


// 멈춘상태면 true이면 페이지 이동
if(isStop == true){
  location.href = './main.html';
}

console.log(isStop)
});///////timeupdate////////