$(function(){
	$.ajax({
		url:"js/index.json",
		type:"GET",
		success:function(data){
			var sum = 1;
			for(var i = 0; i < data.length; i++){
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
		url:"js/tab.json",
		type:"GET",
		success:function(coo){
			var sc_str = $.cookie("goods");
			var arr = eval(sc_str);
			if(sc_str){
				
				var sc_num = 0;
				var html = "";
				for(var i in arr){
					html += "<li><span class='bg'></span><a href='shoppingcart.html' class='tu'><img src='" + coo[arr[i].id - 1].img + "'></a><a href='shoppingcart.html'>" + coo[arr[i].id - 1].a + coo[arr[i].id - 1].em + "</a><p class='p'>" + coo[arr[i].id - 1].p + "</p><p class='pic'>" + coo[arr[i].id - 1].h3 + "</p><div class='num'><span class='jian'>-</span><span class='n'>" + arr[i].num + "</span><span class='jia'>+</span></div><p class='yuan'>" + coo[arr[i].id - 1].h3 + "</p><div class='dele'><p class='del' index='" + arr[i].id + "'>删除</p><p class='shou'>移入收藏夹</p></div></li>"
				}
				$(".sc-ul").html(html);	
			}

			// 判断是否购物车内有商品 没有显示去选购的界面
			if($(".sc-ul li").length > 0){
				$("#buy").css("display","block");
				$("#cash").css("display","block");
				$("#btn").css("display","block");
				$("#none").css("display","none");
			}else{
				$("#buy").css("display","none");
				$("#cash").css("display","none");
				$("#btn").css("display","none");
				$("#none").css("display","block");
			}

			// 点击删除按钮   删除对应商品的 kookie值
			$(".del").click(function(){
				var index = $(this).attr("index");

				$(this).parent().parent().remove();
				
				
				// 遍历 cookie 的数组 删除对应下标的元素
				for(var j in arr){
					if(arr[j].id == index){
						arr.splice(j,1);
					}
				}
				// 把删除后的数组对象转换成json格式的字符串 重新给cookie goods赋值
				var new_cookie = JSON.stringify(arr);
				$.cookie("goods",new_cookie,{expires:7});

				//如果没有商品 显示另一个页面
				if($(".sc-ul li").length == 0){
					$("#buy").css("display","none");
					$("#cash").css("display","none");
					$("#btn").css("display","none");
					$("#none").css("display","block");					
				}

			});


			$(".cash-left em").click(function(){
				for(var j = $(".bg").length - 2; j >= 1; j--){
					if($(".bg").eq(j).attr("name") == "1"){
						// 遍历 cookie 的数组 删除对应下标的元素
						var index = $(".bg").eq(j).parent().find(".dele").find(".del").attr("index");

						for(var k = arr.length - 1; k >= 0; k--){
							if(arr[k].id == index){
								arr.splice(k,1);
							}
						}
						// 把删除后的数组对象转换成json格式的字符串 重新给cookie goods赋值
						var new_cookie = JSON.stringify(arr);
						$.cookie("goods",new_cookie,{expires:7});

						$(".bg").eq(j).parent().remove();
						pic();
					}
					if($(".sc-ul li").length == 1){
						$("#buy").css("display","none");
						$("#cash").css("display","none");
						$("#btn").css("display","none");
						$("#none").css("display","block");					
					}
				}

				
			})


			// 点击 数量上的加减号 实现增减商品的功能 价格的增减
			$(".jia").click(function(){
				var index = $(this).parent().parent().find(".del").attr("index");
				var n = parseInt($(this).parent().find(".n").html()) + 1;
				$(this).parent().find(".n").html(n);
				// 找到 父元素的父元素 li 中 删除的 index属性的值（Json中对应ID的值）
				var index = $(this).parent().parent().find(".del").attr("index");
				// 遍历数组 给cookie中对应ID的 num属性 加+1
				for(var j in arr){
					if(arr[j].id == index){
						arr[j].num += 1;
						var new_cookie = JSON.stringify(arr);
						$.cookie("goods",new_cookie,{expires:7});		
					}
					// 改变商品数量   改变商品的总价
					if(arr[j].id == index){
						var sum = coo[arr[j].id - 1].h3
						sum = sum * n;
						$(this).parent().parent().find(".yuan").html(sum + ".00")
					}
					
				}
				pic();
			});

			for(var k in arr){
				if(arr[k].num != "1"){
					if(coo[arr[k].id - 1].id == arr[k].id){
						var sum = coo[arr[k].id - 1].h3
						var n = arr[k].num;
						sum = sum * n;
						$(this).parent().parent().find(".yuan").html(sum + ".00")
					}
				}
				
			}


			$(".jian").click(function(){
				var n = parseInt($(this).parent().find(".n").html()) - 1;
				if(n <= 1){
					n = 1;
				}
				$(this).parent().find(".n").html(n);
				// 找到 父元素的父元素 li 中 删除的 index属性的值（Json中对应ID的值）
				var index = $(this).parent().parent().find(".del").attr("index");
				// 遍历数组 给cookie中对应ID的 num属性 加-1
				for(var j in arr){
					if(arr[j].id == index){
						arr[j].num -= 1;
						if(arr[j].num <= 1){
							arr[j].num = 1
						}
						// 改变商品数量   改变商品的总价
						if(arr[j].id == index){
							var sum = coo[arr[j].id - 1].h3
							sum = sum * n;
							$(this).parent().parent().find(".yuan").html(sum + ".00")
						}
						
					}
				}
				pic();
			});


			function pic (){
				var pic = 0;
				for(var j = 0; j < $(".yuan").length; j++){
					pic += Number($(".yuan").eq(j).html());
				}
				$(".cash-p1 span").html(pic + ".00");
				$(".cash-p3 span").html(pic + ".00");
			}
			pic();

			// 点击选中按钮 更换背景图
			$(".bg").click(function(){
				if($(this).attr("name") == "1"){
					$(this).css("background","url(images/shoppingcart/buycart.png) -167px -4px");
					$(this).removeAttr("name");
					// 判断是否点击全选 
					if($(".quan").attr("name") == null || $(".q").attr("name") == null){
						$(".bg").css("background","url(images/shoppingcart/buycart.png) -167px -4px").removeAttr("name");
					}
				}else if($(this).attr("name") == null){
					$(this).css("background","url(images/details/logo.png) -99px -9px").attr("name","1");
					// 判断是否点击全选
					if($(".quan").attr("name") == "1" || $(".q").attr("name") == "1"){
						$(".bg").css("background","url(images/details/logo.png) -99px -9px").attr("name","1");
					}
				}
				
			});
		}
	})

})
