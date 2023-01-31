$(function() {
	$('#menubar_hdr').click(function() {
		$('#menubar').slideToggle();
		$(this).toggleClass('close');
	});
});

$(function() {
	$('#menubar a[href^="#"]').click(function(){
		$('#menubar').hide();
		$('#menubar_hdr').removeClass('close');
	});
});

$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});

$(function(){
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function(){
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn(500).addClass(scrollShow);
            } else {
                $(scroll).fadeOut(500).removeClass(scrollShow);
            }
        });
});

$(function(){
    $('a[href^="#"]').click(function(){
        var href = $(this).attr('href');
        var target = href == '#' ? 0 : $(href).offset().top;
            $('body,html').animate({scrollTop:target},500);
            return false;
    });
});