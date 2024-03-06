const 
      on = 'on',
      off = 'off',
      depth1_gnb = $('.depth1_gnb'),
      depth2_gnb = $('.depth2_gnb'),
      btn_menu = $('.btn_menu'),
      util_li = $('.util li')
      ;

let i, ii, iii, num
;

$(function(){
   depth1_gnb.mouseenter(function(){
      i = $(this).index();
      if(i == 3) {

      } else {
         depth2_gnb.eq(i).stop().slideDown(400);
      }
   });
   depth1_gnb.mouseleave(function(){
      i = $(this).index();
      depth2_gnb.eq(i).stop().slideUp(400);
   });
});

$(function(){
   util_li.mouseenter(function(){
      i = $(this).index();
      if(util_li.eq(i).find('i').hasClass("far")) {
         util_li.eq(i).find('i').removeClass('far').addClass('fas');
      } 
   })

   util_li.mouseleave(function(){
      util_li.find('i').removeClass('fas').addClass('far')
   })
   let sw = 1;
   btn_menu.click(function(e){
      if(sw) {
         e.preventDefault();
         btn_menu.addClass(on).removeClass(off);
         sw = 0;
      } else {
         btn_menu.addClass(off).removeClass(on);
         sw = 1;
      }
   });
})