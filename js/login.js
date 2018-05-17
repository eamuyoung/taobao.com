$(function(){
	$('.login_switch i,.quick_login .login_links .username_login').on('click',function(){
		$('.login_switch i,.userlogin_tip,.static_form,.quicklogin_tip,.quick_login').toggle();
	})
	$('.login_text').on('input',function(){
		if($(this).val() != ''){
			$('.label_ph').hide();
		}else{
			$('.label_ph').show();
		}
	})
	$('.submit button').on('click',function(){
		if($('.login_text').val() == '' || $('.login_pwd').val() == ''){
			$('.notice1').show();
		}else{
			
			$.ajax({
				url:'php/login.php',
				type:'post',
				data:{
					'username':$('.login_text').val(),
					'password':$('.login_pwd').val()
				},
				success:function(d){
					
					if(parseInt(d)){
						location.href = 'index.html';
					}else{
						$('.notice2').show();
					}
				}
			})
		}
	})
})
