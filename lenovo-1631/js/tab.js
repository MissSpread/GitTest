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

	
	// 二级菜单
	$(".nav-li").mouseenter(function(){
		$(".all-con").css("display","block");
	});

	$(".nav-li").mouseleave(function(){
		$(".all-con").css("display","none");
	});


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


	$.ajax({
		url:"js/tab.json",
		type:"GET",
		success:function(tab){
			var search = "<em></em>";
			var html = "";
			for(var i = 0; i < tab.length; i++){

				// search-top
				
				for(var j = 1; j < 5; j++){
					if(tab[i].id == j){
						search += '<li><img src ="' + tab[i].img + '"><div class="top-right"><a href="#">' + tab[i].a + '</a><p>' + tab[i].price + '</p></div><span class="span' + j + '"></span></li>';
					}
				}
				$(".search-top").html(search);
				
				


				// goods
				for(var k = 5; k <= 14; k++){
					if(tab[i].id == k){
						html += '<li><a class="goodsimg" href="details.html"><img src="' + tab[i].img + '"><div class="goods-bg"></div></a><a class="title" href="details.html">' + tab[i].a + '<em>' + tab[i].em + '</em></a><p>' + tab[i].p + '</p><h3>商城价 : ' + tab[i].h3 + '</h3><div class="buy"><div class="shop" id="' + k + '">加入购物车</div><div class="col">收藏</div></div></li>'
					}
				}
				$(".goods").html(html);


				// 点击 加入购物车
				$(".shop").click(function(){
					var id = this.id;
					var first = $.cookie("goods") == null ? true : false;
					var same = false; //判断有没有相同的商品
					if(first){
						// 第一次添加cookie  建立cookie的json结构
						$.cookie("goods",'[{id:' + id + ',num:1}]',{expires:7});
					}else{
						var str = $.cookie("goods");
						var arr = eval(str);
						for(var s in arr){
							if(arr[s].id == id){
								arr[s].num++;
								var cookieStr = JSON.stringify(arr);
								$.cookie("goods",cookieStr,{expires:7});
								same = true;
							}
						}

						if(!same){
							var obj = {id:id,num:1};
							arr.push(obj);
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods",cookieStr,{expires:7});
						}
					}
					sc_car();

				});



				// 商品名 购物车 收藏 滑动效果

				$(".title").hover(function() {
					$(this).find("em").css("color","#f00");
				}, function() {
					$(this).find("em").css("color","#7b7b7b");
				});

				$(".shop").hover(function() {
					$(this).css("borderColor","#e72e25");
				}, function() {
					$(this).css("borderColor","#dcdcdc");
				});

				$(".col").hover(function() {
					$(this).siblings('.shop').css("borderRight","0");
					$(this).css("borderLeft","1px solid #e72e25");
					$(this).css("borderColor","#e72e25");
				}, function() {
					$(this).siblings('.shop').css("borderRight","1px solid #dcdcdc");
					$(this).css("borderLeft","0");
					$(this).css("borderColor","#dcdcdc");
				});

			}
		}
	});
});