if (!placeholderSupport()) { // 判断浏览器是否支持 placeholder
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
};
  
function placeholderSupport() {
	return 'placeholder' in document.createElement('input');
}

//选中字体变成蓝色背景
document.onselectstart = function() {
  return false;
}