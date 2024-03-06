$(function(){



// 가로슬라이드

// 반복해서 움직이게 
	setInterval(function(){
	// 맨뒤요소.insertBefore(b(맨앞요소))
	$('.slider ul li:last-child').insertBefore(('.slider ul li:first-child'))
	$('.slider ul').css('margin-left',-960);
	$('.slider ul').animate({'margin-left':0});
},3000)





// 세로 슬라이드

	setInterval(function(){
	// 맨뒤요소.insertBefore(b(맨앞요소))
	$('.slider2 ul li:last-child').insertBefore(('.slider2 ul li:first-child'))
	$('.slider2 ul').css('margin-top',-429);
	$('.slider2 ul').animate({'margin-top':0});
},3000)





});




	
