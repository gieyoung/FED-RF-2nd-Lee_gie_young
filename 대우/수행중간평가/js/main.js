$(document).ready(function(){
	//3번 정답
	var sw = 0;
	$('.btn1').click(function(){
		if(sw==0){
			$('.box1').fadeOut();
			sw = 1;
		}else{
			$('.box1').fadeIn();
			sw = 0;
		}	
	});

	//4번 정답(애니메이트)
	$('.btn2').click(function(){
		console.log("클릭");
		$('.box2').animate({'margin-left':900},500).animate({'margin-left':0},500);

	
	});

	//5번 정답(밑줄)

	$('.menu li').mouseenter(function(){
		$(this).find('span').animate({'width':'100%'},300);

	
	});


	$('.menu li').mouseleave(function(){
		$(this).find('span').animate({'width':'0%'},300);
		});


	//6번 정답
	function multi(a,b){
		var res = a*b;
	return res;
}   
    var num = multi(10,20);
	console.log(num);


	//7번 정답
	num = 0;
	var btn3 = $('.btn3');
	btn3.click(function(){
		num++;
		console.log(num);

		if(num<=10){
			$('.box3').text(num);

		}
		
});

	 //8번 정답
	 $('.loading_bar').animate({'width':'100%'},500,function(){
	 	$(this).animate({'height':'100%'},500).fadeOut();


	 });
 

//9번 정답
    $('.menu li').click(function(test){
    	test.preventDefault();
    	var num = $(this).index();
    	console.log(num);

    	$('.box4').text(num);

    	
    
    })


	



});
	
