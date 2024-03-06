$(function(){
	$(window).scroll(function(){
	//num 癰귨옙占쎌꼶�� 占썬끋寃뺞에�살뺍占쏙옙 占쎄쑴�귛첎誘れ뱽 揶쏅쉴�� 癰귨옙占쏙옙
   var num2 = $(document).scrollTop();
   console.log(num2);

   if(num2 >= 0 && num2<=2500){
   $(".progress-bar").loading();
   }   
   });

   $('.scroll').click(function(){
      $('body,html').animate({'scrollTop':0},1000)
   });

   $('#all').click(function(e){
      e.preventDefault();
      $('.grid').isotope({ filter: '.grid_item' });
   });


   $('#all').click(function(e){
		e.preventDefault();
		$('.grid').isotope({filter: '.grid_item'});
	});


   $('#webd').click(function(e){
      e.preventDefault();
      $('.grid').isotope({ filter: '.webd' });
   });
   $('#pho').click(function(e){
      e.preventDefault();
      $('.grid').isotope({ filter: '.pho' });
   });
   $('#des').click(function(e){
      e.preventDefault();
      $('.grid').isotope({ filter: '.des' });
   });




   $('.grid').isotope({
     // set itemSelector so .grid-sizer is not used in layout
     itemSelector: '.grid_item',
     // percentPosition: true,
     masonry: {
       // use element for option
       columnWidth: 270
     }
   });
   $('.imgbox a').lightBox({
	overlayBgColor: '#000',
	overlayOpacity: 0.8,
	imageLoading: 'images/r.gif',
	imageBtnClose:'images/x.gif',
	imageBtnPrev: 'images/prev.gif',
	imageBtnNext: 'images/next.gif',
	containerResizeSpeed: 100,
	txtImage: '�묓뭹',
	txtOf: '以묒쓽'
   });


});