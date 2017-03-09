/**
 * Created by jako on 3/6/17.
 */
(function ($) {

    $.fn.njCarousel = function (options) {
        var opts = $.extend( {}, $.fn.defaults, options );
        var w = 0;
        return this.each(function(){
            $(this).find(opts.itemSelector).each(function () {
                w += parseFloat(this.clientWidth);
                this.style.display = 'inline-block';
                console.log();
            })

        });
    }
    $.fn.defaults = {
        itemSelector: 'img',
    }

})(jQuery);