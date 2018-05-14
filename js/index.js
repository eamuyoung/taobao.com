
$(function(){
	//搜索框tab切换
	$('.search_tab li').on('click',function(){
		$(this).addClass('selected').siblings('li').removeClass('selected');
	})
	//搜索框输入占位符
	$('.search_input').on('input',function(){
		if($(this).val() != ''){
			$('.search_panel_fields i').hide().siblings('.search_placeholder').hide();
		}else{
			$('.search_panel_fields i').show().siblings('.search_placeholder').show();
		}
	})
	//点击关闭广告
	$('.qrcode_close').on('click',function(){
		$('.header_qrcode').hide();
	})
	//请求二级导航数据
	$.ajax({
		url:'php/subnav.php',
		success:function(d){
			var obj = JSON.parse(d);
			for(var i = 0;i < 32;i ++){
				if(obj[i].highlight == 1){
					$('.subnav_top p').html($('.subnav_top p').html() + ' <a href="#" class="h">'+obj[i].content+'</a>');
				}else{
					$('.subnav_top p').html($('.subnav_top p').html() + ' <a href="#">'+obj[i].content+'</a>');
				}
				//$('<a href="#"></a>').text(obj[i].content).appendTo($('.subnav_top p'));
			}
			for(var i = 32;i < 65;i ++){
				if(obj[i].highlight == 1){
					$('.subnav_mid p').html($('.subnav_mid p').html() + ' <a href="#" class="h">'+obj[i].content+'</a>');
				}else{
					$('.subnav_mid p').html($('.subnav_mid p').html() + ' <a href="#">'+obj[i].content+'</a>');
				}
			}
			for(var i = 65;i < obj.length;i ++){
				if(obj[i].highlight == 1){
					$('.subnav_bot p').html($('.subnav_bot p').html() + ' <a href="#" class="h">'+obj[i].content+'</a>');
				}else{
					$('.subnav_bot p').html($('.subnav_bot p').html() + ' <a href="#">'+obj[i].content+'</a>');
				}
			}
		}
	})
	//请求二级导航侧边栏数据
	$.ajax({
		url:'php/subnavright.php',
		success:function(d){
			var obj = JSON.parse(d);
			for(var i = 0;i < 6;i ++){
				$('.subnav_list img').eq(i).attr('src',obj[i].img);
				$('.subnav_list .subnav_item_title').eq(i).text(obj[i].title);
			}
			
		}
	})
	//鼠标滑过显示二级导航
	var subnavtimer = null;
	$('.main_service_ul li').on('mouseenter',function(){
		var that = this;
		subnavtimer = setTimeout(function(){
			$('.subnav').stop().fadeIn(200);
			$(that).animate({'backgroundColor':'#ffe4dc','color':'#ff5000'},200).find('a').animate({'color':'#ff5000'},200);
		},200);
		
	}).on('mouseleave',function(){
		clearTimeout(subnavtimer);
		$('.subnav').stop().fadeOut(200);
		$(this).animate({'backgroundColor':'#fff','color':'#666'},200).find('a').animate({'color':'#666'},200);
	})
	
})

