$(function(){

// 	//2단메뉴

	$('.gnb').mouseenter(function(){
		$('.depth2').stop().fadeIn(800);

	});

	$('.gnb').mouseleave(function(){
		$('.depth2').stop().fadeOut(800);

	});




// 가로슬라이드

// 반복해서 움직이게 
	setInterval(function(){
	// 맨뒤요소.insertBefore(b(맨앞요소))
	$('.slider ul li:last-child').insertBefore(('.slider ul li:first-child'))
	$('.slider ul').css('margin-top',-300);
	$('.slider ul').animate({'margin-top':0});
},3000)


	//탭

	$('.tab_menu li').click(function(){
		// console.log("클릭");
		var num = $(this).index()
		$('.tab_menu li').removeClass('on');
		$(this).addClass('on');
		// console.log(num);
		$('.con1 .list').hide();
		$('.con1 .list').eq(num).show();
	})

	$('.btn_close').click(function(){
		$('.popup').hide();
		$('.cover').fadeOut();
	})




});

