// Pilot PJ 전체메뉴 컴포넌트

// 컨텍스트 API호출
import { useContext } from "react";
import { pCon } from "./pCon";

export function TotalMenu(e) {
  // 컨텍스트 사용하기
  const myCon = useContext(pCon);

  // 서브페이지 이동함수
  const goSub = (e) => {
    e.preventDefault();
    e.target.innerText.toLowerCase();
    myCon.setPgName(pgName);
    document.querySelector(".ham").click();
  }; ///////////goSub////////
  // 코드 리턴 //////////////////////
  return (
    <>
      <div className="mbox">
        <video src="./images/disc2018.mp4" loop="loop" muted="muted" className="bgm"></video>
        <nav className="mlist">
          <dl>
            <dt>
              <a href="#" onClick={goSub}>
                MEN
              </a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" onClick={goSub}>WOMEN</a>
            </dt>
            <dd>
              <a href="#">T-SHIRT</a>
            </dd>
            <dd>
              <a href="#">JACKET</a>
            </dd>
            <dd>
              <a href="#">TRAINING WARE</a>
            </dd>
            <dd>
              <a href="#">BEACH WARE</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="#" onClick={goSub}>STYLE</a>
            </dt>
            <dd>
              <a href="#">COLLECTION</a>
            </dd>
            <dd>
              <a href="#">SEASON AD</a>
            </dd>
            <dd>
              <a href="#">STAR &amp; NEWS</a>
            </dd>
            <dd>
              <a href="#">MAIN ITEM</a>
            </dd>
          </dl>
        </nav>
      </div>
    </>
  );
} ///////// TotalMenu 컴포넌트 //////////
