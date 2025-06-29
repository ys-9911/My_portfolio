// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    $('#wrap1').css('display', 'none')
    $('#wrap2').css('display', 'none')
})


$(document).ready(function () {
    "use strict";


    $('.popup2').click(function () {
        $('#wrap2').css('display', 'block');
    });
    
    $('.close_popup').click(function () {
        $('#wrap2').css('display', 'none');
    });

    $('.popup1').click(function () {
        $('#wrap1').css('display', 'block');
    });
    
    $('.close_popup').click(function () {
        $('#wrap1').css('display', 'none');
    });
    

    var popupSwiper = new Swiper(".cardnews", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        centeredSlides: true,
        slideToClickedSlide: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // scroll menu 메뉴관련 코드
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // 메뉴 클릭시 이동 코드
    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity 메뉴 명암 조절 코드
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  My Project 선택 코드
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });
        
        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });
        
    });
    
    //  ArtWork 선택 코드
    $('#artWorks').waitForImages(function () {
        var $container = $('.artWorks_container');
        $container.isotope({
            filter: '*',
        });

        $('.artWorks_filter a').click(function () {
            $('.artWorks_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    
    //animatedModal
    // $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form 	

    // validate contact form
    // $(function () {
    //     $('#contact-form').validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             email: {
    //                 required: true
    //             },
    //             phone: {
    //                 required: false
    //             },
    //             message: {
    //                 required: true
    //             }

    //         },
    //         messages: {
    //             name: {
    //                 required: "This field is required",
    //                 minlength: "your name must consist of at least 2 characters"
    //             },
    //             email: {
    //                 required: "This field is required"
    //             },
    //             message: {
    //                 required: "This field is required"
    //             }
    //         },
    //         submitHandler: function (form) {
    //             $(form).ajaxSubmit({
    //                 type: "POST",
    //                 data: $(form).serialize(),
    //                 url: "process.php",
    //                 success: function () {
    //                     $('#contact :input').attr('disabled', 'disabled');
    //                     $('#contact').fadeTo("slow", 1, function () {
    //                         $(this).find(':input').attr('disabled', 'disabled');
    //                         $(this).find('label').css('cursor', 'default');
    //                         $('#success').fadeIn();
    //                     });
    //                 },
    //                 error: function () {
    //                     $('#contact').fadeTo("slow", 1, function () {
    //                         $('#error').fadeIn();
    //                     });
    //                 }
    //             });
    //         }
    //     });

    // });
});