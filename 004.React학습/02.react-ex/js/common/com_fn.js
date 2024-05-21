// 공통 처리 JS - com_fn.js

// 초이스 인트로 애니 실행함수
const choiceIntroAni = () => {
  $(".tit span").css({display:"inline-block"}).animate({scale:"200%"},1000)
  .animate({scale:"100%"},1000);
  //초이스 메인 이미지 애니
  $(".img-box>img").delay(700).fadeTo(500,1);
};//////////choiceIntroAni////////////

// 타이틀 애니 실행함수
const logoAni = () => {
// 로고 최초 한번만 애니메이션
$("#logo").animate({scale:"200%",rotate:"360deg"},1000)
.animate({scale:"100%",rotate:"0deg"},1000);
};//////////logoAni/////////////

const init = () => {
  $(".img-box>img").css({ opacity: 0 });
};//////////init////////////


// 내보내기
export {choiceIntroAni, logoAni, init};