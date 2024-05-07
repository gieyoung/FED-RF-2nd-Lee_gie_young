// 07.리액트 : 조건 렌더링  + 리스트 렌더링


// 나의 함수 불러오기
import mFn from "./my_function.js";

// 출력대상: .root
const root = mFn.qsa(".root");

console.log(root);
/**************************************** 
    1. if문을 사용하여 조건부 렌더링하기
    - 리액트에서는 조건부로 구성요소를
    렌더링 할 수 있다!
****************************************/

// 1번 컴포넌트
function MakeDeveloper(){
return <h1>나는 개발자야</h1>
}/////////MakeDeveloper컴포넌트///////////

// 2번 컴포넌트
function LostDeveloper(){
return <h1>개발자가 뭐지?</h1>
}/////////LostDeveloper컴포넌트///////////

// 3번 컴포넌트
function MakeImage({isrc,ialt,itit}){
return <img 
src={isrc} 
alt={ialt} 
title={itit}
/>
}/////////MakeImage컴포넌트///////////

// 메인출력 컴포넌트
// 컴포넌트 내부에서 호출하는 다른 컴포넌트를 보통 서브컴포넌트라고 함
function Developer({isNormal, isrc,ialt,itit}){
if(isNormal){
  return(
    <React.Fragment>
       <LostDeveloper/>
       <MakeImage 
       isrc={isrc} 
       ialt={ialt} 
       itit={itit}/>
    </React.Fragment>
  ); //////////return//////////
}////////if/////////

// 위의 if문 return에 걸리면 아래쪽 return에는 내려오지 않는다.


//리턴 코드 만들기//
return(
  <React.Fragment>
     <MakeDeveloper/>
     <MakeImage 
     isrc={isrc} 
     ialt={ialt} 
     itit={itit}/>
  </React.Fragment>
); //////////return//////////
}////////////Developer컴포넌트///////////

// 이미지경로 배열
const devImg = [
  "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
  "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

// 컴포넌트 호출하기1: 개발자 찍기
// 먼저 가상돔에 컴포넌트 리턴코드를 넣어준다.
ReactDOM.render(<Developer 
isNormal={true}
isrc={devImg[0]}
ialt="개발자 공유"
itit="프론트엔드 개발자 공유입니다."
/>,
root[0]);
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라


// 컴포넌트 호출하기2: 일반인 찍기
// 먼저 가상돔에 컴포넌트 리턴코드를 넣어준다.
ReactDOM.render(<Developer 
isNormal={false}
isrc={devImg[1]}
ialt="일반인 동석"
itit="개발자가 뭐야."
/>,
root[1]);
// ReactDOM.render(어쩌구,저쩌구);
// 어쩌구를 저쩌구에 출력해라


/********************************************** 
    2. if문이 아닌 조건 표현하기
    -> 조건식 && JSX표현식
    조건이 true일때만 && 뒤의 JSX표현식이 출력됨!
**********************************************/

// 개발자의 취향을 알아보자
// 2-1. 제목을 찍기 위한 타이틀 컴포넌트
function SetTitle({title}){
  return <h1>✨개발자가 좋아하는 {title}</h1>
}/////////////SetTitle컴포넌트/////

// 음식리스트
const foods = 
["스파게티","짜파게티","냉면","짜장면","마라탕"];

// 2-2. 반복리스트를 위한 컴포넌트
function FoodList({foodName}){
  return <li>개발자는 {foodName} 좋아해</li>;

}///////////////FoodList컴포넌트////////////

//2-3. 개발자 선호 음식 리스트 출력 컴포넌트
function WishList({wList}){
  //wList - 좋아하는 음식리스트

  // 리턴코드구역
  return(
    <React.Fragment>
       <SetTitle title = "음식"/>
       {
         wList.length > 0 && 
       <div>
        <h2>개발자가 좋아하는 음식은 모두 {wList.length}가지 입니다.</h2>
        <ul>
          {
            wList.map(
              (v) => <FoodList foodName = {v}/>
            )
          }
        </ul>
       </div>   

       }
       {/* 배열값이 0인경우 */}
       {
        wList.length == 0 && 
        <h2>아직 개발자 음식 리스트가 업데이트 되지 않았음</h2>
       }
    </React.Fragment>
  );

}////////WishList컴포넌트/////

// 컴포넌트 출력
ReactDOM.render(<WishList wList={foods}/>,root[2]);