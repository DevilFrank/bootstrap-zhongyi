$(function() {
	//一级导航悬浮变色
	$('.first_level_menu').hover(function() {
		$(this).addClass('opened')
	}, function() {
		$(this).removeClass('opened')
	}) 
	
	
	//mobile服务热线
	$('.hot_tel h1').click(function() {
			if($(this).hasClass('checked')) {
				$(this).removeClass('checked').next('.hot_tel_section').hide()
				$('.hot_tel').css('background', 'none')
			} else {
				$(this).addClass('checked').next('.hot_tel_section').show()
				$('.hot_tel').css('background', '#FFFFFF')
			}

		})
		//pc服务热线
	$('.pc_hot_tel').hover(function() {
			$('.pc_tel_section').stop().slideToggle()
		})
		//中英文转化
	$('.change_lan a').click(function() {
			$(this).addClass('checked').siblings().removeClass('checked')
		})
		//pc导航搜索
	$('.icon_seach').hover(function() {
		$('.pc_search_box').show()
	}, function() {
		$('.pc_search_box').hide()
	})
 //扫描二维码
  $('.about_us_icon').click(function(){
  	$('.code').toggle(200)
  })
$('.hover_box').on(' mouseover',function(event){
 	 event.stopPropagation()
 	$('.code').show(200)
 })
 $('.hover_box').on('mouseout',function(event){
 event.stopPropagation()
 	$('.code').hide(200)
 })
 //pc导航背景
 $('.sign').each(function(){ 
			$(this).parents('.first_level_menu ').addClass('clicked');
	})
//侧边栏
 $('.aside_sign').each(function(){  
			$(this).parents('.have_three').addClass('clicked');
	})
	//字体半大小
 $('.small_font_size').click(function(){
 	$('html').css('font-size','12px')
 })
 $('.middle_font_size').click(function(){
 	$('html').css('font-size','14px')
 })
 $('.big_font_size').click(function(){
 	$('html').css('font-size','16px')
 })
 //-----------------------------------------------------商城页面

 //mall.html .mall_service提示信息
$(".mall_service").mouseenter(function(){
	$(this).children('.mall_service_msg').slideDown('200');
	console.log("111111");
}).mouseleave(function(){
	$(this).children('.mall_service_msg').stop().slideUp('200');
});

/* 侧边跟随窗口微信二维码 */
$('.mall_wechat').mouseenter(function(event){
	event.stopPropagation()
	$('.mall_wechat_code').fadeIn("300");
}).mouseleave(function(event){
	event.stopPropagation()
	$('.mall_wechat_code').stop().fadeOut("300");
})
/* 阻止事件冒泡 */
$('.mall_wechat_code').mouseenter(function(event){
	event.stopPropagation()
})
  
})

/* 新闻列表页 pc侧边栏 */

$('.have_three').click(function(){
	$(this).css('background','#ddd').children('.three_menu').slideDown('200');
	$(this).siblings('.have_three').css('background','#f5f5f5').children('.three_menu').slideUp('200');
})


/* 大事记选择年份 */
$('.hh').html($('.select_year_list>li').eq(0).html());
$('.list').eq(0).show();
$('.memorabilia_select_year>span').click(function(){
	$(this).siblings('.select_year_list').show();
});
$('.select_year_list>li').click(function(){
	var ind = $(this).index();
	$('.list').eq(ind).show().siblings('.list').hide();
	$(this).parent().hide().siblings('span').html($(this).html());
});
$(document).click(function(){
	$('.select_year_list').hide();
});
$('.memorabilia_select_year').click(function(event){
	event.stopPropagation();
});

/* 商城详情页 */
/* 扫码购买 */
$('.scan_code_buy').mouseenter(function(event){
	event.stopPropagation()
	$('.shop_wechat_code').fadeIn("300");
}).mouseleave(function(event){
	event.stopPropagation()
	$('.shop_wechat_code').stop().fadeOut("300");
})
$('.shop_wechat_code').mouseenter(function(event){
	event.stopPropagation()
})
/* 切换产品内容 */
$('.content_main_nav>li').click(function(){
	var liindex = $(this).index();
	$(this).addClass('shop_nav_avtive').siblings('li').removeClass('shop_nav_avtive');
	$('.content_main_list>li').eq(liindex).addClass('block').siblings('li').removeClass('block')
})

/* 中意一生保终身寿险 */
$('.insurance_list_title').click(function(){
	if($(this).children('.jiahao').attr('flag') == 0){
		$(this).children('.jiahao').removeClass('icon-jiahao').addClass('icon-x').attr('flag','1').parent().siblings('p').stop().slideDown('300');
	}else{
		$(this).children('.jiahao').removeClass('icon-x').addClass('icon-jiahao').attr('flag','0').parent().siblings('p').slideUp('300');
	}
})


/* 企业社会责任 切换 */
$('.responsibility_title_list>li').eq(0).addClass('color_red');
$('.responsibility_main_list').eq(0).show();
$('.progress_list_li>div').eq(0).addClass('progress_list_select');
$('.responsibility_title_list>li').click(function(){
	var index_responsibility = $(this).index();
	$(this).addClass('color_red').siblings().removeClass('color_red');
	$('.progress_list_li>div').eq(index_responsibility).addClass('progress_list_select').siblings('div').removeClass('progress_list_select');
	$('.responsibility_main_list').eq(index_responsibility).show().siblings('.responsibility_main_list').hide();

})
$('.main_list_lunbo').mouseenter(function(){
	$(this).children('.responsibility_button_prev,.responsibility_button_next').fadeIn('300');
}).mouseleave(function(){
	$(this).children('.responsibility_button_prev,.responsibility_button_next').stop().fadeOut('300');
});


/* 常见问题 */
$('.problem_list_ask').click(function(){
	if($(this).attr('flag') == 0){
		$(this).siblings('.problem_list_answer').slideDown('200');
		$(this).attr('flag','1').children('.arrow').removeClass('icon-arrow_bottom').addClass('icon-arrow_top-copy');
	}else{
		$(this).siblings('.problem_list_answer').slideUp('200');
		$(this).attr('flag','0').children('.arrow').removeClass('icon-arrow_top-copy').addClass('icon-arrow_bottom');
	}
})

/* 空缺职位 */
/*$('.select_company').change(function(){
	var option = $('.select_company option:selected');
	$('.main_select_company').html(option.text())
	//$(this).siblings('.mechanism_div_text').html(option.text());
})
$('.select_place').change(function(){
	var options = $('.select_place option:selected');
	$('.main_select_city').html(options.text());
	//$(this).siblings('.mechanism_div_text').html(options.text());
})*/
