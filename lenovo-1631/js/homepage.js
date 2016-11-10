$(function(){

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



//ad----------广告的缩小与关闭


	var img = document.getElementById("ad_img");
	$("#X").click(function(){
		$("#ad").animate({height:100},400,function(){
			img.src = "images/ggx.jpg";
			$("#X").css("background","url(images/logo1.png) no-repeat -7px -7px");
			$("#X").click(function(){
				$("#ad").stop().animate({height:0},400,function(){
					$("#ad").css("display","none");
				});
			});
		})
	});
	
	setTimeout(function(){
		$("#ad").animate({height:100},400,function(){
			img.src = "images/ggx.jpg";
			$(".ad_img").css("height","100");
			$("#X").css("background","url(images/logo1.png) no-repeat -7px -7px");
			$("#X").click(function(){
				$("#ad").stop().animate({height:0},400,function(){
					$("#ad").css("display","none");
				});
			});
		})
	},2000);



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


//--------------↓↓↓↓↓↓↓↓↓--------轮播图-------↓↓↓↓↓↓↓↓↓-------------------

// 图片轮播的定时器函数
	var timer_ban;
	
	var b = true;


	function banner (){
		timer_ban = setInterval(function(){
			$(".banLi").first().animate({opacity:0.3},500,function(){
				$(".banLi").first().insertAfter($(".banLi").last());
				$(".banLi").css("opacity","1");
				var o = 6 - ($(".banner").find(".eq0").index())
				if(o == 6){
					o = 0;
				}
				$(".yuan").children().css("background","#383838").removeClass();
				$(".yuan li").eq(o).css("background","#a9a9a9").addClass('ind');
				
			});	
		},3000);
	}
	banner();



// 鼠标滑过 停止轮播
	$(".bancon").hover(function(){
		clearInterval(timer_ban);
	},function(){
		banner();
	});
	$(".banner").hover(function() {
		clearInterval(timer_ban);
	}, function() {
		banner();
	});


// 左箭头 点击效果
	$(".banLeft").click(function(){
		if(b){
			b = false;
			$(".banLi").first().animate({opacity:0.3},500,function(){
				$(".banLi").last().insertBefore($(".banLi").first());
				$(".banLi").last().css("opacity","1");
				var o = 6 - ($(".banner").find(".eq0").index());
				if(o == 6){
					o = 0;
				}
				$(".yuan").children().css("background","#383838").removeClass();
				$(".yuan li").eq(o).css("background","#a9a9a9").addClass('ind');
				b = true;
			});
		}
	});



//右箭头 点击效果
	$(".banRight").click(function(){
		if(b){
			b = false;
			$(".banLi").first().animate({opacity:0.3},500,function(){
				$(".banLi").first().insertAfter($(".banLi").last());
				$(".banLi").last().css("opacity","1");
				var o = 6 - ($(".banner").find(".eq0").index());
				if(o == 6){
					o = 0;
				}
				$(".yuan").children().css("background","#383838").removeClass();
				$(".yuan li").eq(o).css("background","#a9a9a9").addClass('ind');
				b = true;
			});
		}
	});


//鼠标移入圆点效果
	$(".yuan li").mouseenter(function(){
		clearInterval(timer_ban);
		if(b){
			b = false;
			var index = $(this).index();
			var ind = $(".yuan").find(".ind").index();
			
			$(".banLi").first().animate({opacity:0.3},500,function(){
				$(".banner").find("li").css("opacity","1");
				/*$(".yuan li").eq(index).css("background","#9a9a9a");
				$(".yuan li").eq(index).siblings().css("background","#383838");*/
				if(index > ind){
					for(ind; ind < index; ind++){
						$(".eq" + ind + "").insertAfter($(".banLi").last());
					}
					var o = 6 - ($(".banner").find(".eq0").index());
					if(o == 6){
						o = 0;
					}
					$(".yuan").children().css("background","#383838").removeClass();
					$(".yuan li").eq(o).css("background","#a9a9a9").addClass('ind');
				}else if(ind > index){
					for(var num = 0; num < (6 - ind + index); num++){
						$(".banLi").first().insertAfter($(".banLi").last());
					};
					var o = 6 - ($(".banner").find(".eq0").index());
					if(o == 6){
						o = 0;
					};
					$(".yuan").children().css("background","#383838").removeClass();
					$(".yuan li").eq(o).css("background","#a9a9a9").addClass('ind');
				};
				b = true;
			});
		};
	});




//------------↑↑↑↑↑↑↑↑↑↑-------轮播图--------↑↑↑↑↑↑↑↑↑----------------



//banner右面的滚动小广告
	var brttimer;
	function brt (){
		brttimer = setInterval(function(){
			var t = parseInt($(".banrtop-ul").css("top"));
			var h = parseInt($(".banrtop-ul").css("height"));
			if(Math.abs(t - 66) == h){
				$(".banrtop-ul").css("top","0px");
				t = parseInt($(".banrtop-ul").css("top"));
			}
			$(".banrtop-ul").animate({top:t-66},1000);
		},3000);
	};

	brt();

	$(".banner_right_top").hover(function() {
		clearInterval(brttimer);
	}, function() {
		brt();
	});
		



//banner图上左右箭头的淡入淡出------------------
	$(".banner_center").hover(function(){
		$(".bancon").fadeIn();
	}, function() {
		$(".bancon").fadeOut();
	});

	//banner图左右箭头点击效果
	$(".banLeft").click(function(){
		
	});



//recommend ----------------------------

//recommend  ul 图上左右箭头的淡入淡出-------------
	$(".rec_ul").hover(function(){
		$(".recLeft").fadeIn();
		$(".recRight").fadeIn();
	}, function() {
		$(".recLeft").fadeOut();
		$(".recRight").fadeOut();
	});

// recommend ul 图上的左右箭头点击效果
	var rec = true;
	
	//左滑动
	$(".recLeft").click(function(){
		if(rec){
			var left = parseInt($(".rec_ul ul").css("left"));
			rec = false;
			$(".rec_ul ul li").last().insertBefore($(".rec_ul ul li").first());
			$(".rec_ul ul").css("left",left-252);
			$(".rec_ul ul").animate({left:left},1000,function(){
				rec = true;
			})
		}
		
	})

	//右滑动
	$(".recRight").click(function(){
		if(rec){
			rec = false;
			var left = parseInt($(".rec_ul ul").css("left"));
			$(".rec_ul ul").animate({left:left-252},1000,function(){
				$(".rec_ul ul").css("left","0px");
				$(".rec_ul ul li").first().insertAfter($(".rec_ul ul li").last());
				rec = true;
			})
		}
	})
		

//suk上的左右滑动 ------------------------------------

	$(".sukLeft").click(function(){
		if(rec){
			var left = parseInt($("#suk_ul").css("left"));
			rec = false;
			$("#suk_ul li").last().insertBefore($("#suk_ul li").first());
			$("#suk_ul").css("left",left-200);
			$("#suk_ul").animate({left:left},1000,function(){
				rec = true;
			})
		}
	});

	$(".sukRight").click(function(){
		if(rec){
			rec = false;
			var left = parseInt($("#suk_ul").css("left"));
			$("#suk_ul").animate({left:left-200},1000,function(){
				$("#suk_ul").css("left","0px");
				$("#suk_ul li").first().insertAfter($("#suk_ul li").last());
				rec = true;
			})
		}
	})



//第六楼的阴影   6F----------------------------------------
	
	for(var i = 0; i < 6; i++){
		$("#social .con a").eq(i).hover(function(){
			$(this).css("box-shadow","0px 0px 10px 3px #666");
		},function(){
			$(this).css("box-shadow","0px 0px 0px #fff");
		});

	/*第二种方法------------------------
		$(".f6a" + i +"").hover(function(){
			//alert("message")
			$(this).css("box-shadow","0px 0px 10px 5px #666");
		},function(){
			$(this).css("box-shadow","0px 0px 0px #fff");
		});*/
	}
	

})



//  json--------------------------



$(function(){
		$.ajax({
		url:"js/index.json",
		type:"GET",
		success:function(data){
			var sum = 1;
			for(var i = 0; i < data.length; i++){
				if(data[i].id == 0){
					var html = "";
					for(var j = 0; j < data[i].child.length; j++){
						html += "<a href='#'>" + data[i].child[j] + "</a>"
						$("#hot").html(html);
					}
					
				}
				if(data[i].id == 1){
					var html = "";
					for(var j = 0; j < data[i].child.length; j++){
						html += "<a href='#'>" + data[i].child[j] + "</a>"
						$("#serve").html(html);
					}
					
				}

				
				for(var n = 2; n <= 10; n++){
					if(data[i].id == n){
						var html = "";
						var right = "";
						var child = data[i].child;
						var img = data[i].img;
						//alert(child.length)
						for(var j = 0; j < child.length; j++){
							//html1 += child[j].title;
							html += "<dl class='nav_dl'><dt><a href='#'>" + child[j].title + "</a></dt><dd>"
							if(child[j].content){
								for(var k = 0; k < child[j].content.length; k++){
									//alert(child[1].content.length)
									html +=  "<a href='#'>" + child[j].content[k];
									
									//$(".nav1_dl").html(html);
								}
								$("dl").css("height","10");
							}
							html += "</a></dd></dl>";
							//html = child[j].title + html;
						}
						//$(".nav1").html(html);
						html = data[i].title + "<div class='nav_div'><div class='nav_con_left nav_con_left" + (n-1) +"'>" + html + "</div><div class='nav_con_right nav_con_right" + (n - 1) + "'></div></div>"
						$(".nav" + (n-1) + "").html(html);

						if(img){
							for(var l = 0; l < img.length; l++){
								right += "<img src='" + img[l] + "'>"
							}
							$(".nav_con_right" + (n-1) + "").html(right);
						}
						
					}
				}


				if(data[i].id == "banrtop"){
					var html = "";
					var li = data[i].li;
					for(var j = 0; j < li.length; j++){
						html += '<li><a href="#">' + li[j] + '</a></li>'
					}
					html += '<li><a href="#">' + li[0] + '</a></li>'
					$(".banner_right_top ul").html(html);
				}

				
				if(data[i].id == "banner"){
					var html = "";
					var img = data[i].img;
					for(var j = 0; j < img.length; j++){
						html += '<li class="banLi eq' + j + '"><a href="#"><img class="imgg" src="' + img[j] + '" alt=""></a></li>'
					}
					$(".banner").html(html);
				}


				if(data[i].id == "banright"){
					var html = "";
					var child = data[i].child;
					for(var j = 0; j < child.length; j++){
						html += '<a href="#">' + child[j] + '</a>'
					}
					$(".banner_right_bottom").html(html);
				}


				if(data[i].id == "jin"){
					var html = "";
					var img = data[i].img;
					for(var j = 0; j < img.length; j++){
						html += "<li><a href='#'><img src='" + img[j] + "'></a></li>"					
					}
					$(".rec_ul ul").html(html);
				}


				if(data[i].id == "ming"){
					var html = "";
					var con = data[i].content;
					for(var j = 0; j < con.length; j++){
						html += "<li><a class='aImg' href='#'><img src='" + con[j].img + "' alt=''></a><p><p class='title'><a class='aa' href='#'>" + con[j].title + "</a></p><a class='aa introduce' href='#'>" + con[j].introduce +"</a><a class='aa price' href='#'>" + con[j].price + "</a></p></li>"
						
					}
					$("#suk_ul").html(html);

					//suk 鼠标移入效果-------------------------------
					var sukLi = $("#suk_ul li");
					for(var c = 0; c < sukLi.length; c++){
						$("#suk_ul li").eq(c).hover(function() {
							$(this).css("borderTop","1px solid #e2231a");
						}, function() {
							$(this).css("borderTop","1px solid #e6e6e6");
						});
					}
				}

				
				if(data[i].id == "like"){
					var html = "";
					var con = data[i].content;
					for(var j = 0; j < con.length; j++){
						html += "<li><a class='aImg' href='#'><img src='" + con[j].img + "' alt=''></a><p><p class='title'><a class='aa' href='#'>" + con[j].title + "</a></p><a class='aa price' href='#'>" + con[j].price + "</a></p></li>"
						
					}
					$("#like_ul").html(html);
				}

				
				if(data[i].id == "f1"){
					var html = '<div class="len_con_left F_left"><a href="tab.html"><img src="' + data[i].title + '"></a></div><ul class="len_con_right F_right">';
					var con = data[i].content;
					
					for(var j = 0; j < con.length; j++){
						html += '<li><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
					}
					html += "</ul><div class='bg1'></div><div class='bg2'></div>"
					$(".len_con").html(html);
				}

				
				if(data[i].id == "f2"){
					var html = '<div class="think_con_left F_left"><img src="' + data[i].title + '"></div><ul class="think_con_right F_right">';
					var con = data[i].content;
					
					for(var j = 0; j < con.length; j++){
						html += '<li><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
					}
					html += "</ul><div class='bg1'></div>"
					$(".think_con").html(html);
				}


				if(data[i].id == "f3"){
					var html = '<div class="pad_con_left F_left"><img src="' + data[i].title + '"></div><ul class="pad_con_right F_right">';
					var con = data[i].content;
					
					for(var j = 0; j < con.length; j++){
						html += '<li><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
					}
					html += "</ul>"
					$(".pad_con").html(html);
				}

				if(data[i].id == "f4"){
					var html = '<div class="phone_con_left F_left"><img src="' + data[i].title + '"></div><ul class="phone_con_right F_right">';
					var con = data[i].content;
					
					for(var j = 0; j < con.length; j++){
						html += '<li><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
					}
					html += "</ul><div class='bg1'></div><div class='bg2'></div><div class='bg3'></div>"
					$(".phone_con").html(html);
				}

				if(data[i].id == "f5"){
					var html = '<div class="pc_con_left F_left"><img src="' + data[i].title + '"></div><ul class="pc_con_right F_right">';
					var con = data[i].content;
					
					for(var j = 0; j < con.length; j++){
						if(j == 7 || j == 8){
							html += '<li class="pc-li8"><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
						}else{
							html += '<li><a class="fa-img" href="#"><img src="' + con[j].img + '" alt=""></a><a class="fa-a1" href="#">' + con[j].title + '</a><a class="fa-a2" href="#">' + con[j].introduce + '</a><a class="fa-a3" href="#">' + con[j].price + '</a></li>';
						}
						
					}
					html += "</ul><div class='bg1'></div><div class='bg2'></div><div class='bg3'></div><div class='bg4'></div>"
					$(".pc_con").html(html);
				}

				if(data[i].id == "f6"){
					var img = data[i].img;
					var num = 0;
					for(var j = 0; j < img.length; j++){
						num++;
						$(".f6a" + num + "").css("background","url(" + img[j] + ")");
					}
				}
				
				
				for(var k = 11; k < 17; k++){
					if(data[i].id == k){
						var html = "<dt><p>" + data[i].dt + "<p></dt>";
						var dd = data[i].dd;
						for(var j = 0; j < dd.length; j++){
							html += '<dd><a href="">' + dd[j] + '</a></dd>';
						}
						$(".dl" + sum + "").html(html);
						sum++;
					}
				}
				
			}

//各楼层的图片晃动效果 -----------------------------------

			$("li .fa-img img").bind('mouseenter',function(){
				$(this).animate({left:25},"slow");
			});
			$("li .fa-img img").bind('mouseleave',function(){
				$(this).animate({left:15},"slow");
			});
			

		}
	})
})