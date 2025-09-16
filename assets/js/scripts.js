/*
File: MALIK HUZAIFA/assets/js/scripts.js
Type: JavaScript file
Root details: Contains functions and top-level variables. Detected function names: noScroll, updateParallax
Detected arrow/constant identifiers: editCursor
Edit note: Section comments inserted before functions and major blocks. Original code preserved.
*/




$(function() {

    "use strict";
/* === SECTION START: variable wind === */

    var wind = $(window);


    /* =============================================================================
    -----------------------------  Smooth Scroll nav   -----------------------------
    ============================================================================= */


    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -80 // offste (in px) for fixed top navigation
    });


    /* =============================================================================
    --------------------------------  Navbar Menu   --------------------------------
    ============================================================================= */

    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).find('.dropdown-menu').removeClass('show')
    });

    $('.navbar .dropdown-item').hover(function() {
        $(this).find('.dropdown-side').addClass('show');
    }, function() {
        $(this).find('.dropdown-side').removeClass('show')
    });

    $(".navbar .search-form").on("click", ".search-icon", function() {

        $(".navbar .search-form").toggleClass("open");

        if ($(".navbar .search-form").hasClass('open')) {

            $(".search-form .close-search").slideDown();

        } else {

            $(".search-form .close-search").slideUp();
        }
    });

    $(".navbar").on("click", ".navbar-toggler", function() {

        $(".navbar .navbar-collapse").toggleClass("show");
    });

    wind.on("scroll", function() {
/* === SECTION START: variable bodyScroll === */

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar.change .logo> img");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/imgs/logo-light.png');
        }
    });
/* === SECTION START: function noScroll === */

    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function() {
/* === SECTION START: variable bodyScroll === */

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });
/* === SECTION START: variable open === */

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function() {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({
                left: 0
            });

            $('.topnav .menu-icon').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

            window.addEventListener('scroll', noScroll);

        } else {

            $('.hamenu').delay(300).animate({
                left: "-100%"
            });

            $('.topnav .menu-icon').removeClass('open');

            $('.hamenu .menu-links .main-menu .sub-menu').slideUp();

            $('.hamenu .menu-links .main-menu .dmenu').removeClass("dopen");

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function() {
        $(this).removeClass('hoverd').siblings().addClass('hoverd');
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function() {
        $(this).removeClass('hoverd').siblings().removeClass('hoverd');
    });


    $('.main-menu > li .dmenu').on('click', function() {
        $(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle();
        $(this).toggleClass("dopen");
    });

    /* =============================================================================
    ------------------------------  Parallax Swiper   ------------------------------
    ============================================================================= */


    var parallaxSlider;
/* === SECTION START: variable parallaxSliderOptions === */
    var parallaxSliderOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,

        on: {
            init: function() {
/* === SECTION START: variable swiper === */
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function() {
                this.update();
            }
        },

        pagination: {
            el: '.slider-prlx .parallax-slider .swiper-pagination',
            type: 'fraction',
            clickable: true
        },

        navigation: {
            nextEl: '.slider-prlx .parallax-slider .next-ctrl',
            prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);

    var parallaxShowCase;
/* === SECTION START: variable parallaxShowCaseOptions === */
    var parallaxShowCaseOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        mousewheel: true,
        loop: true,

        on: {
            init: function() {
/* === SECTION START: variable swiper === */
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function() {
                this.update();
            }
        },

        pagination: {
            el: '.showcase-full .parallax-slider .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.showcase-full .parallax-slider .swiper-button-next',
            prevEl: '.showcase-full .parallax-slider .swiper-button-prev'
        }
    };
    parallaxShowCase = new Swiper('.showcase-full .parallax-slider', parallaxShowCaseOptions);




    /* ===============================  half slider  =============================== */
/* === SECTION START: variable galleryThumb === */

    var galleryThumb = new Swiper('.gallery-thumb .swiper-container', {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
/* === SECTION START: variable galleryImg === */

    var galleryImg = new Swiper('.gallery-top .swiper-container', {
        spaceBetween: 0,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: galleryThumb
        }
    });

    galleryImg.on("slideChangeTransitionStart", function() {
        galleryThumb.slideTo(galleryImg.activeIndex);
    });
    galleryThumb.on("transitionStart", function() {
        galleryImg.slideTo(galleryThumb.activeIndex);
    });


    /* =============================================================================
    ------------------------------  Interactive work   -----------------------------
    ============================================================================= */

    $('.inter-links-center .links-text li').on('mouseenter', function() {
/* === SECTION START: variable tab_id === */
        var tab_id = $(this).attr('data-tab');
        $('.links-text li').removeClass('current');
        $(this).addClass('current');

        $('.links-img .img').removeClass('current');
        $("#" + tab_id).addClass('current');

        if ($(this).hasClass('current')) {
            return false;
        }
    });

    $('.inter-links-center .links-text li').on('mouseleave', function() {
        $('.links-text li').removeClass('current');
        $('.links-img .img').removeClass('current');
    });


    $('.inter-links-center .links-text li').on('mouseenter', function() {
        $(this).removeClass('no-active').siblings().addClass('no-active');
    });

    $('.inter-links-center .links-text li').on('mouseleave', function() {
        $('.inter-links-center .links-text li').removeClass('no-active');
    });


    /* =============================================================================
    -------------------------------  works Hover  ----------------------------------
    ============================================================================= */

    $(".portfolio.changed-bg .item").on("mouseenter", ".img", function() {
/* === SECTION START: variable Bgcolor === */

        var Bgcolor = $(this).attr("data-bgcolor");

        $(".portfolio.changed-bg").css("background-color", Bgcolor);

        if ($(this).hasClass('chang-text')) {
            $(".portfolio.changed-bg").addClass("chang-text");
        }
    });

    $(".portfolio.changed-bg .item").on("mouseleave", ".img", function() {

        $(".portfolio.changed-bg").css("background-color", "transparent");
        $(".portfolio.changed-bg").removeClass("chang-text");
    });


    /* =============================================================================
    ------------------------------  Data Background   ------------------------------
    ============================================================================= */
/* === SECTION START: variable pageSection === */

    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
/* === SECTION START: variable pageSectionColor === */

    var pageSectionColor = $(".bg-solid-color, section");
    pageSectionColor.each(function(indx) {
/* === SECTION START: variable color === */

        var color = $(this).attr("data-solid-color");

        if ($(this).attr("data-solid-color")) {
            $(this).css("background-color", color);
        }
    });


    /* =============================================================================
    -----------------------------------  Tabs  -------------------------------------
    ============================================================================= */

    $('#tabs .tab-links').on('click', '.item-link', function() {
/* === SECTION START: variable tab_id === */

        var tab_id = $(this).attr('data-tab');

        $('#tabs .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').hide();
        $("#" + tab_id).show();

    });

    $('#tabs-fade .tab-links').on('click', '.item-link', function() {
/* === SECTION START: variable tab2_id === */

        var tab2_id = $(this).attr('data-tab');

        $('#tabs-fade .tab-links .item-link').removeClass('current');
        $(this).addClass('current');

        $('.tab-content').fadeOut();
        $("#" + tab2_id).fadeIn();

    });


    /* =============================================================================
    --------------------------------  Accordion  -----------------------------------
    ============================================================================= */

    $(".accordion").on("click", ".title", function() {

        $(this).next().slideDown();

        $(".accordion-info").not($(this).next()).slideUp();

    });

    $(".accordion").on("click", ".item", function() {

        $(this).addClass("active").siblings().removeClass("active");

    });


    /* =============================================================================
    ---------------------------------  Tolltip  ------------------------------------
    ============================================================================= */

    $('[data-tooltip-tit]').hover(function() {
        $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-tit').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-tit').css({
            top: e.pageY + 10,
            left: e.pageX + 20
        })
    });

    $('[data-tooltip-sub]').hover(function() {
        $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function() {
        $('.div-tooltip-sub').remove();
    }).mousemove(function(e) {
        $('.div-tooltip-sub').css({
            top: e.pageY + (-15),
            left: e.pageX + 30
        })
    });


    /* =============================================================================
    -------------------------------  Progress Bar  ---------------------------------
    ============================================================================= */
/* === SECTION START: variable c4 === */

    var c4 = $('.skills-circle .skill');
/* === SECTION START: variable myVal === */
    var myVal = $(this).attr('data-value');

    $(".skills-circle .skill").each(function() {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 4,
            size: 140,
            fill: {
                color: "#ff5e57"
            }
        });

    });

    wind.on('scroll', function() {
        $(".skill-progress .progres").each(function() {
/* === SECTION START: variable bottom_of_object === */
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
/* === SECTION START: variable bottom_of_window === */
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
/* === SECTION START: variable myVal === */
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* =============================================================================
    ------------------------------  Parallax Items   -----------------------------
    ============================================================================= */

    // Get the target elements
/* === SECTION START: variable parallaxTargets === */
    const parallaxTargets = document.querySelectorAll('.parallax');

    // Get the mouse position
/* === SECTION START: variable mouseX === */
    let mouseX = 0;
/* === SECTION START: variable mouseY === */
    let mouseY = 0;
    document.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Update the target elements' position on each animation frame
/* === SECTION START: variable rafId === */
    let rafId = null;
/* === SECTION START: function updateParallax === */

    function updateParallax() {
        // Loop through each target element
        parallaxTargets.forEach(target => {
            // Get the target's speed
/* === SECTION START: variable speed === */
            let speed = target.dataset.speed;

            // Calculate the new position based on the mouse position and speed
/* === SECTION START: variable x === */
            let x = (window.innerWidth / 2 - mouseX) * speed;
/* === SECTION START: variable y === */
            let y = (window.innerHeight / 2 - mouseY) * speed;
            target.style.transform = `translate3d(${x / 10}rem, ${y / 10}rem, 0)`;
        });

        // Schedule the next animation frame
        rafId = requestAnimationFrame(updateParallax);
    }

    // Start the parallax animation
    updateParallax();


    /* =============================================================================
    -----------------------------  Trigger Plugins  --------------------------------
    ============================================================================= */


    /* ========== Sticky ========== */

    $("#sticky_item").stick_in_parent();


    /* ========== YouTubePopUp ========== */

    $("a.vid").YouTubePopUp();


    /* ========== parallaxie ========== */

    $('.parallaxie').parallaxie({
        speed: 0.8,
        size: "cover"
    });


    /* ========== paroller ========== */

    $('.my-paroller').paroller();


    /* ========== magnificPopup ========== */

    $('.popup-img , .gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* =========== justifiedGallery =========== */

    $('.justified-gallery').justifiedGallery({
        rowHeight: 400,
        lastRow: 'nojustify',
        margins: 15
    });


    /* =========== hover3d =========== */

    $(".hover3d").hover3d({
        selector: ".hover3d-child",
        invert: true
    });


    /* =========== countUp =========== */

    $('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });

    /* ===========  Splitting  =========== */

    Splitting();

});


/* =============================================================================
-----------------------------  Parallax Animation  -----------------------------
============================================================================= */

(function() {
/* === SECTION START: variable link === */
    const link = document.querySelectorAll('.hover-this');
/* === SECTION START: variable cursor === */
    const cursor = document.querySelector('.cursor');
/* === SECTION START: variable animateit === */
    const animateit = function(e) {
/* === SECTION START: variable hoverAnim === */
        const hoverAnim = this.querySelector('.hover-anim');
        const {
            offsetX: x,
            offsetY: y
        } = e, {
            offsetWidth: width,
            offsetHeight: height
        } = this,
        move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') hoverAnim.style.transform = '';
    };
/* === SECTION START: variable editCursor === */
    const editCursor = e => {
        const {
            clientX: x,
            clientY: y
        } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    $("a, .cursor-pointer").hover(
        function() {
            $(".cursor").addClass("cursor-active");
        },
        function() {
            $(".cursor").removeClass("cursor-active");
        }
    );
/* === SECTION START: variable elements === */



    let elements = document.querySelectorAll(".rolling-text");

    elements.forEach((element) => {
/* === SECTION START: variable innerText === */
        let innerText = element.innerText;
        element.innerHTML = "";
/* === SECTION START: variable textContainer === */

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
/* === SECTION START: variable span === */
            let span = document.createElement("span");
            span.innerText = letter.trim() === "" ? "\xa0" : letter;
            span.classList.add("letter");
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
    });

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            element.classList.remove("play");
        });
    });
})();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(window).on("load", function() {


    /* =============================================================================
    ---------------------------------  Preloader  ----------------------------------
    ============================================================================= */
/* === SECTION START: variable body === */

    var body = $('body');
    body.addClass('loaded');
    setTimeout(function() {
        body.removeClass('loaded');
    }, 1500);


    /* =============================================================================
    ------------------------------  Parallax image  --------------------------------
    ============================================================================= */
/* === SECTION START: variable imageUp === */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.2
    });
/* === SECTION START: variable imageDown === */

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.2
    });


    /* =============================================================================
    -----------------------------  isotope Masonery   ------------------------------
    ============================================================================= */

    $('.gallery').isotope({
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope();

    $('.filtering').on('click', 'span', function() {
/* === SECTION START: variable filterValue === */
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });

    $('.filtering').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


    /* =============================================================================
    -----------------------------  Contact Valdition   -----------------------------
    ============================================================================= */

    $('#contact-form').validator();

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
/* === SECTION START: variable url === */
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
/* === SECTION START: variable messageAlert === */
                    var messageAlert = 'alert-' + data.type;
/* === SECTION START: variable messageText === */
                    var messageText = data.message;
/* === SECTION START: variable alertBox === */

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});


/* =============================================================================
-----------------------------  Button scroll up   ------------------------------
============================================================================= */

$(document).ready(function() {

    "use strict";
/* === SECTION START: variable progressPath === */

    var progressPath = document.querySelector('.progress-wrap path');
/* === SECTION START: variable pathLength === */
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
/* === SECTION START: variable updateProgress === */
    var updateProgress = function() {
/* === SECTION START: variable scroll === */
        var scroll = $(window).scrollTop();
/* === SECTION START: variable height === */
        var height = $(document).height() - $(window).height();
/* === SECTION START: variable progress === */
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
/* === SECTION START: variable offset === */
    var offset = 150;
/* === SECTION START: variable duration === */
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

});


/* =============================================================================
--------------------------------  Fade Header   --------------------------------
============================================================================= */

$(window).scroll(function() {
/* === SECTION START: variable scrolled === */

    var scrolled = $(this).scrollTop();
    $('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});



/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


/* =============================================================================
////////////////////////////////////////////////////////////////////////////////
============================================================================= */

$(function() {


    "use strict";


    /* ===============================  fixed-slider  =============================== */
/* === SECTION START: variable slidHeight === */

    var slidHeight = $(".fixed-slider").outerHeight();

    $(".main-content").css({
        marginTop: slidHeight
    });



    /* =============================================================================
    ----------------------------  Swiper Data Controls   ---------------------------
    ============================================================================= */

    $('[data-carousel="swiper"]').each(function() {
/* === SECTION START: variable containe === */

        var containe = $(this).find('[data-swiper="container"]').attr('id');
/* === SECTION START: variable pagination === */
        var pagination = $(this).find('[data-swiper="pagination"]').attr('id');
/* === SECTION START: variable prev === */
        var prev = $(this).find('[data-swiper="prev"]').attr('id');
/* === SECTION START: variable next === */
        var next = $(this).find('[data-swiper="next"]').attr('id');
/* === SECTION START: variable items === */
        var items = $(this).data('items');
/* === SECTION START: variable autoplay === */
        var autoplay = $(this).data('autoplay');
/* === SECTION START: variable iSlide === */
        var iSlide = $(this).data('initial');
/* === SECTION START: variable loop === */
        var loop = $(this).data('loop');
/* === SECTION START: variable parallax === */
        var parallax = $(this).data('parallax');
/* === SECTION START: variable space === */
        var space = $(this).data('space');
/* === SECTION START: variable speed === */
        var speed = $(this).data('swiper-speed');
/* === SECTION START: variable center === */
        var center = $(this).data('center');
/* === SECTION START: variable effect === */
        var effect = $(this).data('effect');
/* === SECTION START: variable direction === */
        var direction = $(this).data('direction');
/* === SECTION START: variable mousewheel === */
        var mousewheel = $(this).data('mousewheel');

        // Configuration
/* === SECTION START: variable conf === */
        var conf = {

        };

        // Responsive
        if ($(this).hasClass('swiper5')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }
            };
        };

        if ($(this).hasClass('swiper4')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }
            };
        };

        if ($(this).hasClass('blog-carsouel')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },

                navigation: {
                    nextEl: '.blog-modern .swiper-button-next',
                    prevEl: '.blog-modern .swiper-button-prev'
                }
            };
        };

        if ($(this).hasClass('work-crus3')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },

                pagination: {
                    el: ".work-carsouel .swiper-pagination",
                    clickable: true,
                },

                navigation: {
                    nextEl: '.work-carsouel .swiper-button-next',
                    prevEl: '.work-carsouel .swiper-button-prev'
                }
            };
        };

        if ($(this).hasClass('work-crus2')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                },

                pagination: {
                    el: ".work-carsouel .swiper-pagination",
                    clickable: true,
                },

                navigation: {
                    nextEl: '.work-carsouel .swiper-button-next',
                    prevEl: '.work-carsouel .swiper-button-prev'
                }
            };
        };

        if ($(this).hasClass('work-crsol-clum')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }
            };
        };

        if ($(this).hasClass('testim-grid')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }
            };
        };

        if ($(this).hasClass('serv-swiper')) {
/* === SECTION START: variable conf === */
            var conf = {

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                },

                navigation: {
                    nextEl: '.services .swiper-button-next',
                    prevEl: '.services .swiper-button-prev'
                }
            };
        };

        if ($(this).hasClass('testim-swiper')) {
/* === SECTION START: variable conf === */
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.testim-controls .swiper-button-next',
                    prevEl: '.testim-controls .swiper-button-prev'
                },
            };
        };

        if ($(this).hasClass('testim-swiper2')) {
/* === SECTION START: variable conf === */
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.testim-controls .swiper-button-next',
                    prevEl: '.testim-controls .swiper-button-prev'
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }
            };
        };

        if ($(this).hasClass('testim-swiper3')) {
/* === SECTION START: variable conf === */
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.testim-controls .swiper-button-next',
                    prevEl: '.testim-controls .swiper-button-prev'
                },

                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }
            };
        };

        if ($(this).hasClass('pagination')) {
/* === SECTION START: variable conf === */
            var conf = {

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            };
        };

        if (items) {
            conf.slidesPerView = items
        };
        if (autoplay) {
            conf.autoplay = autoplay
        };
        if (iSlide) {
            conf.initialSlide = iSlide
        };
        if (center) {
            conf.centeredSlides = center
        };
        if (loop) {
            conf.loop = loop
        };
        if (parallax) {
            conf.parallax = parallax
        };
        if (space) {
            conf.spaceBetween = space
        };
        if (speed) {
            conf.speed = speed
        };
        if (mousewheel) {
            conf.mousewheel = mousewheel
        };
        if (effect) {
            conf.effect = effect
        };
        if (direction) {
            conf.direction = direction
        };
        if (prev) {
            conf.prevButton = '#' + prev
        };
        if (next) {
            conf.nextButton = '#' + next
        };
        if (pagination) {
            conf.pagination = '#' + pagination,
                conf.paginationClickable = true
        };

        // Initialization
        if (containe) {
/* === SECTION START: variable initID === */
            var initID = '#' + containe;
/* === SECTION START: variable init === */
            var init = new Swiper(initID, conf);
        };
    });


    /* =============================================================================
    -------------------------------  Preloader svg   -------------------------------
    ============================================================================= */
/* === SECTION START: variable svg === */

    const svg = document.getElementById("svg");
/* === SECTION START: variable tl === */
    const tl = gsap.timeline();
/* === SECTION START: variable curve === */
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
/* === SECTION START: variable flat === */
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
        delay: 1.5,
        y: -100,
        opacity: 0,
    });
    tl.to(svg, {
        duration: 0.5,
        attr: {
            d: curve
        },
        ease: "power2.easeIn",
    }).to(svg, {
        duration: 0.5,
        attr: {
            d: flat
        },
        ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
        y: -1500,
    });
    tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
    });
    tl.from(
        "header", {
            y: 200,
        },
        "-=1.5"
    );
    tl.from(
        "header .container", {
            y: 40,
            opacity: 0,
            delay: 0.3,
        },
        "-=1.5"
    );

});



$(function() {
/* === SECTION START: variable width === */
    var width = $(window).width();
    if (width > 991) {

        "use strict";
/* === SECTION START: variable wind === */

        var wind = $(window);

        /* =============================================================================
        -------------------------------  Smooth Footer   -------------------------------
        ============================================================================= */

        gsap.set('.footer-container', {
            yPercent: -50
        })
/* === SECTION START: variable uncover === */
        const uncover = gsap.timeline({
            paused: true
        })
        uncover
            .to('.footer-container', {
                yPercent: 0,
                ease: 'none'
            });

        ScrollTrigger.create({
            trigger: 'main',
            start: 'bottom bottom',
            end: '+=50%',
            animation: uncover,
            scrub: true,
        });


        /* =============================================================================
       -------------------------------  Smooth contact   -------------------------------
       ============================================================================= */

        gsap.set('.contact-container', {
            yPercent: -50
        })
/* === SECTION START: variable cover === */
        const cover = gsap.timeline({
            paused: true
        })
        cover
            .to('.contact-container', {
                yPercent: 0,
                ease: 'none'
            });

        ScrollTrigger.create({
            trigger: '.main-box',
            start: 'bottom bottom',
            end: '+=50%',
            animation: cover,
            scrub: true,
        });


        /* =============================================================================
        -----------------------------  Portfolio Fixed  --------------------------------
        ============================================================================= */

        wind.on('scroll', function() {
            $(".portfolio-fixed .sub-bg .cont").each(function() {
/* === SECTION START: variable bottom_of_object === */
                var bottom_of_object =
                    $(this).offset().top + $(this).outerHeight();
/* === SECTION START: variable bottom_of_window === */
                var bottom_of_window =
                    $(window).scrollTop() + $(window).height();
/* === SECTION START: variable tab_id === */
                var tab_id = $(this).attr('data-tab');
                if (bottom_of_window > bottom_of_object) {
                    $("#" + tab_id).addClass('current');
                    $(this).addClass('current');
                } else {
                    $("#" + tab_id).removeClass('current');
                    $(this).removeClass('current');
                }
            });
        });
    }
});


$(function() {
/* === SECTION START: variable width === */
    var width = $(window).width();
    if (width < 991) {

        "use strict";

        $(".navbar .navbar-nav").on("click", ".nav-link", function() {

            $(".navbar .navbar-nav .dropdown .dropdown-menu").removeClass("show");

            $(this).parent().find(".dropdown-menu").addClass("show");
        });
    }
});