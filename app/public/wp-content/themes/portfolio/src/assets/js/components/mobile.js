import $ from 'jquery';

$(document).ready(function () {
    $('.menu-toggle').on('click', function () {
        if($('.main-mobile-menu').hasClass('close')) {
            $('.main-mobile-menu').removeClass('close');
            $('.main-mobile-menu').addClass('open');
        } else {
            $('.main-mobile-menu').removeClass('open');
            $('.main-mobile-menu').addClass('close');
        }
    });
});
