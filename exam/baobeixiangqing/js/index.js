
$(function(){

	
	
		
	
		/*
		 
		购物栏 
		*/
		var first = $('#arm .first');
		var second = $('#arm .second');
		var third = $('#arm .third');
		var four = $('#arm .four');
		var five = $('#arm .five');
		var imgFirst = $('#arm .img-first');
		var imgThird = $('#arm .img-third');
		var imgFour = $('#arm .img-four');
		var imgFive = $('#arm .img-five');
		var six = $('#arm .six');
		
		
		
		first.mouseenter(function(){
			imgFirst.stop(true).animate({
				right:36,
				opacity:1
			},700);
		});
		first.mouseleave(function(){
			imgFirst.stop(true).animate({
				right:74,
				opacity:0
			},700);
			
		});
		//收藏
		third.mouseenter(function(){
			imgThird.stop(true).animate({
				right:35,
				opacity:1
			},700);
		});
		third.mouseleave(function(){
			imgThird.stop(true).animate({
				right:74,
				opacity:0
			},700);
			
		});
		// 优惠券
		four.mouseenter(function(){
			imgFour.stop(true).animate({
				right:35,
				opacity:1
			},700);
		});
		four.mouseleave(function(){
			imgFour.stop(true).animate({
				right:74,
				opacity:0
			},700);
			
		});
		//二维码
		five.mouseenter(function(){
			imgFive.stop(true).animate({
				right:35,
				opacity:1
			},700);
		});
		five.mouseleave(function(){
			imgFive.stop(true).animate({
				right:74,
				opacity:0
			},700);
			
		});
		// 回到顶部
		$(window).scroll(function(){
			var t = $(this).scrollTop();
			if(t>300){
				six.show();
			}else{
				six.hide();
			}
		});
		six.click(function(){
			$('html,body').animate({
				scrollTop:0
			},300)
		});
		
		
		
		
		
		
		
		
		
})

			