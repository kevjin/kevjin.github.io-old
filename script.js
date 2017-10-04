// var $ = require('jquery');

console.log("javascript is running");
$(document).ready(function() {
    $('.profile').hide().animate({margin: '50px 0px'}, 600).fadeIn({duration: 'slow', queue: false});
    // $('#vandy-bg').hide().fadeIn('slow');
    $('.arrow').hide().animate({margin: '20px 0px 10px 0px'}, 1000).fadeIn({duration: 1000, queue: false});
    $('.content').hide().fadeIn('slow');

    $("a[href^=\\#]").click(function(e) { //credit to bardo on StackOverflow for this smooth scrolling function
        e.preventDefault(); 
        var dest = $(this).attr('href'); 
        console.log(dest); $('html,body').animate({ 
            scrollTop: $(dest).offset().top }, 780); 
    });
});