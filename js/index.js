
$(function(){
	
	//请求网站导航数据
	$.ajax({
		url:'php/subnav.php',
		success:function(d){
			var obj = JSON.parse(d);
			for(var i = 0;i < 32;i ++){
				$ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.zhuti ul').append($ele);
			}
			for(var i = 32;i < 53;i ++){
				$ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.tese ul').append($ele);
			}
			for(var i = 53;i < 75;i ++){
				$ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.aliapp ul').append($ele);
			}
			for(var i = 75;i < obj.length;i ++){
				$ele = `<li>
							<a href="#">
								${obj[i].content}
							</a>
						</li>`;
				$('.tuijian ul').append($ele);
			}
		}
	})
	
	
	//请求二级导航数据
	$.ajax({
		url:'php/subnav.php',
		success:function(d){
			var obj = JSON.parse(d);
			/*$.each(obj,function(index,ele){
				if(index >= 0 && index < 32){
					if(obj[i].highlight == 1){
						$('.subnav_top p').html($('.subnav_top p').html() + ' <a href="#" class="h">'+obj[i].content+'</a>');
					}else{
						$('.subnav_top p').html($('.subnav_top p').html() + ' <a href="#">'+obj[i].content+'</a>');
					}
				}
			})*/
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
			/*for(var i = 0;i < 6;i ++){
				$('.subnav_list img').eq(i).attr('src',obj[i].img);
				$('.subnav_list .subnav_item_title').eq(i).text(obj[i].title);
			}*/
			$.each(obj,function(index,ele){
				$('.subnav_list img').eq(index).attr('src',ele.img);
				$('.subnav_list .subnav_item_title').eq(index).text(ele.title);
			})
		}
	})
	
	$.ajax({
		url:'php/cainixihuan.php',
		success:function(d){
			var obj = JSON.parse(d);
			/*for(var i = 0;i < 6;i ++){
				$('.subnav_list img').eq(i).attr('src',obj[i].img);
				$('.subnav_list .subnav_item_title').eq(i).text(obj[i].title);
			}*/
			var $caini = $('.hotsale_list');
			
				
			for(var i = 0;i < 10;i ++){
				$.each(obj,function(index,ele){
					$item = `<div class="hotsale_item">
								<a href="#">
									<div class="img_wrap">
										<img src="${ele.img}" alt="" />
									</div>
									<h4>
										${ele.title}
									</h4>
								</a>
								<p class="info">
									<span class='price'>
										<em>￥</em><i>${ele.price}</i>
									</span>
									<span class='sales'>
										销量：${ele.sales}
									</span>
								</p>
								<a href="#" class='item_more'>
									<p class="similar"><i class="tb-ifont love"></i>找相似</p>
									<p>发现更多相似的宝贝<span class="tb-ifont"></span></p>
								</a>
							</div>`;
					$caini.append($item);
				})
			}
		}
	})
	
	
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
	
	//鼠标滑过显示二级导航
	var subnavtimer = null;
	$('.main_service_ul li').on('mouseenter',function(){
		var that = this;
		subnavtimer = setTimeout(function(){
			$(that).children('.subnav').stop().fadeIn(150);
			$(that).animate({'backgroundColor':'#ffe4dc','color':'#ff5000'},150).children('a').animate({'color':'#ff5000'},150);
		},100);
		
	}).on('mouseleave',function(){
		clearTimeout(subnavtimer);
		$('.subnav').stop().fadeOut(150);
		$(this).animate({'backgroundColor':'transparent','color':'#666'},150).children('a').animate({'color':'#666'},150);
	})
	
	//轮播图1
	
	var $bannerimg = $('.banner_top .banner_img a');
	var $bannerbtn = $('.banner_top .banner_controls li');
	var index = 0;
	var pindex = 0;
	
	var bannerTimer = setInterval(function(){
		if(pindex == 4){
			index = 0;
		}else{
			index = pindex + 1;
		}
		switchtab();
	},5000);
	
	$('.banner_top').on('mouseenter',function(){
		$('.banner_controls>a').show();
		clearInterval(bannerTimer);
	}).on('mouseleave',function(){
		$('.banner_controls>a').hide();
		bannerTimer = setInterval(function(){
			if(pindex == 4){
				index = 0;
			}else{
				index = pindex + 1;
			}
			switchtab();
		},5000);
	})
	$bannerimg.not($bannerimg.first()).css('left','520px');
	$bannerbtn.on('click',function(ev){
		index = $(this).index();
		switchtab(ev);
	})
	$('.banner_top .left_arrow').on('click',function(ev){
		if(pindex == 0){
			index = $bannerimg.length - 1;
		}else{
			index = pindex - 1;
		}
		switchtab(ev);
	})
	$('.banner_top .right_arrow').on('click',function(ev){
		if(pindex == $bannerimg.length - 1){
			index = 0;
		}else{
			index = pindex + 1;
		}
		switchtab(ev);
	})
	
	function switchtab(ev){
		$bannerbtn.eq(index).addClass('selected').siblings('li').removeClass('selected');
		
		//console.log(index,pindex,ev.target.nodeName);
		
		if((index > pindex && !(index == 4 && pindex == 0 && ev.target.nodeName == 'I')) || (index == 0 && pindex == 4 && (ev == undefined || ev.target.nodeName == 'I'))){
			$bannerimg.eq(pindex).animate({'left':'-520px'},200);
			$bannerimg.eq(index).css('left','520px').animate({'left':'0'},200);
		}else if(index < pindex || (index == 4 && pindex == 0 && ev.target.nodeName == 'I')){
			$bannerimg.eq(pindex).animate({'left':'520px'},200);
			$bannerimg.eq(index).css('left','-520px').animate({'left':'0'},200);
		}
		
		pindex = index;
	}
	
	//天猫轮播图2
	//border-bottom:3px solid #000;
	var $tmallimg = $('.banner_tmall .tmall_img a');
	var index_t = 0;
	var pindex_t = 0;
	
	var tmallTimer = setInterval(function(){
		if(pindex_t == 5){
			index_t = 0;
		}else{
			index_t = pindex_t + 1;
		}
		imgmove();
	},5000);
	
	$('.banner_tmall').on('mouseenter',function(){
		$('.tmall_arrow>a').show();
		clearInterval(tmallTimer);
	}).on('mouseleave',function(){
		$('.tmall_arrow>a').hide();
		tmallTimer = setInterval(function(){
			if(pindex_t == 5){
				index_t = 0;
			}else{
				index_t = pindex_t + 1;
			}
			imgmove();
		},5000);
	})
	$tmallimg.not($tmallimg.first()).css('left','520px');
	$('.tmall_arrow .left_arrow').on('click',function(ev){
		if(pindex_t == 0){
			index_t = 5;
		}else{
			index_t = pindex_t - 1;
		}
		imgmove(ev);
	})
	$('.tmall_arrow .right_arrow').on('click',function(ev){
		if(pindex_t == 5){
			console.log(1);
			index_t = 0;
		}else{
			console.log(2);
			index_t = pindex_t + 1;
		}
		imgmove(ev);
	})
	
	function imgmove(ev){
		$('.tmall_hd ul li').eq(index_t).addClass('selected').siblings('li').removeClass('selected');
		$('.tmall_hd i').text(index_t + 1);
		if(index_t > pindex_t && !(index_t == 5 && pindex_t == 0 && ev.target.nodeName == 'I') || (index_t == 0 && pindex_t == 5 && (ev == undefined || ev.target.nodeName == 'I'))){
			$tmallimg.eq(pindex_t).animate({'left':'-520px'},200);
			$tmallimg.eq(index_t).css('left','520px').animate({'left':'0'},200);
		}else if(index_t < pindex_t || (index_t == 5 && pindex_t == 0 && ev.target.nodeName == 'I')){
			$tmallimg.eq(pindex_t).animate({'left':'520px'},200);
			$tmallimg.eq(index_t).css('left','-520px').animate({'left':'0'},200);
		}
		pindex_t = index_t;
	}
	//轮播效果3
	var num = 0;
	var toutiaotimer = setInterval(function(){
		if(num == 2){
			num = 0;
		}else{
			num ++;
		}
		$('.toutiaowrap').animate({'top':num*(-73)},200);
	},5000)
	
	//tab切换效果
	var $tabbtn = $('.main_notice .notice_hd li');
	var $tabbd = $('.notice_bd ul');
	var tabtimer = null;
	$tabbtn.on('mouseenter',function(){
		var that = this;
		tabtimer = setTimeout(function(){
			$(that).addClass('selected').siblings('li').removeClass('selected');
			$tabbd.eq($(that).index()).show().siblings('ul').hide();
		},200);
		$(this).find('a').css('color','#ff5000');
	}).on('mouseleave',function(){
		clearTimeout(tabtimer);
		$(this).find('a').css('color','#3C3C3C');
	})
	$('.notice_bd ul li').on('mouseover',function(){
		$(this).find('a').css('color',"#ff5000");
	}).on('mouseout',function(){
		$(this).find('a').css('color',"#3c3c3c");
	})
	
	//阿里app二维码效果
	var $app = $('.main_app .apps_nav li');
	$app.on('mouseover',function(){
		$(this).find('.app_qr').show();
	}).on('mouseout',function(){
		$(this).find('.app_qr').hide();
	})
	
	//有好货二维码
	$('.discover_goods .qrcode_box').hover(function(){
		$(this).find('.qrcode').show();
	},function(){
		$(this).find('.qrcode').hide();
	})
	//有好货的背景变色
	$('.goods_list>a').on('mouseenter',function(){
		$(this).animate({'color':'#ff5000'},100).find('.img_wrap img').animate({'opacity':0.8},100)
	}).on('mouseleave',function(){
		$(this).animate({'color':'#3c3c3c'},100).find('.img_wrap img').animate({'opacity':0.9},100)
	})
	//爱逛街的背景变色
	$('.shopping_list>li>a').on('mouseenter',function(){
		$(this).find('.info .subtitle').animate({'color':'#ff5000'},100)
		$(this).find('.img_wrap img').animate({'opacity':0.8},100)
	}).on('mouseleave',function(){
		$(this).find('.info .subtitle').animate({'color':'#3c3c3c'},100)
		$(this).find('.img_wrap img').animate({'opacity':0.9},100)
	})
	//淘抢购的背景色
	$('.qiang_list>li>a').on('mouseenter',function(){
		$(this).find('.info h4').animate({'color':'#ff5000'},100)
		$(this).find('.img_wrap img').animate({'opacity':0.8},100)
	}).on('mouseleave',function(){
		$(this).find('.info h4').animate({'color':'#3c3c3c'},100)
		$(this).find('.img_wrap img').animate({'opacity':0.9},100)
	})
	//时尚爆料王和实惠专业户的效果
	$('.fashion_list>div,.fashion_tanx,.afford_list>div').on('mouseenter',function(){
		$(this).animate({'borderColor':'#ff5000'},100);
	}).on('mouseleave',function(){
		$(this).animate({'borderColor':'transparent'},100);
	})
	
	
	//猜你喜欢的效果
	
	
	$('.hotsale_list').on('mouseenter','.hotsale_item',function(){
		$(this).stop().animate({'borderColor':'#ff5000'},100);
		$(this).find('.item_more').show();
	}).on('mouseleave','.hotsale_item',function(){
		$(this).stop().animate({'borderColor':'transparent'},100);
		$(this).find('.item_more').hide();
	})
	/*$('.hotsale_list').on('mouseover',function(ev){
		if($(ev.target).hasClass('hotsale_item')){
			$(ev.target).on('mouseenter',function(){
				$(ev.target).stop().animate({'borderColor':'#ff5000'},100);
				$(ev.target).find('.item_more').show();
			}).on('mouseleave',function(){
				$(this).stop().animate({'borderColor':'transparent'},100);
				$(this).find('.item_more').hide();
			})//.trigger('mouseenter');
		}
	})*/
	
	//固定头部效果和楼梯效果
	var $alllouti = $('.fixedtool>a');
	var $louti = $('.abc');
	var $louceng = $('.good_goods,.hdzb,.pzts,.afford,.hotsale');
	$(window).on('scroll',function(){
		//console.log($('html,body').scrollTop());
		if($('html,body').scrollTop()>=200){
			$('.fixed_top').show();
		}else{
			$('.fixed_top').hide();
		}
		if($('html,body').scrollTop()>=400){
			$('.fixedtool').css({'position':'fixed','top':'75px'});
		}else{
			$('.fixedtool').css({'position':'absolute','top':'478px'});
		}
		if($('html,body').scrollTop()>=700){
			$('.fixedtool_7').css('display','block');
		}else{
			$('.fixedtool_7').css('display','none');
		}
		$.each($louceng,function(index,ele){
			var stop = $(ele).offset().top;
			if($('html,body').scrollTop()>stop-75){
				$louti.eq(index).addClass('on').siblings('a').removeClass('on');
			}
			
		})
	})
	
	$louti.on('click',function(){
		$(this).addClass('on').siblings('a').removeClass('on');
		var stop = $louceng.eq($(this).index()-1).offset().top -65;
		$('html,body').animate({'scrollTop':stop},200);
	})
	$('.fixedtool_7').on('click',function(){
		$('html,body').animate({'scrollTop':0},200);
	})
})

