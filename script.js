console.log("javascript is running");
$( document ).ready(function() {

    $('#info').hide().animate({margin: '10px 0px'}, 600).fadeIn({duration: 'slow', queue: false});
    // $('#info').hide().slideDown(750);
    $('#vandy-bg').hide().fadeIn('slow');

});