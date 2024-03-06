// 시계

$(function(){
	function time(){


	//시스템의 날짜와 시간을 객체생성하여 date변수에 기억시킴
	

	//날짜

	var date = new Date();
	console.log(date);

	// 시간
	var hour = date.getHours()
	console.log(hour);

	//분
	var min = date.getMinutes()
	console.log(min);


	//초
	var sec = date.getSeconds()
	console.log(sec);


	//미리초
	var msec = date.getMilliseconds()
	var msec = Math.floor(msec/10) //두자리수만 나오게 
	console.log(msec);
	
//두자리수만 나오게

	function digit(n){
		if(n<10){  //한자리수
			n="0"+n
			return n;
			

		}else{
			return n;
			
		}
}

	
	var newHour = digit(hour)
	var newMin = digit(min)
	var newSec = digit(sec)
	var newMsec = digit(msec)

	$('.time .hour').text(newHour);  //화면 시계에 시간들어감
	$('.time .min').text(newMin);   //화면 시계에 분 들어감
	$('.time .sec').text(newSec);   //화면 시계에 초 들어감
	$('.time .msec').text(newMsec);   //화면 시계에 미리초 들어감
	
}
	//0.1초마다 시간 가는거 보이게

    setInterval(function(){
                    time(); 
                },10);

});