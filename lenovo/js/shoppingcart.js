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
			if(sc_str){
				// 有cookie 显示 商品结算的界面
				$("#buy").css("display","block");
				$("#cash").css("display","block");
				$("#btn").css("display","block");
				$("#none").css("display","none");

				var arr = eval(sc_str);
				var sc_num = 0;
				var html = "";
				for(var i in arr){
					html += "<li><span class='bg'></span><a href='shoppingcart.html' class='tu'><img src='" + coo[arr[i].id - 1].img + "'></a><a href='shoppingcart.html'>" + coo[arr[i].id - 1].a + coo[arr[i].id - 1].em + "</a><p class='p'>" + coo[arr[i].id - 1].p + "</p><p class='pic'>" + coo[arr[i].id - 1].h3 + "</p><div class='num'><span class='jian'>-</span><span class='n'>" + arr[i].num + "</span><span class='jia'>+</span></div><p class='yuan'>" + coo[arr[i].id - 1].h3 + "</p><div class='dele'><p class='del' index='" + arr[i].id + "'>删除</p><p class='shou'>移入收藏夹</p></div></li>"
				}
				$(".sc-ul").html(html);
			}else{
				$("#buy").css("display","none");
				$("#cash").css("display","none");
				$("#btn").css("display","none");
				$("#none").css("display","block");
			}





			// 点击删除按钮   删除对应商品的 kookie值
			$(".del").click(function(){
				var index = $(this).attr("index");

				//如果没有商品 刷新界面 显示另一个页面
				if($(".sc-ul").html() == ""){
					window.location.href = "shoppingcart.html";
				}


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
			});


			// 点击 数量上的加减号 实现增减商品的功能
			$(".jia").click(function(){
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
				}
			});


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
						var new_cookie = JSON.stringify(arr);
						$.cookie("goods",new_cookie,{expires:7});
					}
				}
			});


			// 点击选中按钮 更换背景图
			$(".bg").click(function(){
				if($(this).attr("name") == "1"){
					$(this).css("background","url(images/shoppingcart/buycart.png) -167px -4px");
					$(this).removeAttr("name");
					
				}else{
					$(this).css("background","url(images/details/logo.png) -99px -9px").attr("name","1");
					// 全选
					if($(".quan").attr("name") == "1"){
						alert("1")
						$(".bg").attr("name","1").css("background","url(images/details/logo.png) -99px -9px");
					}
				}
				
			});
		}
	})

})

$(function(){
	


})
