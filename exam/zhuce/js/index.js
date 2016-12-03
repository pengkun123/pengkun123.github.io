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
			if(t>100){
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
		
 	
 	// 登录页面的显示
 	var IDInput = $('.ID-input')
 	var registerID = $('.register-ID ');
 	var registerPassword = $('.register .register-right .register-one .register-password')
 	
 	var IDError = $('.ID-error');
 	var passwordError = $('.img-error')
 	var passwordInput = $('.password-input')
	var reg = /^[1][358][0-9]{9}$/
	var reg1=/^[0-9_a-zA-Z]{6,20}$/

	
	console.log(registerID)
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
/*	passwordInput.focus(function(){
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
	});*/
	 
	// 生成验证码
	var num = $('.number');
	var con;
	
	var con1 = parseInt(Math.random()*9);
	var con2 = parseInt(Math.random()*9);
	var con3 = parseInt(Math.random()*9);
	var con4 = parseInt(Math.random()*9);
	con = (""+con1+con2+con3+con4)
		console.log(con);
		num.html(con);
	passwordInput.focus(function(){
		imgError.html(' ')
		
	
		var con1 = parseInt(Math.random()*9);
		var con2 = parseInt(Math.random()*9);
		var con3 = parseInt(Math.random()*9);
		var con4 = parseInt(Math.random()*9);
		con = (""+con1+con2+con3+con4)
		num.html(con);
	});

	var passwordInput = $('.password-input')
	
	var imgError = $('.img-error');
	passwordInput.blur(function(){
		var val = passwordInput.val();
		if(val == con){
			imgError.html('输入正确')
			return;
		}
		imgError.html('输入bu正确')
	})
	
	
	
	
	/*passwordInput.blur(function(){
			if(val == con){
			imgError.html('输入正确');
		}else{
			imgError.html('输入不正确，请重新输入');
		}
	})*/
	
	
})
