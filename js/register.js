$(function(){
	//请求网站导航数据
	$.ajax({
		url:'php/subnav.php',
		success:function(d){
			var obj = JSON.parse(d);
			for(var i = 0;i < 32;i ++){
				var $ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.zhuti ul').append($ele);
			}
			for(var i = 32;i < 53;i ++){
				var $ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.tese ul').append($ele);
			}
			for(var i = 53;i < 75;i ++){
				var $ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.aliapp ul').append($ele);
			}
			for(var i = 75;i < obj.length;i ++){
				var $ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.tuijian ul').append($ele);
			}
		}
	})
})
