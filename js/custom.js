// JavaScript Document
$('#banner').owlCarousel({
loop:true,	// cho lap lại
items:1,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
})
$('#blog-carousel').owlCarousel({
loop:true,	// cho lap lại		
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,	// cho xuất hiện bộ nút tới lui 
margin:40,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i
responsive:{
0:{
items:1,
dots:false,
},
600:{
items:1,
dots:false,
},
1000:{
items:4,
dots:false,
}
}
})
$(document).ready(function(){
    
	var clickEvent = false;
	$('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel .list-group-item').outerHeight(triggerheight);
});