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
 
 		登录页面的两个转换
 	*/
 	var registerNav = $('.register .register-right .register-nav');
 	var registerOne = $('.register .register-right .register-one');
 	var registerTwo = $('.register .register-right .register-two');
 	registerNav.on('click','li',function(){
 		$(this).siblings().removeClass('current');
 		$(this).addClass('current');
 		
 	})
 	registerNav.children().first().click(function(){
 		
 		registerOne.show();
 		registerTwo.hide();
 	});
 	registerNav.children().last().click(function(){
 		registerOne.hide();
 		registerTwo.show();
 	})
 	// 登录页面的显示
 	var IDInput = $('.register .register-right .register-one .register-ID input')
 	var registerID = $('.register .register-right .register-one .register-ID ');
 	var registerPassword = $('.register .register-right .register-one .register-password')
 	var passwordInput = $('.register .register-right .register-one .password-input')
 	var IDError = $('.ID-error');
 	var passwordError = $('.password-error')
	var reg = /^[1][358][0-9]{9}$/
	var reg1=/^[0-9_a-zA-Z]{6,20}$/
 	/*registerID.on('focus','input',function(){
 		
 	})
*/

	
	
	var content = "";
	IDInput.focus(function(){
		var valueID = IDInput.val();
		registerID.css({
			border:'2px solid #999'
		})
		content="";
		IDError.html(content);
		
	});
	IDInput.blur(function(){
		var valueID = IDInput.val();
		registerID.css({
			border:'2px solid #ed0e8d'
		})
		if(valueID == ""){
			content = "请输入手机号!";
			IDError.html(content);
		}else if(!reg.test(valueID)){
			content ="输入的手机号格式有误!"
			IDError.html(content);
		}
	});
	passwordInput.focus(function(){
		var password = passwordInput.val();
		registerPassword.css({
			border:'2px solid #999'
		})
		content="";
		passwordError.html(content);
	});
	passwordInput.blur(function(){
		var password = passwordInput.val();
		registerPassword.css({
			border:'2px solid #ed0e8d'
		})
		if(password == ""){
			content = "您输入的为空，请重新输入";
			passwordError.html(content);
		}else if(!reg1.test(password)){
			content ="您输入的验证码有误！"
			passwordError.html(content);
		}
	});






