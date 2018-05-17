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
	});
	var bstop1 = true;
	var bstop2 = true;
	$('.mobile_input').on('blur',function(){
		var reg = /^1[3,5,6,7,8][\d]{9}$/;
		var phonenum = $(this).val();
		
		if(reg.test(phonenum)){
			$('.notice2').hide();
			$.ajax({
				url:'php/register.php',
				type:'post',
				data:{
					phone:phonenum
				},
				success:function(d){
					if(parseInt(d)){
						$('.notice1').show();
						bstop1=true;
					}else{
						$('.notice1').hide();
						bstop1 = false;
					}
				}
			})
		}else{
			$('.notice2').show();
		}
	})
	$('.password').on('blur',function(){
		if($(this).val() != ''){
			$('.notice3').hide();
			bstop2 = false;
		}else{
			$('.notice3').show();
		}
	})
	$('form').on('submit',function(){
		if(bstop1 || bstop2){
			return false;
		}
	})
})
