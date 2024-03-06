
$(function(){




	// 누를때마다 불나오게 



		$('.quick li').click(function(){
			$(".quick li").removeClass('on');
			$(this).addClass('on');

		});


		 // 메뉴버튼 클릭시 이동

		$('.m1').click(function(){
			$("body,html").animate({'scrollTop':0},800);
		});
		$('.m2').click(function(){
			$("body,html").animate({'scrollTop':840},800);
		});

		$('.m3').click(function(){
			$("body,html").animate({'scrollTop':1900},800);
		});
		$('.m4').click(function(){
			$("body,html").animate({'scrollTop':2800},800);
		});
		$('.m5').click(function(){
			$("body,html").animate({'scrollTop':3800},800);
		});
		$('.m6').click(function(){
			$("body,html").animate({'scrollTop':6250},800);
		});


 
    
    
    // quick메뉴의 리스트 버튼을 클릭할 때

		$('.quick li').click(function(){
			var num = $(this).index();
			console.log(num);
			if(num==0){
				$('body,html').animate({'scrollTop':0},800);
			}else if(num==1){
				$('body,html').animate({'scrollTop':840},800);
			}else if(num==2){
				$('body,html').animate({'scrollTop':1900},800);
			}else if(num==3){
				$('body,html').animate({'scrollTop':2800},800);
			}else if(num==4){
				$('body,html').animate({'scrollTop':3800},800);
			}else{
				$('body,html').animate({'scrollTop':6250},800);
			}
		});



$(window).scroll(function(){

		//해당위치로 스크롤 내리면 자동으로 불 켜지게
 			var num =$(document).scrollTop();
			console.log(num);

// 스크롤 위치가 지정위치로 가면 불이 켜짐

		if(num>=0 && num<840){
			$('.quick li').removeClass('on');
			$('.quick li').eq(0).addClass('on');
		}else if(num>=840 && num<1900){
			$('.quick li').removeClass('on');
			$('.quick li').eq(1).addClass('on');
		}else if(num>=1900 && num<2800){
			$('.quick li').removeClass('on');
			$('.quick li').eq(2).addClass('on');
		}else if(num>=2800 && num<3800){
			$('.quick li').removeClass('on');
			$('.quick li').eq(3).addClass('on');
		}else if(num>=3800 && num<6120){
			$('.quick li').removeClass('on');
			$('.quick li').eq(4).addClass('on');
		}else if(num>=6120){
			$('.quick li').removeClass('on');
			$('.quick li').eq(5).addClass('on');
	}



		// 헤더가 1칸에서는 안보이고 다른칸에서는 고정으로 생김

		if(num>800){
			$("header").addClass('on');
		}else{
			$("header").removeClass('on');
		}





//스킬바 애니
		if(num>1990){
			$(".bar").addClass('on');
			$(".bar2").addClass('on');
			$(".bar3").addClass('on');
		}else{
			$(".bar").removeClass('on');
			$(".bar2").removeClass('on');
			$(".bar3").removeClass('on');

		}






    });

//포트폴리오 박스 호버
 		
 		$('.port1 .box li').mouseenter(function(){
 			$(this).find('.cover').stop().fadeIn(500);
 		});
 		$('.port1 .box li').mouseleave(function(){
 			$(this).find('.cover').stop().fadeOut(500);
 		});



 	//탭 클릭시 연관된 자료만 뜨게


$('.all').click(function(){
 	// event.preventDefault();  //탭클릭시 위로 안올라가게
	$('.grid').isotope({ filter: '.grid-item' });
 });

 $('.web').click(function(){
 	// event.preventDefault();  //탭클릭시 위로 안올라가게
	$('.grid').isotope({ filter: '.web' });
 });

 $('.mobile').click(function(){
 	// event.preventDefault();
 	$('.grid').isotope({ filter: '.mobile' });
 });



		//팝업

		$('.pop_btn').click(function(){
			$('.pop_up').fadeIn(800);
			$('.pop_cover').fadeIn(800);
			$('header').fadeOut(800);


		});

		$('.close').click(function(){
			$('.pop_up').fadeOut(800);
			$('.pop_cover').fadeOut(800);
			$('header').fadeIn(800);

		});



		//팝업2

		$('.pop_btn2').click(function(){
			$('.pop_up2').fadeIn(800);
			$('.pop_cover').fadeIn(800);
			$('header').fadeOut(800);


		});

		$('.close').click(function(){
			$('.pop_up2').fadeOut(800);
			$('.pop_cover').fadeOut(800);
			$('header').fadeIn(800);

		});


		


		
    }); //끝






    
  

