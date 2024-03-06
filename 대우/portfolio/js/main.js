


		// 누를때마다 불나오게 

	$(function(){

		$('.quick li').click(function(){
			$(".quick li").removeClass('on');
			$(this).addClass('on');

		});




//해당섹션으로 가면 원형차트가 움직이게

	$(window).scroll(function(){
	
	var num = $(document).scrollTop();
	console.log(num);


    if (num >= 2500) {
            $(".progress-bar").loading();
        }
    });


 //고객이 탭을 클릭하면 그와 연관된 자료만 뜨게 

 $('#all').click(function(){
 	// event.preventDefault();  //탭클릭시 위로 안올라가게
	$('.grid').isotope({ filter: '.grid-item' });
 });

 $('#webde').click(function(){
 	// event.preventDefault();
 	$('.grid').isotope({ filter: '.webde' });
 });

 $('#pho').click(function(){
 	// event.preventDefault();
 	$('.grid').isotope({ filter: '.pho' });
 });

 $('#des').click(function(){
 	// event.preventDefault();
 	$('.grid').isotope({ filter: '.des' });
 });



$('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // percentPosition: true,
  masonry: {
    // use element for option
    columnWidth:270  //박스250에 여백 20 더한값
  }
});



    // 화살표 누르면 첫페이지로 이동

    $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: 0});
    });


    //라이트박스



     $('.grid a').lightBox({
	overlayBgColor:'#000',  
	overlayOpacity: 0.8,
	imageLoading: 'images/lightbox-ico-loading.gif',
	imageBtnClose: 'images/lightbox-btn-close.gif',
	imageBtnPrev: 'images/lightbox-btn-prev.gif',
	imageBtnNext: 'images/lightbox-btn-next.gif',
	containerResizeSpeed: 300,
	txtImage: '작품',
	txtOf: '중에'
   });



     // $('.grid-item a').mouseenter(function(){
     // 		$(this).find(".cover").stop().show();
     // 		$(this).find(".img").stop().show();

     		

     // })


     //  $('.grid-item a').mouseleave(function(){
     // 		$(this).find(".cover").stop().hide();
     // })


      	$(".grid-item a").mouseenter(function(){
				$(this).find(".cover").stop().fadeIn(300);
				

			})


			$(".grid-item a").mouseleave(function(){
				$(this).find(".cover").stop().fadeOut(300);
				

			})

			



});







		





    
       






	
