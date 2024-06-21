// 05.리액트변수 : useRef

/******************************************************** 
☑️ useRef
1. 특정 DOM 선택할때 주로 쓰이며 
.current 프로퍼티로 전달된 인자로 
초기화된 변경 가능한 ref 객체를 반환한다. 

-> 예) <참조할요소/컴포넌트 ref="useRef사용변수명" .../>
-> ref속성에 값으로 설정된 useRef변수를 써준다!
이변수에 담긴 요소를 사용할 수 있다! -> 변수명.current

2. 그밖에 컴포넌트가 리랜더링 되어도 변경되어서는
안되는 변수의 값이 있다면 useRef를 사용하여 일정값을 유지함!

반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다.

const myRef = useRef(null);
********************************************************/

let what = "난뭐임?";

// 메인 컴포넌트
function MainComp() {
  console.log("컴포넌트 랜더링");
  // 이름 상태관리 변수
  const [stsName, setStsName] = React.useState("공유");
  let varName = "김수현";

  const refName = React.useRef("송새벽");

  React.useEffect(() => {
    let ele = document.querySelectorAll(".name");
    ele[1].innerText = varName;
    ele[2].innerText = refName.current;

    console.log("useState랜더링:", stsName);
  });

  // 이름바꾸기 함수
  const changeName = (e) => {
    let txt = e.target.innerText;
    let val = e.target.previousElementSibling.value;
    switch (txt) {
      case "이름바꿔 : useState":
        console.log("useState변경전:", stsName);
        setStsName(val);
        console.log("useState변경후:", stsName);
        break;
      case "이름바꿔 : let":
        console.log("let변경전:", varName);
        varName = val;
        console.log("let변경후:", varName);
        break;
      case "이름바꿔 : useRef":
        console.log("useRef변경전:", refName.current);
        refName.current = val;
        console.log("useRef변경후:", refName.current);
        break;
      case "이름바꿔 : outside":
        console.log("outside변경전:", what);
        what = val;
        console.log("outside변경후:", what);
        break;
    }
  };

  // 코드리턴 /////////////////
  return (
    <React.Fragment>
      <h1>[ 🚩useRef 변수사용하기🚩 ]</h1>
      <div className="wrap">
        <div>
          <h1>
            1. useState 출력
            <br />
            <b>
              나는 <span className="name">{stsName}</span> 좋아해!
            </b>
          </h1>
          <h1>
            2. let 출력
            <br />
            <b>
              나는 <span className="name">{varName}</span> 좋아해!
            </b>
          </h1>
          <h1>
            3. useRef 출력
            <br />
            <b>
              나는 <span className="name">{refName.current}</span> 좋아해!
            </b>
          </h1>
          <h1>
            4. 바깥 let 출력
            <br />
            <b>
              나는 <span className="name">{what}</span> 좋아해!
            </b>
          </h1>
        </div>
        <div>
          <h2>1. useState 이름변경</h2>
          <input type="text" className="ip-name1" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : useState</button> <br />
          <h2>2. let 이름변경</h2>
          <input type="text" className="ip-name2" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : let</button> <br />
          <h2>3. useRef 이름변경</h2>
          <input type="text" className="ip-name3" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : useRef</button>
          <h2>4. 바깥let 이름변경</h2>
          <input type="text" className="ip-name3" /> &nbsp;
          <button onClick={changeName}>이름바꿔 : outside</button>
        </div>
      </div>
    </React.Fragment>
  );
} ///////////// MainComp 컴포넌트 ////////////

// 컴포넌트 출력하기 ///////
ReactDOM.render(<MainComp />, document.querySelector("#root"));
