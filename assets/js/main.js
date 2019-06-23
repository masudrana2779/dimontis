! function (e) {
    "use strict";


    $(document).ready(function () {
        function scrollTopFixed(htOp) {
            var windowTop = $(window).scrollTop();
            if (windowTop > 0) {
                htOp.addClass('fixedMenu');
            }
            else {
                htOp.removeClass('fixedMenu');
            }
        }
        var htOp = $('.header_wrap');
        scrollTopFixed(htOp);
        $(window).scroll(function () {
            scrollTopFixed(htOp);
        })

        function go_to_top() {
            $('.main_menu li a[href^="#"], .go_bottom a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 76
                    }, 2000);
                }
            });
        }
        go_to_top();


        function roadmap_slider() {
            $('.roadmap_slider').slick({
                autoplay: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        }
        roadmap_slider();



        function wowInit() {
            new WOW().init();
        }
        wowInit();

    });
}(jQuery);