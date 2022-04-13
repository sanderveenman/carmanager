var currentAdvertentie  = 0;
var nextAdvertentie = 1;
var aantalAdvertenties = 0;
var pauseTime = 6000;
var sMeerinfo = '+ Meer info';
var sMinderinfo = '- Minder info';
var sMeerLeaseinfo = '+ Meer lease info';
var sMinderLeaseinfo = '- Minder lease info';

function slideAdvertenties() {
	$("#laatste_advertenties ul").eq(currentAdvertentie).fadeOut(300, function(){
		$("#laatste_advertenties ul").eq(nextAdvertentie).fadeIn(300, function(){
			currentAdvertentie = nextAdvertentie;
			nextAdvertentie = (nextAdvertentie + 1) % aantalAdvertenties;
			//console.log("nu: "+currentAdvertentie+" straks: "+nextAdvertentie);
			setTimeout("slideAdvertenties()",pauseTime);
		});
	});
}

/**
* Get the value of a cookie with the given name.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String name The name of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

$(document).ready(function () {

    //Als er een video geladen moet worden
    if (true == $.isFunction($.fn.initVideo)) { $('#auto-video').initVideo() };

    $('a.link_meer_fotos:first').bind('click', function () {
        $('ul.foto_thumbs:first a:first').trigger('click');
    });

    // Extra opties slider
    $("a.link_extra_opties").click(function () {
        if ($("#extra_opties").is(":hidden")) {
            $("#extra_opties").slideDown(300);
        } else {
            $("#extra_opties").slideUp(300);
        }
        return false;
    });

    $("a.link_automerken").click(function () {
        if ($("#automerken").is(":hidden")) {
            $("#automerken").slideDown(300);
        } else {
            $("#automerken").slideUp(300);
        }
        return false;
    });

    // laatste advertenties cycle
    aantalAdvertenties = $("#laatste_advertenties ul").length;
    setTimeout("slideAdvertenties()", pauseTime);

//    //youtube fancy-box integratie
//    per 9-10-2015 verhuisd naar de pagina occasions.aspx inline
//    $(".youtube_video").click(function () {
//        $.fancybox({
//            'padding': 0,
//            'autoScale': false,
//            'transitionIn': 'none',
//            'transitionOut': 'none',
//            'title': this.title,
//            'width': 680,
//            'height': 495,
//            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
//            'type': 'swf',
//            'swf': {
//                'wmode': 'transparent',
//                'allowfullscreen': 'true'
//            }
//        });

//        return false;
//    });

    $(".verzekeren").fancybox({
        'autoScale': false,
        'width': 760,
        'height': 525
    });

    //Multi formulier instellen
    $("#ad_contact_soort_contact").bind("change", function () {
        var frm;
        frm = $(this).val();
        $(".formulier ul li").each(function () {
            if (!$(this).hasClass(frm)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        var nHeight;
        nHeight = $(".formulier").height();
        $("#ad_auto_contact").height(nHeight);
    });

    $(".formulier ul li").each(function () {
        var frm;
        if ($("#ad_contact_soort_contact").length > 0) {
            frm = $("#ad_contact_soort_contact").val();
            if (!$(this).hasClass(frm)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        }
        var nHeight;
        nHeight = $(".formulier").height();
        $("#ad_auto_contact").height(nHeight);
    });

    //Facebook delen/aanraden goedzetten wordt nog gebruikt 
    var face_url = '//www.facebook.com/sharer/sharer.php';
    face_url += '?';
    face_url += 'u=' + encodeURIComponent($('meta[property="og:url"]').attr('content'));
    //face_url += '&u=' + window.location.href;
    //$('li', $('ul.foto_thumbs')).each(function(index, value) {
    //    face_url += '&p[images][' + index + ']=' + $('a', this).attr('href');
    //});
    //face_url += '&p[title]=' + $('h2.header_uitvoering').text();
    //face_url += '&p[summary]=' + $('meta[name="description"]:last', 'head').attr('content');

    $("a[name='fb_share']")
    .attr('onclick', 'javascript:window.open(this.href, \'facebook\', \'width=600,height=240\'); return false;')
    .attr('href', face_url);


    if ($("a[name='fb_share']").text() == "Delen") {
        $("a[name='fb_share']")
        .text('')
        .append('<img src=\'/img/icons/fb-aanraden.jpg\' style=\'width:86px;height:20px\' alt=\'Aanraden op facebook\'/>')
    }

    var twitterUrl = "http://twitter.com/share?text=&amp;hashtags=&amp;url=" + encodeURIComponent(window.location.href);

    $("a[name='tw_share']")
        .attr('onclick', 'javascript:window.open(\'' + twitterUrl + '\', \'Twitter\', \'width=600,height=400\'); return false;')

    //Meer info
    $("a.meerinfo").click(function () {
        var me = $(this);
        $("#uitgebreidegegevens").slideToggle('slow', function () {
            if (me.text() == sMeerinfo) {
                me.text(sMinderinfo)
            } else {
                me.text(sMeerinfo)
            }
        });
    });
    if ($("#uitgebreidegegevens").is(':visible')) {
        $("a.meerinfo").text(sMinderinfo)
    }

    //Meer leaseinfo
    $("a.meerleaseinfo").click(function () {
        var me = $(this);
        $(".list_lease_info").slideToggle('slow', function () {
            if (me.text() == sMeerLeaseinfo) {
                me.text(sMinderLeaseinfo);
            } else {
                me.text(sMeerLeaseinfo);
            }
        });
    });
    if ($(".list_lease_info").is(':visible')) {
        $("a.meerleaseinfo").text(sMinderLeaseinfo);
    }


});

$.fn.initVideo = function() {

    var holder = $(this);


    var image = $('a.fotogroot:first').children('img:first').clone();
    var overlay = $('<img>').attr('src', '//svl.autodealers.nl/img/video_overlay.png');

    holder.html(image).prepend(overlay);

    overlay.load(function() {

        /*
        * Singronize image and overlay
        */
        var imageHeight = image.height();
        var overlayHeight = overlay.height();

        var middle = imageHeight < overlayHeight ?
				  (overlayHeight - imageHeight) / 2 : 0;

        image.css({
            'marginTop': middle + 'px'
        })

        /*
        * Holder cannot be larger than overlay
        * so that holder can have css property
        * overflow hidden and image will not be
        * visible if image is bigger than holder
        */
        holder.height(overlay.height());

    });

    /*
    * Binds the replacing of the contents of holder
    * with the iframe. 
    */
    holder.bind('click', function() {

        var url = '//xml.autodealers.nl/swf/autovideo.aspx'
		+ '?aid=' + holder.attr('rel')
		+ '&width=' + holder.width()
		+ '&height=' + holder.height()
		+ '&autostart=ja';

        var movie = $('<iframe>');
        movie.attr('src', url);
        movie.attr('scrolling', 'no');
        movie.attr('frameborder', 0);
        movie.attr('width', holder.width());
        movie.attr('height', holder.height());

        holder.html(movie);
    });

}

$.fn.initFancyVideo = function() {

    var holder = $(this);


        var image = $('a.fotogroot:first').children('img:first').clone();
        var overlay = $('<img>').attr('src', '/img/video_overlay.png');

        holder.html(image).prepend(overlay);

        overlay.load(function() {

            /*
            * Singronize image and overlay
            */
            var imageHeight = image.height();
            var overlayHeight = overlay.height();

            var middle = imageHeight < overlayHeight ?
				  (overlayHeight - imageHeight) / 2 : 0;

            image.css({
                'marginTop': middle + 'px'
            })

            /*
            * Holder cannot be larger than overlay
            * so that holder can have css property
            * overflow hidden and image will not be
            * visible if image is bigger than holder
            */
            holder.height(
		overlay.height()
	);

        });

        /*
        * Open the movie in an iframe in fancybox
        */
        holder.bind('click', function() {

            var url = 'http://xml.autodealers.nl/swf/autovideo.aspx'
		+ '?aid=' + holder.attr('rel')
		+ '&autostart=ja';

            $.fancybox.showActivity();
            $.fancybox({
                'type': 'iframe',
                'href': url,
                'width': 440,
                'height': 335
            });
        });

}

/*
* Calculates the size above and left from
* the viewport
*
* @return array x|y
*/
function getPageScroll() {
    var xScroll, yScroll;

    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    }

    else if (document.documentElement && document.documentElement.scrollTop) {
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    }

    else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }

    return new Array(xScroll, yScroll)
}

/*
* Lazy Load - jQuery plugin for lazy loading images
* http://www.appelsiini.net/projects/lazyload
*/
(function(a, b) { $window = a(b), a.fn.lazyload = function(c) { function f() { var b = 0; d.each(function() { var c = a(this); if (e.skip_invisible && !c.is(":visible")) return; if (!a.abovethetop(this, e) && !a.leftofbegin(this, e)) if (!a.belowthefold(this, e) && !a.rightoffold(this, e)) c.trigger("appear"); else if (++b > e.failure_limit) return !1 }) } var d = this, e = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null }; return c && (undefined !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), undefined !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(e, c)), $container = e.container === undefined || e.container === b ? $window : a(e.container), 0 === e.event.indexOf("scroll") && $container.bind(e.event, function(a) { return f() }), this.each(function() { var b = this, c = a(b); b.loaded = !1, c.one("appear", function() { if (!this.loaded) { if (e.appear) { var f = d.length; e.appear.call(b, f, e) } a("<img />").bind("load", function() { c.hide().attr("src", c.data(e.data_attribute))[e.effect](e.effect_speed), b.loaded = !0; var f = a.grep(d, function(a) { return !a.loaded }); d = a(f); if (e.load) { var g = d.length; e.load.call(b, g, e) } }).attr("src", c.data(e.data_attribute)) } }), 0 !== e.event.indexOf("scroll") && c.bind(e.event, function(a) { b.loaded || c.trigger("appear") }) }), $window.bind("resize", function(a) { f() }), f(), this }, a.belowthefold = function(c, d) { var e; return d.container === undefined || d.container === b ? e = $window.height() + $window.scrollTop() : e = $container.offset().top + $container.height(), e <= a(c).offset().top - d.threshold }, a.rightoffold = function(c, d) { var e; return d.container === undefined || d.container === b ? e = $window.width() + $window.scrollLeft() : e = $container.offset().left + $container.width(), e <= a(c).offset().left - d.threshold }, a.abovethetop = function(c, d) { var e; return d.container === undefined || d.container === b ? e = $window.scrollTop() : e = $container.offset().top, e >= a(c).offset().top + d.threshold + a(c).height() }, a.leftofbegin = function(c, d) { var e; return d.container === undefined || d.container === b ? e = $window.scrollLeft() : e = $container.offset().left, e >= a(c).offset().left + d.threshold + a(c).width() }, a.inviewport = function(b, c) { return !a.rightofscreen(b, c) && !a.leftofscreen(b, c) && !a.belowthefold(b, c) && !a.abovethetop(b, c) }, a.extend(a.expr[":"], { "below-the-fold": function(c) { return a.belowthefold(c, { threshold: 0, container: b }) }, "above-the-top": function(c) { return !a.belowthefold(c, { threshold: 0, container: b }) }, "right-of-screen": function(c) { return a.rightoffold(c, { threshold: 0, container: b }) }, "left-of-screen": function(c) { return !a.rightoffold(c, { threshold: 0, container: b }) }, "in-viewport": function(c) { return !a.inviewport(c, { threshold: 0, container: b }) }, "above-the-fold": function(c) { return !a.belowthefold(c, { threshold: 0, container: b }) }, "right-of-fold": function(c) { return a.rightoffold(c, { threshold: 0, container: b }) }, "left-of-fold": function(c) { return !a.rightoffold(c, { threshold: 0, container: b }) } }) })(jQuery, window)

/******************************************
* Autodealers jQuery library
* Copyright Autodealers 2011
******************************************
* versie: 2.0.0
* schrijver: Corben Leek
* 
* omschrijving: Dit is de autodealers
* jQuery library. De plugins in deze 
* library hebben de volgende relaties
* 
* verzendFormulier: 	-> bericht
* 						-> valideerFormulier
* 
* valideerFormulier: 	-> valideerVeld
* 
* Wanneer plugins los gebruikt worden is
* het belangrijk dat benodige plugins ook
* worden bijgevoegd.
*/


/******************************************
* Autodealers verzend jquery plugin
*****************************************/

$.fn.verzendFormulier = function(opties) {

    // root handler
    var root = this;
    // default opties
    var defaults = {
        url: "verzendemail.ashx",
        formulier: "form",
        inputContainer: null,
        customData: null,
        voorVersturen: null,
        naVersturen: null,
        validatie: false,
        validatieWeergave: null,
        markeerVelden: false,
        berichtOpties: null,
        verzendknop: '#ad_contact_submit'
    }

    opties = $.extend(defaults, opties); // overschrijf de defaults

    if (opties.inputContainer == null) { // als er geen input container is
        opties.inputContainer = opties.formulier; // formulier als selector gebruiken
    }

    function submitForm(inputsContainer) {
        data = prepData();
        if (data.length > 0) { // als de data goed is geprepareerd
            // var data = preppedData;
            if ($.isFunction(opties.voorVersturen)) {
                var voorVersturenCallback = opties.voorVersturen.call(this);
                if (voorVersturenCallback == false) {
                    return false;
                }
            }

            var validatieResult;

            if ($.isFunction(opties.validatie)) {
                validatieResult = opties.validatie.call(this, opties.inputContainer);
            } else if (opties.validatie == true) {
                validatieResult = $(opties.inputContainer).valideerFormulier({
                    markeerVelden: opties.markeerVelden
                });
            } else {
                validatieResult = true;
            }

            if (validatieResult == true) {
                $.post(opties.url, data, function(resultaat, textStatus) {
                    if ($.isFunction(opties.naVersturen)) {
                        opties.naVersturen.call(this, resultaat);
                    } else {
                        showBericht(resultaat, "success");
                        return false;
                    }
                });
            } else {
                if ($.isFunction(opties.validatieWeergave)) {
                    opties.validatieWeergave.call(this, validatieResult);
                } else {
                    showBericht(validatieResult, "error");
                    return false;
                }
            }
        }
    } // einde submitForm

    function prepData() {
        var serializedVars = $(opties.formulier).serialize();

        if (typeof opties.customData == "function") {
            serializedVars = opties.customData.call(this, serializedVars);
        }

        return serializedVars;
    } // einde prepData

    function showBericht(berichtText, customClassNaam) {
        if (opties.berichtOpties == null) {
            opties.berichtOpties = {
                customClass: customClassNaam
            };

        } else if (opties.berichtOpties.customClassNaam == null) {
            opties.berichtOpties.customClass = customClassNaam;
        }
        $(root).bericht(berichtText, opties.berichtOpties);
        $(opties.verzendknop).text('Verzenden');
    }

    return submitForm();
}

/******************************************
* einde verzendFormulier jquery plugin
*****************************************/

/******************************************
* Autodealers notify jquery plugin
*****************************************/

$.fn.bericht = function(bericht, opties) {
    var root = this;

    var defaults = {
        x: $(root).offset().left,
        y: $(root).offset().top,
        duur: 0,
        container: "#ad_auto_contact",
        customClass: null,
        fadeInDuur: 150,
        fadeOutDuur: 150,
        boxclass: "adnotify_box",
        statisch: false,
        offset: {
            x: 0,
            y: 0
        },
        submitknop: ".form_submit"
    }

    opties = $.extend(defaults, opties); // overschrijf defaults met opties

    notify_class = "." + opties.boxclass;
    // verwijder ouwe box
    $(notify_class).fadeOut(opties.fadeOutDuur, function() {
        $(this).remove();
    });

    notify_box = $("<div class=\"" + opties.boxclass + "\">" + bericht + "</div>");
    notify_box.hide().appendTo(opties.container);
    if (opties.customClass != null) {
        notify_box.addClass(opties.customClass);
    }

    var boxHeight = notify_box.height() + 20;
    var boxWidth = notify_box.width();
    var wWidth = $(window).width();

    if (opties.submitknop != '') {
        //console.log('y:' + $(opties.submitknop).offset().top + opties.offset.y);
        //console.log('x:' + $(opties.submitknop).offset().left + opties.offset.x + $(opties.submitknop).width() + 30);
        //notify_box.css({ 'top': $(opties.submitknop).offset().top - (boxHeight / 2), 'left': $(opties.submitknop).offset().left - $("#pagewrap").offset().left, 'height': boxHeight }).fadeIn(opties.fadeInDuur);
        notify_box.css({ 'top': '50%', 'left': wWidth / 2 - boxWidth / 2, 'height': boxHeight, 'position': 'fixed' }).fadeIn(opties.fadeInDuur);
    } else {
        //notify_box.css({ 'top': opties.y - (boxHeight / 2) + opties.offset.y, 'left': opties.x + opties.offset.x, 'height': boxHeight }).fadeIn(opties.fadeInDuur);
        notify_box.css({ 'top': '50%', 'left': wWidth / 2 - boxWidth / 2, 'height': boxHeight, 'position': 'fixed' }).fadeIn(opties.fadeInDuur);
    }
    if (opties.duur == 0) {
        $("body").bind("click", function() {
            notify_box.fadeOut(opties.fadeOutDuur, function() {
                notify_box.remove();
                notify_box.unbind("click");
            }).unbind("click");
            $("body").unbind("click");
        });
    } else if (opties.statisch == false) {
        t = setTimeout(function() {
            notify_box.fadeOut(opties.fadeOutDuur, function() {
                notify_box.remove();
                clearTimeout(t);
            });
        }, opties.duur);
    }
}

/******************************************
* einde notify jquery plugin
*****************************************/

/******************************************
* Autodealers valideerVeld jquery plugin
*****************************************/

$.fn.valideerVeld = function(opties) {
    var root = this;

    var defaults = {
        soortVeld: null,
        customLabel: null,
        errors: {
            email: {
                ongeldig: "Ingevoerde email is ongeldig",
                missend: "Er is geen email ingevoerd"
            },
            telefoon: {
                ongeldig: "Ingevoerd telefoonummer is ongeldig",
                missend: "Er is geen telefoonnummer ingevoerd"
            },
            postcode: {
                ongeldig: "Ingevoerd postcode is ongeldig",
                missend: "Er is geen postcode ingevoerd"
            },
            prijs: {
                ongeldig: "Ingevoerde prijs is ongeldig",
                missend: "Er is geen prijs ingevoerd"
            },
            text: {
                ongeldig: "Ingevoerde tekst is ongeldig",
                missend: "Er is geen tekst ingevoerd"
            }
        }
    };

    // labels updaten voor text fields

    defaults.errors.prijs.ongeldig = "Ingevoerde " + genereerLabel() + " is ongeldig";
    defaults.errors.prijs.missend = "Er is geen " + genereerLabel() + " ingevoerd";
    defaults.errors.text.ongeldig = "Ingevoerde " + genereerLabel() + " is ongeldig";
    defaults.errors.text.missend = "Er is geen " + genereerLabel() + " ingevoerd";

    opties = $.extend(defaults, opties);

    if (opties.soortVeld == null) {
        opties.soortVeld = parseClasses();
    }

    function valideer() {
        switch (opties.soortVeld) {
            case "email":
                if (valideerEmail()) {
                    return true;
                } else {
                    return genereerError();
                }
                break;
            case "telefoon":
                if (valideerTelefoon()) {
                    return true;
                } else {
                    return genereerError();
                }
                break;
            case "postcode":
                if (valideerPostcode()) {
                    return true;
                } else {
                    return genereerError();
                }
                break;
            case "prijs":
                if (valideerPrijs()) {
                    return true;
                } else {
                    return genereerError();
                }
                break;
            case "text":
                if (valideerText()) {
                    return true;
                } else {
                    return genereerError();
                }
                break;
            default:
                return false;
                break;
        }
    }

    function genereerError() {
        var error_object = {};
        error_object.veldNaam = $(root).attr("name");
        if ($(root).val().length < 1) {
            error_object.error_bericht = opties.errors[opties.soortVeld].missend;

        } else {
            error_object.error_bericht = opties.errors[opties.soortVeld].ongeldig;
        }
        return error_object;
    }

    function genereerLabel() {
        // check voor customLabel
        if (defaults.customLabel != null) { // geen custom label
            return defaults.customLabel;
        } else {
            // check voor label gekoppeld aan de input
            var inputID = $(root).attr("id");
            var labelSelector = "label[for=" + inputID + "]";

            if ($(labelSelector).length > 0) { // als er een label gevonden wordt
                // check voor title
                //console.log(labelSelector);
                if ($(labelSelector).attr("title") != undefined) { // als er een title in de label zit
                    return $(labelSelector).attr("title").toLowerCase();
                } else {
                    // verwerk label
                    var pattern = /[\*\s]+/;
                    var strippedLabel = $(labelSelector).text().replace(pattern, "").toLowerCase();
                    return strippedLabel;
                }
            } else {
                return "default tekst";
            }
        }
    }

    function parseClasses() {
        if ($(root).hasClass("email")) {
            return "email";
        } else if ($(root).hasClass("telefoon")) {
            return "telefoon";
        } else if ($(root).hasClass("postcode")) {
            return "postcode";
        } else if ($(root).hasClass("prijs")) {
            return "prijs";
        } else {
            return "text";
        }
    }

    function valideerEmail() {
        var emailPattern = /^[A-Za-z0-9_\-.]+@[A-Za-z0-9_\-.]+\.[A-Za-z]{2,4}$/;
        return emailTest = emailPattern.test($(root).val());
    }

    function valideerTelefoon() {
        var telefoonPattern = /^(\+)?[0-9]{8,}$/;
        var strippedTelefoon = $(root).val().replace(/[\(\)\s-]/g, "");
        return telefoonTest = telefoonPattern.test(strippedTelefoon);
    }

    function valideerPostcode() {
        var postcodePattern = /^[0-9]{4}[\s]*[A-Za-z]{2}$/;
        return postcodeTest = postcodePattern.test($(root).val());
    }

    function valideerPrijs() {
        var prijsPattern = /^[\d]+$/;
        var strippedPrijs = $(root).val().replace(/[a-zA-Z\,\-\s\.]/g, "");
        return prijsTest = prijsPattern.test(strippedPrijs);
    }

    function valideerText() {
        var textPattern = /^([\s]*)?[\w\-\_]+([\s\w\-\_]+)?$/;
        return textTest = textPattern.test($(root).val());
    }

    return valideer();

}

/******************************************
* einde valideerVeld jquery plugin
*****************************************/

/******************************************
* Autodealers valideerFormulier jquery plugin
*****************************************/

$.fn.valideerFormulier = function(opties) {
    var root = this;

    var defaults = {
        markeerVelden: false,
        errorClass: "error"
    }

    opties = $.extend(defaults, opties); // defaults overschrijven met opties

    function valideer() {
        var valideerBericht = true;
        var valideerResultaten = [];

        $(root).find("input:text").each(function(i) { // voor elk veld wat gevonden wordt
            verwijderMarkering(this);
            if ($(this).hasClass("verplicht") && $(this).is(':visible')) { // als veld verplicht is en zichtbaar, valideren
                valideerResultaten[valideerResultaten.length] = $(this).valideerVeld();
            } else if ($(this).val().length > 0) { // alleen als er iets is ingevoerd valideren wanneer niet verplicht
                valideerResultaten[valideerResultaten.length] = $(this).valideerVeld();
            }
        });

        for (var i = 0; i < valideerResultaten.length; i++) {
            if (valideerResultaten[i] != true) {
                if (valideerBericht == true) {
                    valideerBericht = valideerResultaten[i].error_bericht + "<br />";
                } else {
                    valideerBericht += valideerResultaten[i].error_bericht + "<br />";
                }

                if (opties.markeerVelden == true) {
                    markeerVeld(valideerResultaten[i].veldNaam);
                }
            }
        }

        return valideerBericht;
    }

    function markeerVeld(veldNaam) {
        var inputObject = $("input[name=" + veldNaam + "]");
        inputObject.addClass(opties.errorClass);

        inputObject.bind("focus", function() {
            inputObject.removeClass(opties.errorClass);
            inputObject.unbind("focus");
        });
    }

    function verwijderMarkering(veldObject) {
        $(veldObject).removeClass(opties.errorClass);
    }

    return valideer();
}

/******************************************
* einde valideerFormulier jquery plugin
*****************************************/

var detailTabs;

function valideerEmail(inputObject) {
    var emailPattern = /^[A-Za-z0-9_\-.]+@[A-Za-z0-9_\-.]+\.[A-Za-z]{2,4}$/;
    return emailTest = emailPattern.test(inputObject.val());
}

function valideerTelefoon(inputObject) {
    var telefoonPattern = /^(\+)?[0-9]{8,}$/;
    var strippedTelefoon = inputObject.val().replace(/[\(\)\s-]/g, "");
    return telefoonTest = telefoonPattern.test(strippedTelefoon);
}

function valideerText(inputObject) {
    var textPattern = /^[A-Za-z]{2,}([\sA-Za-z]+)?$/;
    return textTest = textPattern.test(inputObject.val());
}

function valideerInput(inputObject) {
    if (inputObject.hasClass("email") && $(this).is(':visible')) {

        if (valideerEmail(inputObject)) {
            inputObject.next(".validatie_tooltip").addClass("valid");
        } else {
            inputObject.next(".validatie_tooltip").removeClass("valid");
        }

    } else if (inputObject.hasClass("telefoon") && $(this).is(':visible')) {

        if (valideerTelefoon(inputObject)) {
            inputObject.next(".validatie_tooltip").addClass("valid");
        } else {
            inputObject.next(".validatie_tooltip").removeClass("valid");
        }
        // validatie van telefoon nummer
    } else {

        if (valideerText(inputObject)) {
            inputObject.next(".validatie_tooltip").addClass("valid");
        } else {
            inputObject.next(".validatie_tooltip").removeClass("valid");
        }
    }
}

function verstuurFormulier(inputObject) {
    // check of er voldoende inputs correct zijn ingevoerd
    var invalidInput = 0;
    var formulier = inputObject.parents("form");
    var inputs = formulier.find(".contact_inputs input");
    //console.log(inputs);

    if (($("form .contact_inputs").find("#contact_form_telefoon").val().length <= 0) && ($("form .contact_inputs").find("#contact_form_email").val().length <= 0)) {
        // Beide vereiste velden zijn leeg, error
        //console.log("telefoon en email zijn beide leeg");
        displayError("Vul of een telefoonnummer of een emailadres in");
        $("form .contact_inputs").find("#contact_form_telefoon").focus();
        return false;
    } else {
        // Telefoon nummer of email is ingevuld.
        // Bepaal welke input leeg is
        if ($("form .contact_inputs").find("#contact_form_telefoon").val().length <= 0) {
            // telefoon is leeg, Email valideren
            if (valideerEmail($("form").find("#contact_form_email")) == false) {
                // email niet valid, niet versturen
                displayError("Email niet geldig");
                $("form .contact_inputs").find("#contact_form_email").focus();
                return false;
            } else if (($("form .contact_inputs").find("#contact_form_naam").val().length > 0) && (valideerText($("form .contact_inputs").find("#contact_form_naam")) == false)) {
                // de ingevulde naam is ongeldig
                displayError("De ingevoerde naam is ongeldig");
                $("form .contact_inputs").find("#contact_form_naam").focus();
                return false;
            } else {
                // Email is correct ingevoerd
                // Telefoon is leeg
                // Naam is correct ingevoerd
                postForm(formulier);
            }
        } else if ($("form .contact_inputs").find("#contact_form_email").val().length <= 0) {
            // email is leeg, telefoon valideren
            if (valideerTelefoon($("form .contact_inputs").find("#contact_form_telefoon")) == false) {
                // telefoon niet valid, niet versturen
                displayError("Telefoon niet geldig");
                inputs.eq(1).focus();
                return false;
            } else if (($("form .contact_inputs").find("#contact_form_naam").val().length > 0) && (valideerText($("form .contact_inputs").find("#contact_form_naam")) == false)) {
                // de ingevulde naam is ongeldig
                displayError("De ingevoerde naam is ongeldig");
                $("form .contact_inputs").find("#contact_form_naam").focus();
                return false;
            } else {
                // Email is leeg
                // Telefoon is correct ingevoerd
                // Naam is correct ingevoerd
                postForm(formulier);
            }
        } else {
            // Email en telefoon beide valideren
            if (valideerTelefoon($("form .contact_inputs").find("#contact_form_telefoon")) == false) {
                // telefoon niet valid, niet versturen
                displayError("Telefoon niet geldig");
                inputs.eq(1).focus();
                return false;
            } if (valideerEmail($("form").find("#contact_form_email")) == false) {
                // email niet valid, niet versturen
                displayError("Email niet geldig");
                inputs.eq(2).focus();
                return false;
            } else if (($("form .contact_inputs").find("#contact_form_naam").val().length > 0) && (valideerText($("form .contact_inputs").find("#contact_form_naam")) == false)) {
                // de ingevulde naam is ongeldig
                displayError("De ingevoerde naam is ongeldig");
                inputs.eq(0).focus();
                return false;
            } else {
                // Email is leeg
                // Telefoon is correct ingevoerd
                // Naam is correct ingevoerd
                postForm(formulier);
            }
        }

    }
}
function AjaxFormulier(reqUrl) {
    var root = this;
    this.reqUrl = reqUrl;
    this.container;
    this.prepCustom;
    this.onBeforeSubmit;
    this.onSubmitSuccess;
    this.tooltip;

    this.submitForm = function(inputsContainer) {
        root.container = inputsContainer;
        var data = root.prepData();
        if (data.length > 0) { // als de data goed is geprepareerd
            // var data = preppedData;
            if ($.isFunction(root.onBeforeSubmit)) {
                root.onBeforeSubmit.call(this);
            }

            $.get(root.reqUrl, data, function(resultaat, textStatus) {
                if ($.isFunction(root.onSubmitSuccess)) {
                    root.onSubmitSuccess.call(this, resultaat);
                }
            });

        }
    } // einde submit form

    this.prepData = function() {
        var serializedVars = $(root.container).serialize();

        if (typeof root.prepCustom == "function") {
            serializedVars = root.prepCustom.call(this, serializedVars);
        }

        return serializedVars;
    } // einde prepData
}

var contactForm = new AjaxFormulier("/verzendemail.ashx");

contactForm.onSubmitSuccess = function(data) {
    displayError("Uw reactie is verzonden!");
    t = setTimeout(function() {
        $("#emailform_notify").fadeOut(300);
        clearTimeout(t);
    },
            3000
    );
}
var t;

function postForm(formulier) {
    contactForm.submitForm("form");
}

function displayError(errorMsg) {
    // laat error zien

    var tooltip = $("#emailform_notify");
    tooltip.fadeOut(150, function() {
        tooltip.children().hide();


        tooltip.fadeIn(150, function() {
            tooltip.children(".message").empty().append('<h4>' + errorMsg + '</h4>').fadeIn(150);


            $("form .contact_inputs #contact_form_submit").bind("click", function() {
                $("#emailform_notify").fadeOut(150);
                $("form .contact_inputs #contact_form_submit").unbind("click");
            });
            return true;
        });



    });

    //    t = setTimeout 
    //    ( 
    //            function() 
    //            { 
    //                    $("#emailform_notify").fadeOut(300); 
    //                    clearTimeout(t);
    //            }, 
    //            3000 
    //    );

}

/*
* Opens a child window
* 
* @param url string
* @param width int
* @param height int
* @param options string
* @param name string
* @retun window object
*/
function openWindow(url, width, height, options, name) {
    width = width ? width : 800;
    height = height ? height : 700;
    options = options ? options : 'resizable=yes';
    name = name ? name : 'openWindow';

    // Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var left = ((screen.width / 2) - (width / 2)) + dualScreenLeft;
    var top = ((screen.height / 2) - (height / 2)) + dualScreenTop;
    var myWindow = window.open(
                       url,
                       name,
                       'screenX=' + (screen.width - width) / 2 +
                ', screenY=' + (screen.height - height) / 2 +
                ', top=' + top +
                ', left=' + left +
                ', width=' + width +
                ', height=' + height +
                ',' + options
                );

    // Puts focus on the newWindow
    if (window.focus) {
        myWindow.focus();
    }

    return myWindow;
}



$(document).ready(function() {
    /*****************************************
    ** Contact form transformatie
    ******************************************/

    //$("form#contact_form").jqTransform();
    //$("form#contact_form .jqTransformInputWrapper").attr("style","width: 200px")

    /******************************************
    ** Tabs handler
    ******************************************/

    // custom tabs effect

 //   $.tools.tabs.addEffect("JaapRoodSlide", function(tabIndex, done) {
   //     var currentSize = $("#advertentie_details_content").height();
     //   var newSize = this.getPanes().eq(tabIndex).height();

     //   if (currentSize != newSize) {
            // verschil in grootte tussen tabs = animeren
       //     $("#advertentie_details_content").animate({ height: newSize + "px" }, 350)

       // }

       // this.getPanes().hide().eq(tabIndex).fadeIn(150);
    //});

    // tabs genereren
  //  $("ul#advertentie_details_tabs").tabs(".advertentie_details_pane", {
   //     effect: 'JaapRoodSlide',
    //    fadeInSpeed: 100
    //});

    // tabs handle
    //detailTabs = $("ul#advertentie_details_tabs").tabs(0);
    //var fotoTab = 2; // Index nummer van de meerfoto's tab (-1)

    // meer foto's link
    $("a.advertentie_foto_link").click(function() {
        detailTabs.click(fotoTab); // activeer tab
        topOffset = 35;
        fotoOffset = $("#advertentie_details").offset().top;
        $("html, body").animate({ scrollTop: fotoOffset - topOffset }, 800);
    });

    // meer specificaties
    if ($("#advertentie_overzicht_info ul li.item_hidden").length <= 0) {
        $("a.advertentie_specs_link").hide();
    }

    $("a.advertentie_specs_link").click(function() {
        $("#advertentie_overzicht_info ul li.item_hidden").slideToggle(250);
        if ($(this).text().substr(0, 4) == "Meer") {
            $(this).text("Minder" + $(this).text().substr(4));
        } else {
            $(this).text("Meer" + $(this).text().substr(6));
        }
    });

    // zet de juiste hash link
    $("#advertentie_details_tabs a").click(function() {
        var hash = $(this).attr("href").substr(1);
        window.location.hash = hash;
    });


    /******************************************
    ** Gerelateerde occasions tooltip
    ******************************************/

    $("#advertentie_gerelateerd_content ul li a").tooltip({
        position: ['bottom', 'left'],
        offset: [30, 350],
        effect: 'fade',
        relative: true,
        slideInSpeed: 150,
        slideOutSpeed: 150
    });

    /******************************************
    ** Contact Formulier
    ******************************************/


    // valideer inputs bij typen
    $("form .contact_inputs :text").keyup(function() {
        valideerInput($(this));
    });

    // submit formulier
    $("form .contact_inputs :button").click(function() {
        verstuurFormulier($(this));
        return false;
    });

    // Tooltip op juiste plaats zetten
    $("form .contact_inputs :text").each(function(i) {
        var tooltip = $(this).parents(".contact_inputs").find(".validatie_tooltip:eq(" + i + ")");
        $(this).after(tooltip);
    });

    // Tooltip genereren
    $("form .contact_inputs :text").tooltip({
        position: ['center', 'right'],
        offset: [-5, 33],
        effect: "fade",
        relative: true,
        fadeInSpeed: 150,
        fadeOutSpeed: 150
    });

	
	//Kijken in de SEO lijst of in de detailpagina wel de goede hoogtes staan
	var nHeightLinks;
	var nHeightRechts;
	var objLinks, objRechts;
	objLinks = $('div#autolijst_wrap div#ad_auto_overzicht div.kolom_links');
	objRechts = $('div#autolijst_wrap div#ad_auto_overzicht div.kolom_rechts');

	if (objLinks.length && objRechts.length){
	  //float de linkerkant ul
	  objLinks.height('auto');
	  objLinks.find("ul.foto_thumbs").css('float:left');
	  
	  nHeightLinks = objLinks.height();
	  nHeightRechts = objRechts.height();

	  if (nHeightLinks<nHeightRechts){
		objLinks.height(nHeightRechts);
	  }
	}
	//Einde SEO detail hoogte script 
});

/**
* Sender
*
* Posts the html height to the parent when
* the document load event occurs and again when 
* the window load event occurs. 
* 
* The plugin only works if a Receiver is installed
* in the direct parent window.
* 
* @version 1.0
* @date 13/10/2014
* @author Frank Bonnet
* @date 18/11/2015 aangepast aan resize i-frame
*/

if (self != top) { // Alleen uitvoeren indien het een I-frame is
    (function ($) {

        /**
        * Notify parent of height change
        */
        var PostResizeFrameMessage = function () {
            //console.log("PostResizeFrameMessage Start");
            var _parentWindow = window.parent;
            var _message = {
                id: "ResizeFrame",
                height: $("body").height() + 30 // Body because html is always 150px in IE < 11
            };

            //console.log("PostResizeFrameMessage: " + $(window).height());

            _parentWindow.postMessage(
			_message, "*");
        }

        /**
        * Notify parent to scroll to iframe top
        */
        var PostScrollFrameTopMessage = function (Offset) { /* Iframe ScrollTop */
            var _offsetTop = parseInt(Offset); // Distance between iframe top and window top
            var _parentWindow = window.parent;
            var _message = {
                id: "ScrollFrameTop",
                offsetTop: _offsetTop
            };

            _parentWindow.postMessage(
			_message, "*");
        }

        /**
        * Notify parent to that a load is started
        */
        var PostStartFrameLoad = function () { /* load is started */
            var _parentWindow = window.parent;
            var _message = {
                id: "StartFrameLoad"
            };

            _parentWindow.postMessage(
			_message, "*");
        }

        PostStartFrameLoad();

        /**
        * Notify parent to scroll to window top
        */
        var PostScrollTopMessage = function (Offset, E) { /* Iframe ScrollTop */
            var _offsetTop = parseInt(Offset); // Distance from the parents window top
            var _parentWindow = window.parent;
            var _message = {
                id: "ScrollTop",
                offsetTop: _offsetTop,
                frameEvent: E
            };

            _parentWindow.postMessage(
			_message, "*");
        }

        $(function () {
            // Disable scrollbars
            // Zorg ervoor dat alleen de responsive versie overflow:hidden krijgt
            if (typeof bIsResponsive !== 'undefined' && bIsResponsive) {
                $("html,body").css("overflow", "hidden");
            }

            // Resize frame
            if (window.postMessage) {
                //console.log("geladen postmessage");
                var _window = $(window);
                var _isInitialized = false;
                var _heightBuffer;
                var _heightTimer;

                PostScrollTopMessage(0,'onload');

                PostResizeFrameMessage();
                _window.on("load ResizeFrame", function () {

                    //console.log("Buffer start");
                    //console.log('body:' + $("body").height());
                    //console.log('document:' + $(document).height());
                    //console.log('html:' + $("html").height());
                    //console.log('document outerheight:' + $(document).outerHeight());
                    //console.log('body outerheight:' + $("body").outerHeight());
                    //console.log('html outerheight:' + $("html").outerHeight());

                    PostResizeFrameMessage();
                    _isInitialized = true;
                });

                _window.on("resize", function () {
                    if (_isInitialized) {
                        _heightBuffer = $("body").height();
                        clearTimeout(_heightTimer);
                        _heightTimer = setTimeout(function () {
                            if (_heightBuffer == $("body").height()) {
                                PostResizeFrameMessage();
                            }
                        }, 1000);
                    }
                });
            }

            // Scroll frame top listener
            $(window).on("ScrollFrameTop", function (e, Offset) { /* Iframe ScrollTop */
                PostScrollFrameTopMessage(Offset);
            });

            // Scroll window top listener
            $(window).on("ScrollTop", function (e, Offset) { /* Iframe ScrollTop */
                PostScrollTopMessage(Offset);
            });

        });
    })(jQuery);

}


function log(waarde) {
   if (window.console && console.log(waarde)) {
            console.log(waarde)
   } else {
       alert(waarde); 
   }
}
