$(function(){
	// 二级菜单
	$(".nav-li").mouseenter(function(){
		$(".all-con").css("display","block");
	});

	$(".nav-li").mouseleave(function(){
		$(".all-con").css("display","none");
	});


	// 展示图片 下面的分享
	$(".deta-lb h2").mouseenter(function(){
		$(".deta-lb h2 p").css("display","block")
	});
	$(".deta-lb h2").mouseleave(function(){
		$(".deta-lb h2 p").css("display","none")
	});

	$(".tsina").hover(function() {
		$(".tsina").css("background","url(images/details/p11.png) no-repeat")
	}, function() {
		$(".tsina").css("background","url(images/details/p1.png) no-repeat")
	});

	$(".qzone").hover(function() {
		$(".qzone").css("background","url(images/details/p22.png) no-repeat")
	}, function() {
		$(".qzone").css("background","url(images/details/p2.png) no-repeat")
	});

	$(".renren").hover(function() {
		$(".renren").css("background","url(images/details/p33.png) no-repeat")
	}, function() {
		$(".renren").css("background","url(images/details/p3.png) no-repeat")
	});

	$(".weixin").hover(function() {
		$(".weixin").css("background","url(images/details/p44.png) no-repeat")
	}, function() {
		$(".weixin").css("background","url(images/details/p4.png) no-repeat")
	});


	// 手机二维码显示
	$(".app p").hover(function(){
		$(this).css("color","#e72e25");
	},function(){
		$(this).css("color","#6f6f6f");
	});

	$(".app p").click(function(){
		if($(".code").css("display") == "none"){
			$(".code").css("display","block");
			$(this).css("color","#e72e25");
		}else if($(".code").css("display") == "block"){
			$(".code").css("display","none");
			$(this).css("color","#6f6f6f");
		}
	});



	//  Air  选择款式
	$(".air ul li").click(function(){
		$(".air ul li").css("borderColor","#eee");
		$(this).css("borderColor","red");
	});


	// 选择服务
	$(".guan ul li p").mouseenter(function() {
		$(this).css("borderColor","red");
	});
	$(".guan ul li p").mouseleave(function() {
		$(this).css("borderColor","#bbb");
	});

	$(".guan-li2").mouseenter(function() {
		$(".guan-li2").css("height","58px")
		$(".li2-2").css("display","block")
	});
	$(".guan-li2").mouseleave(function() {
		$(".guan-li2").css("height","28px")
		$(".li2-2").css("display","none")
	});

	$(".guan-li3").mouseenter(function() {
		$(".guan-li3").css("height","58px")
		$(".li3-2").css("display","block")
	});
	$(".guan-li3").mouseleave(function() {
		$(".guan-li3").css("height","28px")
		$(".li3-2").css("display","none")
	});


	// 选择服务的点击选中
	$(".guan ul li p").click(function(){
		if($(this).attr("index") != "1"){
			$(this).css("borderColor","red").attr("index","1");
			$(this).unbind("mouseleave")
			
		}else if($(this).attr("index") == "1"){
			$(this).css("borderColor","#bbb");
			$(this).removeAttr("index");
			$(this).bind('mouseleave',function() {
				$(this).css("borderColor","#bbb"); 
			});

		}

		if($(".li2-2").attr("index") == "1"){
			$(this).removeAttr("class");
			$(".guan-li2 p").frist().attr("class","li2-2");
			$(".guan-li2 p").last().insertBefore($(".guan-li2 p").first());

		}
	});



	//   购买数量的加减
	var num = 1;
	$(".mai-jia").click(function(){
		if(num >= 5){
			alert("已经达到最大购买数量")
		}else{
			num++;
		}
		$('.mai-inp').html(num);
	});

	$(".mai-jian").click(function(){
		if(num > 1){
			num--;
		}
		$('.mai-inp').html(num);
	});








});

$(function(){
	$.ajax({
		url:"js/index.json",
		type:"GET",
		success:function(data){
			var sum = 1;
			for(var i = 0; i < data.length; i++){

				//  爆款 
				if(data[i].id == 0){
					var html = "";
					for(var j = 0; j < data[i].child.length; j++){
						html += "<a href='#'>" + data[i].child[j] + "</a>"
						$("#hot").html(html);
					}
					
				}

				//服务
				if(data[i].id == 1){
					var html = "";
					for(var j = 0; j < data[i].child.length; j++){
						html += "<a href='#'>" + data[i].child[j] + "</a>"
						$("#serve").html(html);
					}
					
				}

				//   二级导航
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
								$("dl").css("height","10")
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

				// link
				
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
		}
	});

});



$(function(){
	$.ajax({
		url:"js/details.json",
		type:"GET",
		success:function(de){
			var cobul = "";
			var hot = "";
			var like = "";
			var see = "";
			var max = 1;
			var eq = 0;
			for(var i = 0; i < de.length; i++){

				for(var j = 0; j < 6; j++){
					if(de[i].id == j){
						cobul += "<li><a href='#'><img src='" + de[i].img + "'></a><p>" + de[i].p + "</p><h3><span></span>" + de[i].$ + "</h3></li>"
					}
				}
				$(".cob-ul").html(cobul);

				if(de[i].id == 26){
					var lcul = "";
					for(var k = 0; k < de[i].img.length; k++){
						lcul += "<li><img src='" + de[i].img[k] + "'></li>"
					}
					$(".lc-ul").html(lcul);
					$(".deta-lt").html(lcul);
				}


				for(var l = 6; l < 11; l++){
					if(de[i].id == l){
						hot += "<li><a href='#'><img src='" + de[i].img + "'></a><p class='show-p'>" + de[i].p + "</p><h3 class='price'>" + de[i].$ + "</h3></li>"
					}
				}
				$(".hot-ul").html(hot);

				
				for(var m = 11; m < 17; m++){
					if(de[i].id == m){
						like += "<li><a href='#'><img src='" + de[i].img + "'></a><p class='show-p'>" + de[i].p + "</p><h3 class='price'>" + de[i].$ + "</h3></li>"
					}
				}
				$(".like-ul").html(like);

				for(var n = 17; n < 25; n++){
					if(de[i].id == n){
						see += "<li><a href='#'><img src='" + de[i].img + "'></a><p class='show-p'>" + de[i].p + "</p><h3 class='price'>" + de[i].$ + "</h3><h4>" + de[i].tui + "<span>" + de[i].bai + "</span></h4></li>"
					}
				}
				$(".see-ul").html(see);

				if(de[i].id == 25){
					var show = "";
					for(var o = 0; o < de[i].img.length; o++){
						show += "<img src='" + de[i].img[o] + "'>"
					}
				}
				$(".show-top1-div").html(show);
			
				
			}
			// 商品展示图
			$(".deta-lt li").first().css("zIndex",max);
			$(".lc-ul li").first().css("opacity","1").css("index",eq);
			$(".a-right").click(function(){
				max++;
				eq++;
				if(eq == 7){
					eq = 0
				}
				$(".deta-lt li").eq(eq).css("zIndex",max);
				$(".lc-ul li").css("opacity","0.5").removeAttr('index');
				$(".lc-ul li").eq(eq).css("opacity","1").attr("index",eq);
				if(eq >= 3){
					$(".lc-ul").animate({"left":"-207px"},300)
				}
				if(eq <= 2){
					$(".lc-ul").animate({"left":"0px"},300)
				}
			});
			$(".a-left").click(function(){
				max++;
				eq--;
				if(eq == -1){
					eq = 6
				}
				$(".deta-lt li").eq(eq).css("zIndex",max);
				$(".lc-ul li").css("opacity","0.5").removeAttr('index');
				$(".lc-ul li").eq(eq).css("opacity","1").attr("index",eq);
				if(eq >= 3){
					$(".lc-ul").animate({"left":"-207px"},300)
				}
				if(eq <= 2){
					$(".lc-ul").animate({"left":"0px"},300)
				}
			});

			$(".lc-ul li").click(function(){
				var n = $(this).index();
				max += 7;
				$(".lc-ul li").css("opacity","0.5").removeAttr('index');
				$(this).css("opacity","1").attr("index",n);
				$(".deta-lt li").eq(n).css("zIndex",max);
				if(n >= 3){
					$(".lc-ul").animate({"left":"-207px"},300)
				}
				if(n <= 2){
					$(".lc-ul").animate({"left":"0px"},300)
				}
			});



			// 选件搭售
			// 选择推荐的商品
			$(".cob-ul li h3 span").click(function(){
				if($(this).attr("name")){
					$(this).removeAttr("name");
					$(this).css("background","url(images/details/logo.png) no-repeat -79px -9px")
				}else{
					$(this).attr("name","click")
					$(this).css("background","url(images/details/logo.png) no-repeat -99px -9px")
				}
			});
			
			// 推荐商品的轮播
			// 向右点击
			$(".cobright").click(function(){
				var l = parseInt($(".cob-ul").css("left"))
				if(l <= -675){
					$(".cob-ul").animate({left:0},500);
				}else{
					$(".cob-ul").animate({left:l - 225},500)
				}
			});

			// 点击左侧按钮 向左滑动
			$(".cobleft").click(function(){
				var l = parseInt($(".cob-ul").css("left"));
				if(l >= 0){
					$(".cob-ul").animate({left:-675},500);
				}else{
					$(".cob-ul").animate({left:l + 225},500);
				}
			})

			// 商品详情  配置信息 商品评价 之间的切换
			$(".show-top1").click(function(){
				$(this).siblings().css({"height":"40px","borderTop":"0","color":"#000","background":"none","lineHeight":"40px"})
				$(this).css({"height":"38px","borderTop":"3px solid #e2231a","color":"#e2231a","background":"#fff","lineHeight":"38px"})
				$(".show-top1-div").css("display","block");
				$(".show-top2-div").css("display","none");
				$(".show-top3-div").css("display","none");
			});
			$(".show-top2").click(function(){
				$(this).siblings().css({"height":"40px","borderTop":"0","color":"#000","background":"none","lineHeight":"40px"})
				$(this).css({"height":"38px","borderTop":"3px solid #e2231a","color":"#e2231a","background":"#fff","lineHeight":"38px"})
				$(".show-top1-div").css("display","none");
				$(".show-top2-div").css("display","block");
				$(".show-top3-div").css("display","none");
			});
			$(".show-top3").click(function(){
				$(this).siblings().css({"height":"40px","borderTop":"0","color":"#000","background":"none","lineHeight":"40px"})
				$(this).css({"height":"38px","borderTop":"3px solid #e2231a","color":"#e2231a","background":"#fff","lineHeight":"38px"})
				$(".show-top1-div").css("display","none");
				$(".show-top2-div").css("display","none");
				$(".show-top3-div").css("display","block");
			});

			// 评论中的切换
			$(".ping div").click(function(){
				$(".ping div").css({"color":"#000","background":"#f3f3f3"})
				$(this).css({"color":"#fff","background":"#999"})
				$(".top3-bottom img").attr("src","images/details/hp.png")
			});

			$(".haveimg").click(function(){
				$(".top3-bottom img").attr("src","images/details/tp.png")
			});

		}
	});
});