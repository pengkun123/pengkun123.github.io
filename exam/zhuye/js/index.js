
$(function(){
	var banner = $('#banner')
	var imgs = $('#banner .banner-img .img');
	var cirs = $('#banner .banner-circle span')
	var timer;
	var next = 0;
	var now = 0;
	var index;
	console.log(imgs.length)
	move();
	var bulletLeft = $('.bullet-left');
	var bulletRight = $('.bullet-right');
	
	/*
			轮播
	*/
	function move(){
		timer = setInterval(function(){
			next++;
			next %=imgs.length ;
			imgs.eq(now).animate({
				opacity:0
			},1000);
			imgs.eq(next).animate({
				opacity:1
			},1000);
			cirs.eq(now).removeClass('active');
			cirs.eq(next).addClass('active');
			
			now = next;
		},2000)
	}
	//鼠标悬停
	banner.on('mouseenter',function(){
		clearInterval(timer);
	});
	// 离开之后继续动画
	banner.on('mouseleave',function(){
		move();
	});
	// 点击小圆点
	// 点击按钮切换图片
	bulletLeft.click(function(){
		next--;
		if(next <0){
			next = imgs.length-1
		}
		imgs.eq(now).animate({
				opacity:0
			},1000);
			imgs.eq(next).animate({
				opacity:1
			},1000);
			cirs.eq(now).removeClass('active');
			cirs.eq(next).addClass('active');
			
			now = next;
	});
	bulletRight.click(function(){
		run();
	})
	// 点击小圆点切换图片
	var index;
	var bannerCircle = $('.banner-circle');
	bannerCircle.on('click','span',function(){
		 next= $(this).index();
		 imgs.eq(now).animate({
				opacity:0
			},1000);
			imgs.eq(next).animate({
				opacity:1
			},1000);
			cirs.eq(now).removeClass('active');
			cirs.eq(next).addClass('active');
			now = next;
		/*imgs.eq(index).animate({
			opacity:1
		},1000)
		imgs.eq(index).siblings().animate({
			opacity:0
		},1000)
		$(this).addClass('active');
		$(this).siblings().removeClass('active');*/
	});
	
	
	/*
	 简单的放大效果；
	*/

		picFirst = $('#main .main-c-l img');
		picSecond =$('#main .main-c-r .top-t .top-t-img');
		picThird =$('#main .main-c-r .top-b .top-b-img');
		
		picFirst.mouseenter(function(){
			picFirst.stop(true).animate({
				width:363,
				height:572,
		
				marginLeft:-15.5,
				marginTop:-26
			},800)
		});
		picFirst.mouseleave(function(){
			picFirst.stop(true).animate({
				width:330,
				height:520,
	
				marginLeft:0,
				marginTop:0
			},800)
		});
		// 鼠标移动上之后向上移动
		picSecond.mouseenter(function(){
			$(this).find('img').stop(true).animate({
				top:-10
			},500)
			
		});
		picSecond.mouseleave(function(){
			$(this).find('img').stop(true).animate({
				top:0
			},500)
		});
		// 鼠标移动到上面进行翻转
		picThird.mouseenter(function(){
			$(this).find('img').stop(true).animate({
				width:0,
				left:145
			},300)
			
		});
		picThird.mouseleave(function(){
			$(this).find('img').stop(true).animate({
				width:290,
				left:0
			},300)
		});
		
		
		
	/*
	 
	简单的鼠标移上变透明度
	*/
		var cImg = $('.c-title .c-l img');
		var cFrist=$('.c-r-t-first img');
		var bFirst = $('.c-r-b-first img');
		cImg.mouseenter(function(){
			cImg.stop(true).animate({
				opacity:0.5
			},700)
		});
		cImg.mouseleave(function(){
			cImg.stop(true).animate({
				opacity:1
			},700)
		});
		cFrist.eq(0).mouseenter(function(){
			cFrist.eq(0).stop(true).animate({
				opacity:0.5
			},700)
		});
		cFrist.eq(0).mouseleave(function(){
			cFrist.eq(0).stop(true).animate({
				opacity:1
			},700)
		});
		cFrist.eq(1).mouseenter(function(){
			cFrist.eq(1).stop(true).animate({
				opacity:0.5
			},700)
		});
		cFrist.eq(1).mouseleave(function(){
			cFrist.eq(1).stop(true).animate({
				opacity:1
			},700)
		});
		bFirst.eq(0).mouseenter(function(){
			bFirst.eq(0).stop(true).animate({
				opacity:0.5
			},700)
		});
		bFirst.eq(0).mouseleave(function(){
			bFirst.eq(0).stop(true).animate({
				opacity:1
			},700)
		});
		bFirst.eq(1).mouseenter(function(){
			bFirst.eq(1).stop(true).animate({
				opacity:0.5
			},700)
		});
		bFirst.eq(1).mouseleave(function(){
			bFirst.eq(1).stop(true).animate({
				opacity:1
			},700)
		});
		
		
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
		console.log(six);
		
		
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
		
		/*
		 纸尿裤的放大
		*/
		// 回头必须用面向对象做
		var specialImg = $('#main .special .special-img')
		var special = $('#main .special-left');
		special.eq(0).mouseenter(function(){
			specialImg.find('img').stop(true).eq(0).animate({
				width:462,
				height:286,
		
				marginLeft:-21,
				marginTop:-13
			},700)
		});
		special.eq(0).mouseleave(function(){
			specialImg.find('img').stop(true).eq(0).animate({
				width:420,
				height:260,
	
				marginLeft:0,
				marginTop:0
			},700)
		});
		special.eq(1).mouseenter(function(){
			specialImg.find('img').stop(true).eq(1).animate({
				width:462,
				height:286,
		
				marginLeft:-21,
				marginTop:-13
			},700)
		});
		special.eq(1).mouseleave(function(){
			specialImg.find('img').stop(true).eq(1).animate({
				width:420,
				height:260,
	
				marginLeft:0,
				marginTop:0
			},700)
		});
		special.eq(2).mouseenter(function(){
			specialImg.find('img').stop(true).eq(2).animate({
				width:462,
				height:286,
		
				marginLeft:-21,
				marginTop:-13
			},700)
		});
		special.eq(2).mouseleave(function(){
			specialImg.find('img').stop(true).eq(2).animate({
				width:420,
				height:260,
	
				marginLeft:0,
				marginTop:0
			},700)
		});
		
		
		
		
		
		
		
		
		
})

			