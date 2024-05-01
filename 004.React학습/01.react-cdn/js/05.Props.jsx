// 05.리액트 Props

// 나의 함수 불러오기
import mFn from "./my_function";

// 자동차정보 불러오기
import { carInfo } from "./car_data";

console.log(carInfo);

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

// 자기차를 소개하는 컴포넌트1 /////////////////
// function IntroCar(props){
function IntroCar({ brand, modelNum }) {
  // props는 컴포넌트 호출시 속성값을 객체로 전달하는것을
  // 받아주는 변수다!(변수명은 자유!)
  // 사용법:  props.속성명
  // 주의: 속성명은 컴포넌트를 호출하는 곳에서
  // 정해진 이름을 똑같이 사용해야함!
  // 명시적으로 변수명을 사용하려면 구조분해할당형식을
  // 사용하면 된다! {변수명,변수명,...}
  // 구조분해할당으로 받을 경우의 장점은
  // 특정 속성명을 지정하는 효과가 있고
  // 몇개의 어떤 속성을 받는지 개발자가 명시적으로 알 수 있다


  // 공통정보 변수에 담기
  let setInfo = carInfo[brand][modelNum];

  return (
    <React.Fragment>
      <h2>나의 차는 {brand}입니다!</h2>
      {/*추가질문 컴포넌트 호출*/}
      <AskMoreInfo 
      model={setInfo.model} 
      color={setInfo.color} 
      opt={setInfo.opt}/>
    </React.Fragment>
  );
} /////////// IntroCar 컴포넌트 ///////////////

/*
[데이터 매칭하기]
1. 자동차 분류명
*/

// 추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트 /////
function AskMoreInfo({model,color,opt}){
  // info는 세부적인 모델정보 객체가 들어온다.
  return (
    <React.Fragment>
      <h2>
       더자세히 말해주세요
      </h2>
      <DetailCarInfo model = {model} color = {color} opt = {opt}/>
  
    </React.Fragment>
  );



} ////////// AskMoreInfo 컴포넌트 ////////////////


// 추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트 /////
function DetailCarInfo({model,color,opt}){
  // info는 세부적인 모델정보 객체가 들어온다.
  return (
    <React.Fragment>
      <h2>
        모델명: {model}
        자동차색: {color}
        입니다.
      </h2>
      {/*이미지출력*/}
      <img src="./images/ray.png" alt="레이" />
    </React.Fragment>
  );



} ////////// DetailCarInfo 컴포넌트 ////////////////




// 전체 자동차 브랜드 소개 컴포넌트 /////////////
function ShowBrandCar({ brand }) {
  return (
    <React.Fragment>
      <h1>당신의 차는 무슨차죠?</h1>
      <IntroCar brand={brand} modelNum={modelNum}/>
    </React.Fragment>
  );
} ////////// ShowBrandCar 컴포넌트 ////////////

// 화면 출력하기 /////////////////
//ReactDOM.render(출력코드,출력대상)
ReactDOM.render(
  <div>
    <ShowBrandCar brand="기아레이" modelNum={2}/>
    <ShowBrandCar brand="기아레이" modelNum={0}/>
    <ShowBrandCar brand="기아레이" modelNum={1}/>
  </div>,
  mFn.qs("#root1")
);
