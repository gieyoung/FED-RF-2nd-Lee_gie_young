// 08. 재귀호출 JS - call_myself.js

import mFn from './my_function.js';



// 초기셋팅하기
// 대상: .gbox
const gbox = mFn.qs('.gbox');

// 코드변수
let hcode = "";


hcode += "<ul>";
// for문 돌려서 img 넣기: ul>li>img

for(let i=1; i<=7; i++){
    hcode += `
        <li>
            <img src="./images/auto_scroll/m${i}.jpg" alt="갤러리이미지">
        </li>
    `;
} /////// for문 ///////////


hcode += "</ul>";
// 코드 출력하기

gbox.innerHTML = hcode;





// 갤러리 박스를 왼쪽으로 계속 움직이게 하는 재귀호출함수
// 움직일 대상: .gbox ul
let target = mFn.qsEl(gbox,'ul');

// 기준값 업데이트 함수
// 윈도우 가로폭 li 하나의 크기
const updateCriteria = () => 
mFn.qsaEl(target,"li")[0].offsetWidth;
// 기준값(대상 li의 가로크기값)
let criteria = updateCriteria();
// 리사이즈시 업데이트
mFn.addEvt(window,"resize",
() => {
  criteria = updateCriteria();
  console.log('업데이트', criteria);

});
console.log(criteria);

// 현재 translate 값
let currVal = 0;

function moveGallery(){
  // 현재값 1씩 감소
  
  target.style.translate = --currVal+'px';

  // 하나 크기만큼 나가면 처리
  // 기준값을 마이너스로 하고 Math.floor() 소수점 아래 버림
  if(currVal <= Math.floor(-criteria)){
    // 1. 맨 앞 li 맨 뒤로 이동
    // appendChild(맨앞li)
    target.appendChild(mFn.qsaEl(target,"li")[0]);

    // 2. translate값 초기화
    target.style.translate = '0px';

    // 3. 하나 크기만큼 나가면 currVal값 초기화
    currVal = 0;

  }/////////////if//////////////

  // 하나 크기만큼 나가면 currVal값 초기화


  // 재귀호출(타임아웃 함수로 호출함)
  // 움직이는 속도
  // stopSts변수값이 false일때만 실행하기
  if(!stopSts)
  setTimeout(moveGallery,10);
  

}/////////moveGallery/////////


// 대상에 마우스오버시 동작 멈춤. 아웃시 동작
// 대상: .gbox => gbox변수
// 멈춤상태변수
let stopSts = false;

//1. 멈추기(mouseenter)
mFn.addEvt(gbox,"mouseenter",() => {
  // 멈춤상태변수 true변경
  stopSts = true;
});

//2. 동작하기(mouseleave)
mFn.addEvt(gbox,"mouseleave",() => {
  // 멈춤상태변수 true변경
  stopSts = false;
  // 재귀호출함수 호출
  moveGallery();
});


// 2초 후 동작
setTimeout(moveGallery,2000);


