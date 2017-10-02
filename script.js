// var $ = require('jquery');

console.log("javascript is running");
$(document).ready(function() {
    $('#info').hide().animate({margin: '10px 0px'}, 600).fadeIn({duration: 'slow', queue: false});
    $('#vandy-bg').hide().fadeIn('slow');
    $('#arrow').hide().animate({margin: '20px 0px 10px 0px'}, 1000).fadeIn({duration: 1000, queue: false});
    $('.content').hide().fadeIn('slow');
});