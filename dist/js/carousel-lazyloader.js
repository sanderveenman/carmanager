/**
 *
 * Bootstrap 3 carousel lazy loader
 *
 */
$.fn.carouselLazyLoader = function (options) {
    /* Default options */
    this.options = {
        loadCount: 1,
        stopAutoSlide: false
    };

    /* Set custom options */
    if (options != undefined) {
        if (options.loadCount != undefined) {
            this.options.loadCount = options.loadCount;
        }
        if (options.stopAutoSlide != undefined) {
            this.options.stopAutoSlide = options.stopAutoSlide;
        }
    }

    /* Stop automatically sliding */
    if (this.options.stopAutoSlide) {
        this.attr("data-interval", "false");
    }

    var self = this;

    this.slides = self.find(".carousel-inner > .item");
    this.slideCount = this.slides.length;

    this.init = function () {
        if (typeof useCarouselLazyLoader != "undefined") {
            /* Load all images and stop */
            if (!useCarouselLazyLoader) {
                var slideCount = self.find(".carousel-inner > .item").length;
                for (var i = 0; i < slideCount; i++) {
                    self.load(i);
                }

                return;
            }
        }

        /* Load second image */
        self.load(1);

        /* Set slide event */
        self.bind('slide.bs.carousel', function (e) {
            var indicator = self.find(".carousel-indicators .active");
            var currentSlide = parseInt(indicator.data("slide-to"));
            var slideTill = currentSlide + self.options.loadCount + 1;
            for (var i = currentSlide - self.options.loadCount; i < slideTill; i++) {
                var slideIndex = i;

                if (slideIndex > self.slideCount)
                    slideIndex = 0;

                if (slideIndex < 0)
                    slideIndex = self.slideCount - 1;

                self.load(slideIndex);
            }
        });

        /* Clicking slide indicator */
        self.find(".carousel-indicators [data-slide-to]").click(function () {
            var slide = parseInt($(this).data("slide-to"));
            var slideTill = slide + self.options.loadCount + 1;
            for (var i = slide; i < slideTill; i++) {
                self.load(i);
            }
        });
    }

    /* Load the given slide image */
    this.load = function (slide) {
        var item = self.find(".carousel-inner > .item").eq(slide);
        var image = item.find("img[data-carousel-lazyloader-src]");

        if (image.length > 0) {
            var source = image.data("carousel-lazyloader-src");
            image.attr("src", source).removeAttr("data-carousel-lazyloader-src");
        }
    }

    this.init();
};