// JS실험실 : 04.스크롤액션 JS

//부드러운 스크롤 작동함수 호출
// startSS();

// DOM 함수 객체 //////////////
const myFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  // 바운딩함수
  getBCR: (ele) => ele.getBoundingClientRect().top,
  // 옵셋탑값 반환함수
  getOT: (ele) => ele.offsetTop,
}; /////// myFn 객체 /////////////


// 1. 대상선정 ///////////////
// 스크롤 등장대상 : .hide-el (별도의 클래스를 줌!)
const scAct = myFn.qsa(".hide-el");
console.log('대상:',scAct);

// 2. 이벤트 설정 및 함수 호출하기 ////////////
// 2-1. 글자등장함수 호출하기

// 2-2. 스크롤 등장액션 이벤트 설정하기
myFn.addEvt(window, "scroll", showIt);

// 3. 함수 만들기 ///////////////
// 3-1. 스크롤 등장액션 함수
function showIt() {
  // 클래스 on넣기 함수 호출하기

  // for of 제어문 처리방법
  // for (let x of scAct) addOn(x);

  // forEach메서드 처리방법
  scAct.forEach(ele=>addOn(ele));

  // let pos = myFn.getBCR(scAct[0]);
  // let pos2 = myFn.getBCR(scAct[1]);
  // let pos3 = myFn.getBCR(scAct[2]);
  // 함수호출확인
  // console.log('첫번째대상위치:',pos);

  // if(pos<500) scAct[0].classList.add('on');
  // if(pos2<500) scAct[1].classList.add('on');
  // if(pos3<500) scAct[2].classList.add('on');
} /////////// showIt 함수 /////////////

// 스크롤 등장 기준설정 : 화면의 2/3
const CRITERIA = (window.innerHeight / 3) * 2;
// console.log("기준값:", CRITERIA);

//// [ 클래스 on 넣기 함수 ] ///////////
function addOn(ele) {
  // ele - 대상요소
  // 바운딩값 구하기
  let bcrVal = myFn.getBCR(ele);
  // console.log(bcrVal);

  // 기준값보다 작을때 등장
  if (bcrVal < CRITERIA) ele.classList.add("on");
  // 기준값보다 크면 원상복귀(숨김-on빼기)
  else ele.classList.remove("on");
} ///////////// addOn 함수 //////////////

// [ 글자등장 셋팅하기 ] /////////////////


  
  




