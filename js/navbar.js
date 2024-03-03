$(document).ready(function () {
    // Add 'active' class to the clicked link and remove from siblings
    $('ul.navbar-nav a').on('click', function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
});