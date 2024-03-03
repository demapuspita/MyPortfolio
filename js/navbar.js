$(document).ready(function () {
    // active
    $('ul.navbar-nav a').on('click', function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

    // scroll
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        $('ul.navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                currLink.addClass("active").parent().siblings().find('a').removeClass('active');
            } else {
                currLink.removeClass("active");
            }
        });
    });
});