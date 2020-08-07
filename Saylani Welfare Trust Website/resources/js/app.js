
(function($) {
	
	// Show Intro When Click read more
	$('.click_to_show').on('click', function(){
	    $('.hide_click').css('display', 'none');
	    $('.show_more').css('display', 'block');
	    // alert('sm');
	});
	
	// Accept Only Text
	$('#form_name').keyup(function () {
	    this.value = this.value.replace(/[^\u0600-\u06FFa-zA-Z ]+/, '');
	});
	
	// Only Allow numbers
	$('#form_phone').keyup(function () {
	    // alert('sm');[\^$.|?*+(){}
	    this.value = this.value.replace(/[a-zA-Z [$&+,:;=?@#|'<>._^*()%!-]/, '');
	});
})(jQuery);