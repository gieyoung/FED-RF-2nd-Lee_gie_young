// 헤더 마우스 오버시 2단메뉴 내려오기
// const headerWrap = document.querySelector(".nav_wrap");
// const gnbList = document.querySelectorAll(".gnb-depth1");

// gnbList.forEach((ele)=>{
//   ele.addEventListener('mouseenter',()=>{
//     headerWrap.classList.add("on");
//   });
// });

// headerWrap.addEventListener('mouseleave',()=>{
//   headerWrap.classList.remove("on");
// });

/****************배너 슬라이더(swiper)****************/

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");


var swiper = new Swiper(".swiper-container", {
  // Autoplay 활성화 및 옵션 설정
  loop: true,
  autoplay: {
    delay: 10000, // 슬라이드 전환 시간 (밀리초)
    disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },

 
});




/****************슬라이드 정지/재생 버튼****************/

var play = document.querySelector(".swiper-button-play");
var pause = document.querySelector(".swiper-button-pause");



// 정지버튼 클릭시, 슬라이드 멈추고, 정지버튼이 없어지고, 재생버튼이 나타남
pause.onclick = function () {
  swiper.autoplay.stop();
  pause.style.display = "none";
  play.style.display = "block";
};

// 재생버튼 클릭시, 슬라이드 가동하고, 정지버튼이 나타나고, 재생버튼이 없어짐
play.onclick = function () {
  swiper.autoplay.start();
  pause.style.display = "block";
  play.style.display = "none";
};






/****************햄버거 버튼****************/
//대상선정: 햄버거 버튼
const siteMap = document.querySelector(".sitemap");
const hamBtn = document.querySelector(".hambtn");
const popMenu = document.querySelector(".pop-menu");


// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
siteMap.addEventListener('click', () => {
  hamBtn.classList.toggle('on');
  popMenu.classList.toggle('on');
});


// document.querySelector(".sitemap").onclick = function () {
//   document.querySelector(".hambtn").classList.add("on");
//   document.querySelector(".pop-menu").style.display = "block";

// };
// document.querySelector(".sitemap").onclick = function () {
//   document.querySelector(".hambtn").classList.remove("on");
//   document.querySelector(".pop-menu").style.display = "none";
  
// };

/****************사이트맵 팝업****************/



/****************다국어****************/
document.querySelector(".btn-lang").onclick = function () {
  document.querySelector(".lang-menu").classList.toggle("on");
};

/********************검색팝업********************/

// 대상선정: 검색버튼
const search = document.querySelector(".search");
// 대상선정: 검색창
const popSearch = document.querySelector("#top-area .pop-search");
// 대상선정: 닫기버튼
const delBtn = document.querySelector("#top-area .pop-search .del-btn");


//검색아이콘 클릭시 검색창 뜨게
search.onclick = () => {
  popSearch.style.display = 'flex';

};////////click///////////

//닫기버튼 클릭시 검색창 닫게
delBtn.onclick = () => {
  popSearch.style.display = 'none';

};////////click///////////

/****************탭****************/

// 대상선정: 탭버튼
const tabBtn = document.querySelectorAll(".tab li a");
// 대상선정: 탭리스트
const tabList = document.querySelectorAll(".tab-list ul");
// 대상선정: 더보기 버튼
const moreBtn = document.querySelectorAll(".tab-list .more");


//대상확인
// console.log(tabBtn,tabList);

//1. 탭버튼 on넣고 빼기
tabBtn.forEach((ele, idx) => {
  ele.onclick = () => {
    for (let x of tabBtn) {
      x.classList.remove("on");
    }/////////for of//////////
    ele.classList.add("on");

//2. 현재 선택된 탭버튼과 순서가 일치하는 탭리스트에 on넣고 빼기
    for (let x of tabList) {
      x.classList.remove("on");
    }/////////for of//////////
    tabList[idx].classList.add("on");

//3. 현재 선택된 탭버튼과 순서가 일치하는 더보기 버튼에 on넣고 빼기
    for (let y of moreBtn) {
      y.classList.remove("on");
    }/////////for of//////////
    moreBtn[idx].classList.add("on");
  
  };//////click//////////

 

});//////////forEach////////////






/********************탑버튼********************/

const topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => {
  window.scrollTo({top:0, behavior:'smooth'});
};///////click///////////






/****************제품소개 슬라이더(swiper2)****************/

var swiper2 = new Swiper(".swiper-container2", {
  // Autoplay 활성화 및 옵션 설정
  loop: true,
  autoplay: {
    delay: 50000, // 슬라이드 전환 시간 (밀리초)
    disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});


/****************슬라이드 정지/재생 버튼****************/

var play2 = document.querySelector(".swiper-button-play2");
var pause2 = document.querySelector(".swiper-button-pause2");

// 정지버튼 클릭시, 슬라이드 멈추고, 정지버튼이 없어지고, 재생버튼이 나타남
pause2.onclick = function () {
  swiper2.autoplay.stop();
  pause2.style.display = "none";
  play2.style.display = "block";
};

// 재생버튼 클릭시, 슬라이드 가동하고, 정지버튼이 나타나고, 재생버튼이 없어짐
play2.onclick = function () {
  swiper2.autoplay.start();
  pause2.style.display = "block";
  play2.style.display = "none";
};


/***********스크롤 위치 애니메이션*********/

AOS.init(); 




/*배너구역 배경 애니메이션*/ 


  document.querySelectorAll('.bg-con')
  .forEach(ele=>{
    ele.onclick = ()=>{
      ele.classList.toggle('on');
    }; /// click ///
  }); /// forEach ////
