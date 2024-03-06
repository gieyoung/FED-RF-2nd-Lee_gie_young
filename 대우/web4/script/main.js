$(function(){

	//2단메뉴

	$('.gnb li').mouseenter(function(){
		$(this).find('.depth2').stop().slideDown();

	});

	$('.gnb li').mouseleave(function(){
		$(this).find('.depth2').stop().slideUp();

	});




// 가로슬라이드

// 반복해서 움직이게 
	setInterval(function(){
	// 맨뒤요소.insertBefore(b(맨앞요소))
	$('.slider ul li:last-child').insertBefore(('.slider ul li:first-child'))
	$('.slider ul').css('margin-left',-960);
	$('.slider ul').animate({'margin-left':0});
},2000)

});

