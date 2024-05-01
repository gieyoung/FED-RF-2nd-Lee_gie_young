// 06.Event : 리액트 이벤트

import mFn from "./my_function";

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

// 전체 이벤트 적용할 컴포넌트 구성하기
function EventShow() {
  // 컴포넌트 리턴 코드 위에서 이벤트처리를 위한 함수를 만들어서 사용할 수 있다.
  // 지역함수로 사용되는 것임

  // 오버시 이벤트 한번만 실행되게 상태변수 만들기
  let onceSts = false;

  // 1. 컴포넌트 내부함수
  // (1) 소원이 무엇이냐 물어보는 함수
  const showAladin = () => {
    if (onceSts) return;
    onceSts = true; //한번만 실행
    console.log("알라딘이 누구야?");

    // html출력대상: #ala
    let alaBox = mFn.qs("#ala");

    //화면출력
    ReactDOM.render(<img src="./images/ala4.jpg" />, alaBox);

    // 말품선 박스에 글자넣기
    let titBox = mFn.qs(".tit");
    titBox.innerText = "소원을 말해봐~!";
    titBox.style.cssText = `
      width: 50%;
      padding: 50px 0;
      margin: 0 auto;
      border: 2px solid lime;
      opacity: 0;
      color:#fff;
  `;
  // 0.5초 후에 css변경으로 타이틀 등장하기
  setTimeout(() => {
    titBox.style.opacity = "1";
    titBox.style.transition = "2s ease-in-out .5s";
    titBox.style.borderRadius = "50%";
    titBox.style.translate = "0 -200px";
    titBox.style.fontSize = "40px";
    

  }, 500);

//  램프가져오기 보이기
  setTimeout(() => {
    mFn.qsa("button")[0].style.display = "block";
  }, 3000);
  
  }; ///////////////showAladin함수////////////////


  const getLamp = () => {
  console.log("램프가져와");


  }

  //////2. 리턴코드 만들기
  return (
    <React.Fragment>
      <div id="tbox" style={{ textAlign: "center" }}>
        <img
          src="./images/genie.avif"
          alt="지니"
          // 마우스오버시 showAladin함수 호출
          onMouseOver={showAladin}
        />

        <div className="lamp"></div>
        <button>램프가져와</button>
        <button>페라리줘</button>

        {/* 말풍선 박스 */}
        <div className="tit"></div>
      </div>
    </React.Fragment>
  );
} ////////////////////EventShow컴포넌트///////////////

//화면출력
ReactDOM.render(<EventShow />, mFn.qs("#root"));
