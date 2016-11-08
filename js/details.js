$(function(){
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

});