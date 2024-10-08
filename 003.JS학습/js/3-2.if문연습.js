///3-2.if문연습 JS ////

/*******************************************
 * 함수명: changeImg
 * 기능: 버튼별 스틸컷 변경
 * 원리: 클릭된 버튼 텍스트를 읽어 구분하여 if문을 작성 후 변경할 이미지 경로를 만들어서 실제 이미지 src에 할당하여 이미지를 변경한다.
 ***************************************/

function changeImg() {
  //호출된 요소 자신은 this키워드로 처리한다.
  //0.this키워드를 활용하여 전달된 요소의 버튼 텍스트 읽어오기(구분위해)
  var btnTxt = this.innerText;
  //innerText를 이퀄 오른쪽에 쓰면 요소의 문자데이터를 읽어옴
  //반면 innerText를 왼쪽에 쓰고 오른쪽에 값을 할당하면 값이 설정됨
  //innerHTML도 마찬가지임(태그처리만 다름)

  //1.함수호출확인
  console.log("나야나", btnTxt);

  //2. 버튼별 src이미지 경로 만들기
  //src변수
  var isrc;
  if(btnTxt == "포스터"){
    isrc = "./images/ala1.jpg";
  }//if//
  else if(btnTxt == "장면1"){
    isrc = "./images/ala2.jpg";
  }//else if//
  else if(btnTxt == "장면2"){
    isrc = "./images/ala3.jpg";
  }//else if//
  else if(btnTxt == "장면3"){
    isrc = "./images/ala4.jpg";
  }//else if//
 

  //3. 변경대상: #scene -> scene 변수
  //4. 변경내용: src속성값 바꾸기
  scene.src = isrc;


} ////////////changeImg/////////////////



// [ 이벤트 설정하기]
// 1. 대상선정
// 1-1. 이벤트 대상: .btns
var btns = document.querySelectorAll(".btns");
console.log("버튼들", btns);
// 1-2. 변경대상: #scene
var scene = document.querySelector("#scene");
console.log("대상", btns, scene);


// 1-2. 이벤트 속성 셋팅하기: 이벤트와 함수 연결!
// 이벤트 종류: click
// 이벤트 속성: onclick
btns.item(0).onclick = changeImg;
btns.item(1).onclick = changeImg;
btns.item(2).onclick = changeImg;
btns.item(3).onclick = changeImg;


