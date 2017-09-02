$(function(){
    $(window).on('resize', function(){
    	var content = $('.content');
    	var	contentHeight = content.outerHeight(true);
    	var height = $(this).outerHeight() - $('header').outerHeight()-$('footer').outerHeight();
    	
    	console.log("content height "+contentHeight);
		console.log("active_section height "+$('.active_section').outerHeight());

    	if(sect==="#Home"){
    		$('.active_section').height(height);
    	}else if(sect==="#Projects"){
    		//Later
    	}else if(sect==="#Resume"){
    		//Later
    	}else if(sect==="#Contact"){
    		var secondBox = $('.active_section > .box:nth-child(2)');
    		$('.active_section > .box:nth-child(1)').height(height - secondBox.height());
    	}else{
    		console.log("Invalid section "+sect);
    	}
    }).trigger('resize');

    var sect="";

	$('nav a').click(function(e) {
		$('nav a').removeClass("active_link");
		$(this).addClass("active_link");
    	$('.content > section').hide();
    	$('.content > section').removeClass("active_section");
    	$(this.hash).show();
    	$(this.hash).addClass("active_section");
    	e.preventDefault();
    	sect=$(this).attr("href");
    	$(window).resize();
	});

	$('nav a:first').click();
})

