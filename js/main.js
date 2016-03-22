$(function(){
	$('nav ul a').click(function(e){
		var box=$(this).text();
		$('#'+box).show();
		$('#'+box).siblings("section").hide();
	});
})

