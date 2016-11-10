$(function(){


	// 购物车的数量
	// 页面刷新的时候，获取购物车内商品的数量
	sc_car();

	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var sc_arr = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_arr){
				sc_num += Number(sc_arr[i].num);
			}
			$(".top_right span").html(sc_num);
		}
	}



	//top-----两个下拉菜单

	//------------社交平台的下拉菜单
	$(".snsLi").mouseenter(function(){
		$(".snsDiv").animate({marginTop:-8,height:245,marginTop:0,top:38},200)
			$(".sns").css("color","#e2231a");
			$(".snsSpan").css("background","url(images/shang.png)");
	});
	$(".snsLi").mouseleave(function(){
		var timer1 = setTimeout(function(){
			$(".snsDiv").stop(true,true).animate({marginTop:-16,height:0,top:36},200);
			$(".snsSpan").css("background","url(images/xia.png)");
		},30);
		$(".sns").css("color","#fff");
		

		$(".snsDiv").mouseenter(function(){
			$(".sns").css("color","#fff");
			clearTimeout(timer1);
		});
		
	});

	$(".snsDiv").mouseleave(function(){
		var timer1 = setTimeout(function(){
			$(".snsDiv").stop(true,true).animate({marginTop:-16,height:0,top:36},200);
			$(".snsSpan").css("background","url(images/xia.png)");
		},30)
		
		$(".snsLi").mouseenter(function(){
			clearTimeout(timer1)
			$(".snsDiv").animate({marginTop:-8,height:245,marginTop:0,top:38},200)
			$(".sns").css("color","#e2231a");
			$(".snsSpan").css("background","url(images/shang.png)");
		});
	});
	

	// ----------手机端的下拉菜单
	
	$(".phoneLi").mouseenter(function(){
	$(".top_phone").animate({height:136,top:38},200)
		$(".top_left_last").css("color","#e2231a");
		$(".phoneSpan").css("background","url(images/shang.png)");
	});
	$(".phoneLi").mouseleave(function(){
		var timer2 = setTimeout(function(){
			$(".top_phone").stop(true,true).animate({height:0,top:36},200);
			$(".phoneSpan").css("background","url(images/xia.png)");
		},30);
		$(".top_left_last").css("color","#fff");
		

		$(".top_phone").mouseenter(function(){
			$(".top_left_last").css("color","#fff");
			clearTimeout(timer2);
		});
		
	});

	$(".top_phone").mouseleave(function(){
		var timer1 = setTimeout(function(){
			$(".top_phone").stop(true,true).animate({height:0,top:36},200);
			$(".phoneSpan").css("background","url(images/xia.png)");
		},30);
		$(".phoneLi").mouseenter(function(){
			clearTimeout(timer1)
			$(".top_phone").animate({height:136,top:38},200)
			$(".top_left_last").css("color","#e2231a");
			$(".phoneSpan").css("background","url(images/shang.png)");
		});
	});


	//nav------------两个下拉菜单

//-----------------爆款 下拉菜单

	$(".hotA").mouseenter(function(){
		$("#hot").css("display","block");
		$("#hot").animate({paddingTop:19,height:271},200)
	});
	$(".hotLi").mouseleave(function(){
		var timer1 = setTimeout(function(){
			$("#hot").stop(true,true).animate({height:0,height:0,paddingTop:0},200,function(){
				$("#hot").css("display","none");
			});
		},30);
		
		$("#hot").mouseenter(function(){
			clearTimeout(timer1);
		});
		
	});

	$("#hot").mouseleave(function(){
		var timer = setTimeout(function(){
			$("#hot").stop(true,true).animate({height:0,height:0,paddingTop:0},200,function(){
				$("#hot").css("display","none");
			});
		},30)
		$(".hotA").mouseenter(function(){
			clearTimeout(timer);
			$("#hot").css("display","block");
			$("#hot").animate({paddingTop:19,height:271},200)
		});
	});



	$(".serveA").mouseenter(function(){
		$("#serve").css("display","block");
		$("#serve").animate({paddingTop:19,height:91},200)
	});
	$(".serveLi").mouseleave(function(){
		var timer1 = setTimeout(function(){
			$("#serve").stop(true,true).animate({height:0,height:0,paddingTop:0},200,function(){
				$("#serve").css("display","none");
			});
		},30);
		
		$("#serve").mouseenter(function(){
			clearTimeout(timer1);
		});
		
	});

	$("#serve").mouseleave(function(){
		var timer = setTimeout(function(){
			$("#serve").stop(true,true).animate({height:0,height:0,paddingTop:0},200,function(){
				$("#serve").css("display","none");
			});
		},30)
		$(".serveA").mouseenter(function(){
			clearTimeout(timer);
			$("#serve").css("display","block");
			$("#serve").animate({paddingTop:19,height:91},200)
		});
	});



//banner-------------------------
//滑入滑出 显示隐藏二级导航

	$(".nav_con").mouseover(function(){
		$(".nav_div").hide();
		$(this).find(".nav_div").show();
	});
	$(".nav_con").mouseout(function(){
		$(".nav_div").hide();
	});
	

//bottom--------------------------
//最底层的语言选择 （地图移入移出）
	$(".china").mouseenter(function(){
		$(".china-con").css("display","block");
	});
	$(".china").mouseleave(function(){
		$(".china-con").css("display","none");
	});



	
/* -------------------     下面是登入窗口  -------------------- */
	var timer;
	//判断有没有 cookie 缓存 (点了自动登录 会自动登录)
	if($.cookie("vol") == "true"){
		if($.cookie("username")){
			$(".port").html("欢迎 " + $.cookie("username"));
		}else if($.cookie("username-p")){
			$(".port").html("欢迎 " + $.cookie("username-p"));
		}
	}

	//  如果没有登录账号  点击登入显示登录页面 
	
	if($(".port").html() == "登录"){

		//点击登录 弹出窗口
		$(".port").click(function(){
			$("#null").css("display","block");
		});

		// 普通登录
		$(".top1").click(function(){
			$(".top1").css("borderColor","#f10000");
			$(".top2").css("borderColor","#000");
			$(".short").css("display","none");
		});

		//账号框聚焦
		$(".txt input").focus(function(){
			clearTimeout(timer)
			//alert($(".option li").eq(0).css("backgroundColor"))
			$(".option").css("display","block");
			var timer = setInterval(function(){
				var inp = $(".txt input").val();
				$(".option li").eq(0).html(inp);
				$(".option li").eq(1).html(inp + "@163.com");
				$(".option li").eq(2).html(inp + "@qq.com");
				$(".option li").eq(3).html(inp + "@126.com");
				$(".option li").eq(4).html(inp + "@sohu.com");
				$(".option li").eq(5).html(inp + "@sina.com");
			},30);
		});


		// 鼠标滑过li选项
		$(".option li").mouseover(function(){
			$(".option").find("li").css("background","#fff");
			$(this).css("background","#ffe57d");
		});

		//鼠标点击选项 改变账号输入框中的value值
		$(".option li").mousedown(function(){
			var lihtml = $(this).html()
			$(".txt input").val(lihtml);
			$(".option").css("display","none");
		});

		//账号输入框的移除焦点事件 判断格式是否正确
		$(".txt input").blur(function(){
			timer = setTimeout(function(){
				$(".option").css("display","none");
			},30)

			var val = $(".txt input").val();
			if(/\d{11}/.test(val) || /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)){
				$(".por").html("");
			}else if(val == ""){
				$(".por").html("账号不能为空");
			}else{
				$(".por").html("账号格式错误");
			}
		});

		//密码框移除焦点事件  判断格式是否正确
		$(".pas input").blur(function(){
			var val = $(".pas input").val();
			if(val != ""){
				if(/^\w{4,}/.test(val)){
					$(".por").html("");
				}else{
					$(".por").html("密码不能小于4位");
				}
			}
		});


		//普通登录窗口的登录按钮
		$(".entry").click(function(){
			var val = $(".txt input").val();
			if(/\d{11}/.test(val) || /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)){
				$(".por").html("");
			}else if(val == ""){
				$(".por").html("账号不能为空");
			}else{
				$(".por").html("账号格式错误");
			}

			var val2 = $(".pas input").val();
			if(val2 != ""){
				if(/^\w{4,}/.test(val2)){
					$(".por").html("");
				}else{
					$(".por").html("密码不能小于4位");
				}
			}
			
			if(val2 == ""){
				$(".por").html("请输入密码");
			}

			if(val != "" && val2 != "" && !$(".por").html()){

				//判断是不是注册的账号密码
				if($.cookie("username") == $(".txt input").val() && $.cookie("password") == $(".pas input").val()){
					$(".port").html("欢迎 " + $(".txt input").val());
					window.location.href = "homepage.html";
					// 判断点没点自动登录的按钮
					if($(".vol input").attr("checked") == "checked"){
						$.cookie("vol","true",{expires:7});
						$("#null").css("display","none");
					}
				}else{
					alert("账号密码错误，请重新输入");
				}

				
				$(".psd").val("");
				$(".pas input").val("");
				

				

			}
		});


		// 点击切换 快捷登入 界面
		$(".top2").click(function(){
			$(".top2").css("borderColor","#f10000");
			$(".top1").css("borderColor","#000");
			$(".short").css("display","block");
		});

		// 快捷登录窗口的账号验证
		$(".txt2 input").blur(function(){
			var val = $(".txt2 input").val();
			if(/^\d{11}$/.test(val)){
				$(".por2").html("");
			}else if(val == ""){
				$(".por2").html("手机号不能为空");
			}else{
				$(".por2").html("手机号格式错误");
			}
		});


		//获取手机验证码
		$(".pas_right").click(function(){
			if($(".pas_right").html() == "获取动态密码"){
				var val = $(".txt2 input").val();
				if(/^\d{11}$/.test(val)){
					$(".por2").html("");
				}else if(val == ""){
					$(".por2").html("手机号不能为空");
				}else{
					$(".por2").html("手机号格式错误");
				}

				var val2 = $(".por2").html();
				if(val2 == ""){
					var num = 60;

					$(".pas_right").html(""+60+"秒后重新获取");
					var timer1 = setInterval(function(){
						num--;
						$(".pas_right").html(""+num+"秒后重新获取");
						if(num == 0){
							$(".pas_right").html("获取动态密码");
							clearInterval(timer1);
						}
					},1000)
					
				}
			}
		});


		//快捷登录页面的登录按钮
		$(".entry2").click(function(){
			var val = $(".txt2 input").val();
			var val2 = $(".psd").val();
			if(val = ""){
				$(".por2").html("账号格式错误");
			}else if(val2 == ""){
				$(".por2").html("请输入密码");
			}else if($(".por2").html() == ""){
				
				$("#null").css("display","none");
				$.cookie("username-2",$(".txt2 input").val(),{expires:7});
				$(".psd").val("");

				//判断点没点 自动登录
				if($(".vol input").attr("checked") == "checked"){
					$.cookie("vol","true",{expires:7});
				}

				$(".port").html("欢迎 " + $(".txt input").val());
				window.location.href = "homepage.html";
			}
		});


		//点右上角	 X  关闭窗口
		$(".close").click(function(){
			$("#null").css("display","none");
			$(".psd").val("");
			$(".pas input").val("");
		});

	}


	//  如果缓存了 cookie  自动登录了  先要退出账号 才能登录
	
	// 点击出现个人信息页面
	if($(".port").html() != "登录"){
		$(".port").click(function(){
			if($.cookie("username-p")){
				$(".uname").html($.cookie("username-p"));
			}else if($.cookie("username")){
				$(".uname").html($.cookie("username"));
			}
			
			$(".quit").css("display","block");
		});
	}

	var time;
	$(".top_right").mouseleave(function(){
		time = setTimeout(function(){
			$(".quit").css("display","none");
		},30);
	});

	$(".quit").mouseenter(function(){
		clearTimeout(time);
	});

	$(".quit").mouseleave(function(){
		$(".quit").css("display","none");
	});

	// 点击退出 清除cookie
	$(".qt").click(function(){
		$(".quit").css("display","none");
		$.cookie("vol",null);
		$.cookie("username",null);
		$.cookie("username-p",null);
		$.cookie("password",null);
		$.cookie("password-p",null);
		$(".txt2 input").val("");
		$(".psd").val("");
		$(".txt input").val("");
		$(".pass").val("");
		$(".port").html("登录");
		window.location.href = "homepage.html";
	});
	


/* ↑↑↑↑↑↑↑↑↑↑↑ ---------- 上面是登录窗口 ---------- ↑↑↑↑↑↑↑↑↑↑↑↑↑ */


/* -------------------    下面是注册窗口  -------------------- */


	// 点击注册 弹出窗口
	$(".enroll").click(function(){
		$(".null").css("display","block");
	});


	//账号验证
	function number (){
		var val = $(".num input").val();
		if(val == ""){
			$(".num p").html("账号不能为空");
		}else if(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)){
			$(".num p").html("");
			$(".iden").css("display","block");  //是邮箱显示图片
			$(".timer").css("display","none");
		}else if(/\d{11}/.test(val)){
			$(".num p").html("");
			$(".timer").css("display","block"); //是手机号获取验证码
			$(".iden").css("display","none");
		}else{
			$(".num p").html("请输入正确格式的帐号");
		}
	}


	$(".num input").blur(function(){
		number()
	});

	//密码验证
	
	function pass(){
		var val2 = $(".pass input").val();
		var hxr = /^\w{8,20}$/;
		var hxr2 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,20}$/;
		if(val2 == ""){
			$(".pass p").html("密码不能为空");
		}else if(hxr.test(val2) == false){
			$(".pass p").html("密码长度8-20位");
		}else if(hxr2.test(val2) == false){
			$(".pass p").html("密码至少包含数字、字母、字符其中的2种");
		}else{
			$(".pass p").html("");
		}
	}



	$(".pass input").blur(function(){
		pass();
	});




	// 确认密码验证
	$(".aff input").blur(function(){
		if($(".pass input").val() != $(".aff input").val()){
			$(".aff p").html("确认密码和密码不一致，请重新输入");
		}else{
			$(".aff p").html("");
		}
	});


	var num = 0; //更换验证码图片
	// 点击换验证码
	$(".iden").click(function(){
		num++;
		if(num > 5){
			num = 0;
		}
		$(".iden img").attr("index",num);
		$(".iden img").attr("src","images/id" + num + ".png");
	});


	//如果账号是手机号码  则获取验证码

	$(".timer").click(function(){
		if($(".timer").html() == "获取验证码"){
			var val = $(".num input").val();
			if(val == ""){
				$(".num p").html("账号不能为空");
			}else if(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val)){
				$(".num p").html("");
				$(".iden").css("display","block");  //是邮箱显示图片
				$(".timer").css("display","none");
			}else if(/\d{11}/.test(val)){
				$(".num p").html("");
				$(".timer").css("display","block"); //是手机号获取验证码
				$(".iden").css("display","none");
			}else{
				$(".num p").html("请输入正确格式的帐号");
			}

			var val2 = $(".num p").html();
			if(val2 == ""){
				var num = 60;

				$(".timer").html(""+60+"秒后重新获取");
				var timer1 = setInterval(function(){
					num--;
					$(".timer").html(""+num+"秒后重新获取");
					if(num == 0){
						$(".timer").html("获取验证码");
						clearInterval(timer1);
					}
				},1000)
				
			}
		}
	});

	var check = 0;
	$(".agree input").click(function(){
		check++;
		if(check % 2 != 0){
			$(".agree input").removeAttr("checked")
		}else{
			$(".agree input").attr("checked","checked")
		}
	});

	// 注册页面的提交按钮
	$(".btn").click(function(){
		var val = $(".num input").val();
		var val2 = $(".pass input").val();
		var val3 = $(".aff input").val();
		var val4 = $('.ident input').val();
		
		// 判断是不是为空
		if(val == ""){
			$(".num p").html("账号不能为空");
		}
		if(val2 == ""){
			$(".pass p").html("账号不能为空");
		}
		if(val4 == ""){
			$(".ident p").html("验证码不能为空");
		}

		// 判断是否同意相关协议
		if($(".agree input").attr("checked") != "checked"){ 
			$(".ident p").html("请确定已阅读相关协议政策");
		}else{
			//判断验证码是否正确
			if($(".iden").css("display") == "block"){
				var arr = ["vg95","p5jl","f58k","jdnz","074j","e3gi"];
				var index = $(".iden img").attr("index");
				if(val4 != arr[index]){
					$(".ident p").html("输入的验证码不对，请重新输入");
				}else{
					$(".ident p").html("");
				}
			}else if($(".timer").css("display") == "block"){
				if(val4 == ""){
					$(".ident p").html("输入的验证码不对，请重新输入");
				}else{
					$(".ident p").html("");
				}
			}
		}	


		number();
	


		if(val != "" && val2 != "" && $(".num p").html() == "" && $(".pass p").html() == "" && $(".aff p").html() == "" && $(".ident p").html() == ""){
			$.cookie("username",$(".num input").val(),{expires:7});
			$.cookie("password",$(".pass input").val(),{expires:7});
			$(".num input").val("");
			$(".pass input").val("");
			$(".aff input").val("");
			$('.ident input').val("");
			$(".null").css("display","none");

		}



	});



	//点右上角	 X  关闭窗口
	$(".xx").click(function(){
		$(".null").css("display","none");
	});





/* ↑↑↑↑↑↑↑↑↑↑↑ ---------- 上面是注册窗口 ---------- ↑↑↑↑↑↑↑↑↑↑↑↑↑ */





})