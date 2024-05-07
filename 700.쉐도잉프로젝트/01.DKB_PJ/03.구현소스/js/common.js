// 공통처리 JS - common.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통 처리 데이터 불러오기
import comData from "../data/common_data.js";

// 모듈로 호출된 JS에서는 다른 외부JS를 import로 호출가능!
// import하려는 파일에서 반드시 함수,변수 등을 export해야함!
import slideFn from "./slide.js";

// GNB 메뉴 데이터 불러오기 /////
import gnbData from "../data/gnb_data.js";
console.log(gnbData);

// 콤보박스 데이터 불러오기
import comboData from "../data/combo_data.js";


export default function setElement() {
  // 1.대상선정: #top-area, #ban-area,
  //          #spart-menu, #footer-area
  const topArea = mFn.qs("#top-area");
  const banArea = mFn.qs("#ban-area");
  const spartMenu = mFn.qs("#spart-menu");
  const footerArea = mFn.qs("#footer-area");

  // 2. 코드넣기 ///////
  topArea.innerHTML = comData.topArea;
  banArea.innerHTML = comData.banArea;
  spartMenu.innerHTML = comData.spartMenu;
  footerArea.innerHTML = comData.footerArea;

  // 3. 기능처리 함수 호출하기

  // 3-1. GNB메뉴 만들기 함수 호출!
  makeMenu();

  // 3-2. slideFn 슬라이드 기능함수 호출!
  slideFn();

  // 3-3. bindCombo 하단 콤보박스 바인딩 함수호출
  bindCombo();
} /////////// setElement 함수 ///////////////

// [ GNB메뉴코드 만들기 함수 ] ///////
function makeMenu() {
  // GNB 메뉴 코드 넣기 /////////////////
  // 대상: .gnb
  // 데이터: gnbData는 객체니까 배열용 map()메서드 못씀!
  // 그래서 gnbData를 키배열로 변환해서 사용함!
  // 그리고 이 객체의 key는 상위메뉴 이기도 함!
  // Object.keys(객체) -> 해당객체의 속성명(키) 배열생성!
  console.log(Object.keys(gnbData));

  mFn.qs(".gnb").innerHTML = `
  <ul>
    ${Object.keys(gnbData)
      .map(
        (v) => `
        <li>
          <a href="#">${v}</a>
          ${
            // 서브메뉴 "없음"이면 빈값
            // 아니면 서브메뉴 출력!
            // gnbData[키] -> 값을 가져옴!
            gnbData[v] == "없음"
              ? ""
              : `
            <!-- 서브메뉴 -->
            <div class="smenu">
              <div class="swrap">
                <h2>${v}</h2>
                <ol>
                ${gnbData[v]
                  .map(
                    (vSub) => `
                      <li>
                        <a href="#">${vSub}</a>
                      </li>          
                    `
                  )
                  .join("")}
                </ol>
              </div>
            </div>
            `
          }
        </li>
      `
      )
      .join("")}
  </ul>
    
`;
} ////////// makeMenu 함수 //////////

// 콤보박스 바인딩 함수 
function bindCombo(){
 // 1. 대상선정: #brand, #corp
 const brandBox = document.querySelector("#brand");
 const corpBox = document.querySelector("#corp");

 console.log("콤보바인딩",brandBox,corpBox);

 // 2. 데이터 바인딩 하기
 // 2-1. #brand에 데이터 바인딩
 brandBox.innerHTML = 
 `<option value = "init">브랜드 바로가기</option>` + 
 comboData.brand.map((v,i)=>`<option value = "brand${i+1}">${v}</option>`).join("");


 // 2-2. #corp에 데이터 바인딩
 const corpData = Object.keys(comboData.corp);
 console.log("배열",corpData);


 corpBox.innerHTML = 
 `<option value = "init">계열사 바로가기</option>` + 
 corpData.map((v,i) => `
 <optgroup label="${v}">
 ${
  // 해당 객체의 값은 키배열값과 매칭
 comboData.corp[v].map((ov,oi) => `
 <option value="corp${i+1}-${oi+1}">${ov}</option>
 
 `).join("")
 }
 </optgroup>
 `).join("");

 // 3. 선택박스 선택변경시 링크 이동하기
 // 3-1. 브랜드 바로가기 링크 이동하기
 // 대상: brandBox
 // 이벤트: change
 brandBox.addEventListener("change", openWindow);
   
 // 3-2. 계열사 바로가기 링크 이동하기
 // 대상: corpBox
 // 이벤트: change
 corpBox.addEventListener("change", openWindow);
   








}/////bindCombo함수/////////

// 링크이동함수
function openWindow(){
// 1. 현재 나 자신의 아이디는?
console.log(this.id);

// 0. 옵션값이 init일 경우 
//if(this.value == "init") return;
// 1. 이동할 주소
let url = comboData[this.id+"Link"][this.value];
console.log(this.value);
// 만약 데이터가 없으면?


// 2. 주소로 이동하기
// 새창열기: window.open(이동할 주소)
 if(url) window.open(url);

}//////////openWindow함수//////////
