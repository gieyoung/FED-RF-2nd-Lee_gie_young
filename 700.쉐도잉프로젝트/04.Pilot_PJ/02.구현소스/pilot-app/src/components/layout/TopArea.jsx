import React from "react";

// 메뉴 데이터 불러오기
import { gnbData } from "../../js/data/gnb";
import { TotalMenu } from "../modules/TotalMenu";
// 제이쿼리
import $ from "jquery";

function TopArea(props) {
  // 전체메뉴 열기닫기 함수
  const showHideMenu = (e) => {
    // 전체 메뉴대상: .mbox
    $(".mbox").fadeToggle(300);
    //fadeIn() 서서히나타남
    //fadeOut() 서서히사라짐 -> display:none됨
    //fadeToggle() 

    // 햄버거 버튼에 on넣고빼기
    $(e.currentTarget).toggleClass("on")


    // 3. 비디오 재생/멈춤
    // 대상 .bgm
    let bgm = $(".bgm");
    // 햄버거 버튼에 클래스 on있으면 재생, 없으면 멈춤
    // 제이쿼리의 미디어를 선택 후 실제 사용할 때는 
    // get(0)하고 난 후 사용한다.
    $(e.currentTarget).is(".on")?
    bgm.get(0).play(): bgm.get(0).pause();

    // js의 경우
    // document.querySelector(".bgm").play();
    // document.querySelector(".bgm").pause();

  };/////////showHideMenu//////////

  


  // 코드 리턴구역
  return (
    <>
      <div id="top-area">
        <header className="top-area ibx">
          <h1 id="logo">
            <a href="#">
              <img src="/images/main_logo.png" alt="파일럿로고" />
            </a>
          </h1>
          <nav className="gnb">
            <ul>
              <li className="bld">배너순번 li 숨기기</li>
              {gnbData.main.map((v, i) => (
                <li key={i}>
                  <a href="#">{v}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ham" onClick={showHideMenu}>
            <span></span> <span></span> <span></span>
          </div>
          {/* 전체메뉴 컴포넌트 */}
          <TotalMenu />
        </header>
      </div>
    </>
  );
}

export default TopArea;
