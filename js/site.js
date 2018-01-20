
(function () {
	
	$("#theCarousel").carousel();
	var $item = $('.carousel .item'); 

	

	$(".enable-display").hover(function() {
		if($( window ).width() > 1200){
    		$(this).children("#centered-overlay").fadeIn("slow")
		}

    }, function(){
    	if($( window ).width() > 1200){
    		$(this).children("#centered-overlay").fadeOut("slow")
		}
    		
    });

    $("#logo-img").hover(function(){
    	$(this).css(
    		"opacity" , "1"
    	);
    },function(){
    	$(this).css(
    		"opacity" , "0.7"
    	);
    });


/*	

	$wHeight = $(window).height();
	$item.height($wHeight);

	$(window).on('resize', function (){
	  $wHeight = $(window).height();
	  $item.height($wHeight);
	});
*/
	


/*
	var $item = $('.carousel .item'); 
	var $wHeight = $(window).height();
	$item.eq(0).addClass('active');
	$item.height($wHeight); 
	$item.addClass('full-screen');

	$('.carousel img').each(function() {
	  var $src = $(this).attr('src');
	  var $color = $(this).attr('data-color');
	  $(this).parent().css({
	    'background-image' : 'url(' + $src + ')',
	    'background-color' : $color
	  });
	  $(this).remove();
	});

	$(window).on('resize', function (){
	  $wHeight = $(window).height();
	  $item.height($wHeight);
	});

	$('.carousel').carousel({
	  interval: 6000,
	  pause: "false"
	});
*/
})();
