// jQueryの型を用意してください
$(function() {
    $('#login-show').click(function() {
        $('#login-modal').fadeIn();
    });
    $('.signup-show').click(function() {
        $('#signup-modal').fadeIn();
    });
    $('.close-modal').click(function() {
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
    });



});