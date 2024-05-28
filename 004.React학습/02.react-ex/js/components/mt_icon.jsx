// 산이름 타이틀 옆에 출력할 아이몬 이미지 생성 컴포넌트

const isrc = {
  "에베레스트산":'https://cdn-icons-png.freepik.com/512/2036/2036196.png',
  "백두산":'https://www.svgrepo.com/show/2207/mountain.svg',
  "후지산":'https://icon2.cleanpng.com/20240109/ct/transparent-icon-mountain-snow-capped-peaks-bright-orange-sun-minimalist-image-of-mountain-sun-and-1710930048130.webp',
};



export default function mtIcon({mtName}) {
  // mtName 산이름 변수


  React.useEffect(()=>{
    // console.log("산 아이콘이 랜더링 되엇습니까");

    return(()=>{
      console.log("산 아이콘은 소멸한다");
    });
  },[]); 

  return <img src={isrc[mtName]}
  alt={mtName+" 아이콘"} style={{ width: "100px", verticalAlign: "middle", marginLeft: "20px" }} />;
} //////////mtIcon컴포넌트//////////////
