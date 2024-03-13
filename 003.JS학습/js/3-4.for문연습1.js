//3-4.for문연습1 JS

/*
[ 프로그램 요구사항]
1) 미니언즈 넣기
1. 미니언즈 버튼을 클릭하면, 파란박스에 이미지가 추가되어 들어간다.
2. 이때 미니언즈 버튼마다 한번에 들어가는 개수가 정해져 있다.(1개,5개,10개)

대상선정
1. 이벤트 대상: .mini (click이벤트)
2. 변경대상: .mini-space


2) 미니언즈 갯수 표시하기
1. 미니언즈를 넣을때 실시간 반영 개수를 표시한다.
2. 이때 미니언즈 이미지가 3개씩 있으므로 3의 배수로 표시해 준다.

대상선정
1. 이벤트 대상: .mini (click이벤트)
2. 변경대상: .stxt span


3) 파란박스 리셋하기
1. 리셋버튼을 클릭하면 파란박스의 미니언즈 이미지가 모두 삭제된다.
2. 이때 미니언즈 갯수도 0으로 초기화한다.


대상선정
1. 이벤트 대상: .rbtn (click이벤트)
2. 변경대상: .mini-space


*/

//1.대상선정 ////////////
//1-1.이벤트 대상
// (1)미니언즈 버튼 3개
const mini = document.querySelectorAll(".mini");
// (2)리셋버튼
const rbtn = document.querySelector(".rbtn");

// 1-2.변경대상
// (1) 파란박스 내의 미니언즈 들어가는 박스
const Bcase = document.querySelector(".mini-space");
// (2)갯수 출력박스
const stxt = document.querySelector(".stxt span");

// 출력확인
// console.log('대상선정:', mini, rbtn, Bcase, stxt)

//2. 이벤트 속성 셋팅하기
//이벤트 대상에게 click 이벤트와 함수를 연결한다.
//(1) 미니언즈 넣기: 3개 이므로 for문으로 셋팅
//0부터 시작하여 미니언즈 갯수보다 작을때까지 반복
//왜 0부터인가? HTML컬렉션이 0부터 시작함(유사배열)
//mini.length는 HTML컬렉션의 갯수를 리턴함(가져옴)
for (let i = 0; i < mini.length; i++) {
  //대상:mini.item(i) 또는 mini[i]
  mini[i].onclick = insertMini;
  

  //mini[i].addEventListener('click', insertMini);

  // console.log(`
  // for문 내부에 전달된 i변수 값: ${i}
  // \n
  // 순서대로 미니언즈 대상확인: ${mini[i]}
  // `);
} ////for문/////


//(2)리셋버튼 이벤트 함수와 연결하기
//대상: .rbtn -> rbtn 변수
rbtn.onclick = removeMini;


///////3. 기능구현 함수 만들기//////////////////

//함수에서 전역변수로 사용할 미니언즈 갯수 저장 변수
let count = 0;

/*****************************************

함수명: insertMini
기능: 미니언즈 이미지를 박스안에 추가한다.

*****************************************/

function insertMini() {
  //this키워드는 함수에 연결된 요소 자신(.mini)
  //0. 이미지에 셋팅된 'data-num' 속성값 가져오기
  let num = this.getAttribute("data-num");
  //getAttribute(속성명) -> 해당 속성값 읽어오기 내장함수
  //setAttribute(속성명,값) -> 속성값 넣기 내장함수
  //1.함수호출 확인
  //console.log('미니언즈 드루와', this);
  console.log("미니언즈 드루와", num);

  //2.변경대상선정:mini-space -> Bcase변수
  //3.변경내용 적용하기: html넣기
  //+=은 대입연산자(+만 하면 클릭할때마다 미니언즈가 한개씩만 들어감. +=를 사용하면 미니언즈가 더해짐)
  for (let i = 0; i < num; i++) {
    Bcase.innerHTML += `
    <img src="./images/Minions.png" alt="미니언즈 이미지">
    `;

    //미니언즈 이미지 개수 증가하기
    count++;
  } //////////for문/////////////

  //4. 미니언즈 개수 출력하기
  //대상: .stxt span -> stxt변수
  //미니언즈 이미지에 3명의 미니언즈가 있으므로 3을 곱하면 된다.
  stxt.innerText = count*3;


} ///////insertMini////////////
/////////////////////////////////////////////////


/************************************************
 함수명: removeMini
 기능: 리셋 버튼 클릭시 미니언즈 이미지 모두 제거 &
 갯수 초기화
 ************************************************/
// 

function removeMini(){
  //1. 함수호출확인
  console.log('리셋!!',this);
  
  //2. 변경대상: .mini-space -> Bcase변수
  //3. 변경내용: 미니언즈 이미지 삭제
  Bcase.innerHTML = "";
  //innerHTML에 빈 문자값을 할당하여 지움

  //4. 추가변경대상: stxt span -> stxt변수
  //5. 변경내용: 0으로 초기화
  stxt.innerText = 0;
  
  //6. 기존 전역변수 초기화 필요!
  count = 0;

}/////////////removeMini///////////////
/////////////////////////////////////////////////

