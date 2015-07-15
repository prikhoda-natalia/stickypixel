// jQuery to shrink the navbar on scroll
$(window).scroll(function () {
    if ($('#spx-navbar').offset().top > 50) {
        $('#spx-navbar').addClass('spx-navbar-shrink');
    } else {
        $('#spx-navbar').removeClass('spx-navbar-shrink');
    }
});

// jQuery for page scrolling and menu hide feature
$(function () {
    $('a.spx-page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');

        // Closes the Responsive Menu on Menu Item or Brand Click
        $('.navbar-collapse').collapse('hide');
        event.preventDefault();
    });
});

// Submit Form - writes document URL to a hidden field
var currURL = document.location.href;
document.getElementById("fieldukkddk").value = currURL;

// Google Analytics Tracking Code for Sticky Pixel
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-62598236-1', 'auto');
ga('send', 'pageview');