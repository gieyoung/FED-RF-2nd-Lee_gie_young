// DKB PJ 메인 JS - main.js //////////////

// 나의 함수 불러오기
import myFn from './my_function.js';

// 부드러운 스크롤 불러오기
import { startSS,setScrollPos } from "./smoothScroll23.js";

// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!
import slideFn from "./slide.js";
///////////////////////////////////////////////

/// 구현코드 파트 //////////////

// 1. 부드러운 스크롤 호출
startSS();

// console.log('모듈로 메인JS호출!!!', 
// document.querySelector('.top-menu'));

// 2. slideFn 슬라이드 기능함수 호출!
slideFn();

// 3. 인트로 동영상 파트 클릭시 동영상태그 넣기
// 이벤트 대상 === 변경대상 : .intro-mv-img
const introMv = myFn.qs('.intro-mv-img');
introMv.onclick = ()=>{
    console.log('인트로영상!!!');
    // 1. 동영상 넣기
    introMv.innerHTML = 
    `<video src="./images/intro_mv.mp4" 
    autoplay controls></video>`;

    // 2. 클래스 off 지우기(플레이버튼 안나오게함)
    introMv.classList.remove('off');

}; ///////// click 이벤트함수 //////////////