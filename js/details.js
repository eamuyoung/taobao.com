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
	//logo导航效果
	$('.header_market_hd').on('mouseenter',function(){
		$('.header_market_bd').css('visibility','visible').animate({'height':'576px'},200);
	}).on('mouseleave',function(){
		$('.header_market_bd').animate({'height':'0'},200,function(){
			$(this).css('visibility','hidden')
		});
	})
	//放大镜效果
	var $smallpic = $('.details_mainpic');
	var $bigpic = $('.bigscale img');
	var $smallscale = $('.smallscale');
	var $bigscale = $('.bigscale');
	var $piclist = $('.details_thumb li')
	$smallpic.on('mouseenter',function(){
		$smallscale.show();
		$bigscale.show();
		$('.zoom-icon').hide();
	}).on('mouseleave',function(){
		$smallscale.hide();
		$bigscale.hide();
		$('.zoom-icon').show();
	}).on('mousemove',function(ev){
		var x = ev.pageX - $smallpic.offset().left - 100;
		var y = ev.pageY - $smallpic.offset().top - 100;
		if(x < 0){
			x = 0;
		}else if(x > 200){
			x = 200;
		}
		if(y < 0){
			y = 0;
		}else if(y > 200){
			y = 200;
		}
		$smallscale.css({'left':x,'top':y});
		$bigpic.css({
			'left':-x*2,
			'top':-y*2
		})
	})
	
	$piclist.on('mouseenter',function(){
		$(this).addClass('selected').siblings('li').removeClass('selected');
		$smallpic.find('a img').attr('src',$(this).find('img').attr('src'));
		$bigpic.attr('src',$(this).find('img').attr('src'));
	})
	
	//选择商品数量
	
	var $reduce = $('.goumai_amount .details_reduce');
	var $increase = $('.goumai_amount .details_increase');
	var $count = $('.goumai_amount .tb-text');
	$reduce.on('click',function(){
		var count = $count.val();
		if(count == 1){
			count = 1;
		}else if(count == 2){
			$count.val(--count);
			$(this).addClass('details_reduce_disabled');
		}else{
			$count.val(--count);
		}
	})
	$increase.on('click',function(){
		var count = $count.val();
		$count.val(++count);
		$reduce.removeClass('details_reduce_disabled');
	})
	$count.on('input',function(){
		//console.log(typeof($count.val()))
		var $num = parseInt($count.val())
		if($num<=0){
			$count.val(1);
		}else{
			$count.val($num);
		}
		if($count.val() == 1){
			$reduce.addClass('details_reduce_disabled');
		}
	})
	
	//加入购物车效果
	
	var $addcart = $('.goumai_action .btn_add a');
	var $cart = $('.toolbar_item_cart');
	$addcart.on('click',function(){
		var $img = $('<img src="//gd3.alicdn.com/imgextra/i3/14351099/TB2aoMCs90jpuFjy0FlXXc0bpXa_!!14351099.jpg_50x50.jpg_.webp">');
		var starty = $(this).offset().top;
		var startx = $(this).offset().left + $(this).width()/2;
		var targetx = $cart.offset().left - 20;
		var targety = $cart.offset().top;
		$img.css({
			'position':'absolute',
			'left':startx,
			'top':starty,
			'z-index':20,
			'opacity':0.8
		})
		$('body').append($img);
		$img.animate({
			'left':targetx,
			'top':targety
		},500,function(){
			$img.detach();
		});
	})
	
	
})
