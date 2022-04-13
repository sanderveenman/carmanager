// jQuery plugin - Simple RSS Aggregator
(function($){
    $.fn.aRSSFeed = function() {
        return this.each( function(){
            var base_url = window.location.origin + '/titleautos/';
            var $Cont = $(this);
            var iMaxNum = parseInt($Cont.attr( 'rssnum' ) || 0);
            var sFeedURL = $Cont.attr('rss_url');
            

            if (sFeedURL == undefined)
                return false;

            $.getFeed ({
                url: base_url + 'dist/php/get_rss_feed.php?url=' + escape(sFeedURL),
                success: function(feed) {

                if (feed != undefined && feed.items) {
                    
                        var sCode =
                            '<div class="rss_feed_wrapper">';
                        var iCount = 0;
                        for (var iItemId = 0; iItemId < feed.items.length; iItemId ++) {
                            
                            var element = $(feed.items);
                            
                            var attributes = {};
                            element.get(0).attributes, function(i, attrib){
                            attributes[attrib.name] = attrib.value;
                            console.log('pop');
                            };
                             
   
    
                            
                            var item = feed.items[iItemId];
                          console.log(JSON.stringify(item));
                            var sDate;
                            var a;
                            var oDate

                            if (null != (a = item.updated.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/)))
                                oDate = new Date(a[1], a[2]-1, a[3], a[4], a[5], a[6], 0);
                            else
                                oDate = new Date(item.updated);
                            sDate = oDate.toLocaleString();

                            sCode +=
                                '<div class="rss_item_wrapper">' +
                                    '<div class="rss_item_header">' +
                                        '<a href="' + item.link + '" target="_blank">' + item.title + '</a>' +
                                    '</div>' +
                                    '<div class="rss_item_info">' +
                                        '<span><img src="../dist/images/clock.png" /> ' + sDate + '</span>' +
                                    '</div>' +
                                    '<div class="rss_item_desc">' + item.description + '</div>' +
                                '</div>';

                            iCount ++;
                            if (iCount == iMaxNum) break;
                        }

                        sCode +=
                            '</div>' +
                            '<div class="rss_read_more">' +
                                '<img class="bot_icon_left" src="../test/dist/images/more.png" />' +
                                '<a href="' + feed.link + '" target="_blank" class="rss_read_more_link">' + feed.title + '</a>' +
                            '</div>' +
                            '<div class="clear_both"></div>';
                        
                        $Cont.html(sCode);
                    }
                }
           

            } );
        } );
    };


})(jQuery);
