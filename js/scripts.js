(function ($) {
    $('.custom-scrollbar').mCustomScrollbar();
    $('.horoscope-select').select2({
        placeholder: "Select your animal...",
        allowClear: false
    });

    $( window ).on('load',function() {
        initCarousel();
    });

    function initCarousel(){
        var carousel = $('.carousel-container').owlCarousel({
            loop:false,
            items:1,
            lazyLoad:true,
        });
        $('.carousel-item').on('click', function () {
            var targetId = $(this).attr('data-target');
            $('.carousel-item.active').removeClass('active');
            $(this).addClass('active');
            carousel.trigger('to.owl.carousel', targetId);
        });
        $(window).on('resize',function () {
            defineCarouselHeight();
        });
        defineCarouselHeight();
        $(window).resize(function() {
            clearTimeout(this.id);
            this.id = setTimeout(defineCarouselHeight, 500);
        });
        $('.nav-left-container').on('click',prevSlide.bind(carousel));
        $('.nav-right-container').on('click',nextSlide.bind(carousel));
    }

    function defineCarouselHeight(){
        var height = parseInt($('.carousel-container .image-container img').height());
        var nav = $('.carousel-navigation');
        nav.height(height);
        nav.mCustomScrollbar();
        $('.carousel-navigation .carousel-item').dotdotdot();
    }

    function nextSlide() {
        this.trigger('next.owl.carousel');
        if( $('.carousel-item.active').next().length)
            $('.carousel-item.active').removeClass('active').next().addClass('active');
    }

    function prevSlide() {
        this.trigger('prev.owl.carousel');
        if( $('.carousel-item.active').prev().length)
            $('.carousel-item.active').removeClass('active').prev().addClass('active');
    }
})(jQuery);

