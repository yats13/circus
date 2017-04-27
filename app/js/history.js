
$(document).ready(function () {

    var s = skrollr.init();

    var scroll_point = $(document).scrollTop();
    $(document).scroll(function () {
        var scroll_point = $(document).scrollTop();
        console.log(scroll_point);

    });



    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 1000/60;
        var distance = 30;

        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time );
    }

});
