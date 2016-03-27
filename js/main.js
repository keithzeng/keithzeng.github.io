$(function(){
	function resize_div(){
		var sibl_height=0;
		$('.active').siblings().each(function(){
			sibl_height=sibl_height+$(this).outerHeight();
		})
		$('.active').css('min-height',$(window).height()-$('header').outerHeight()-$('footer').outerHeight()-sibl_height);
	}
	
	resize_div();

	$( window ).resize(function() {
		resize_div();
	});

	$('nav ul a').click(function(e){
		var box=$(this).text();
		$('#'+box).show();
		$('#'+box).siblings().hide();
		var $active_div=$('#'+box+' div').first();
		$active_div.addClass('active');
		$('#'+box).siblings().each(function() {
			$(this).find('div').first().removeClass('active');
		});
		resize_div();
	});
})

