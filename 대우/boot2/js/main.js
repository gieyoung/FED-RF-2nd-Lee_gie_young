$(function(){
	$('#slider').rbtSlider({
      'height': '100vh', //carousel height
      'dots': true, //dot controls
      'arrows': true, //arrow controls
      'auto': 3 //autoplay time in seconds
   });

	$('#gnb li a').click(function(){
		$('#gnb li a').removeClass('on');
		$(this).addClass('on');
	});
	$(".progress-bar").loading();
});