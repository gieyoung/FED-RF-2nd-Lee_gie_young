
// 모듈로 호출된 js에서 다른 외부 js를 import로 호출가능
//import하려는 파일에서 반드시 함수, 변수 등을 export해야함

import slideFn from "./slide.js";

console.log('모듈로 메인js호출');

//slideFn 슬라이드 함수 호출

slideFn();