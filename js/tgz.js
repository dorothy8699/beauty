jQuery(document).ready(function(){
    var json = [ {
        "content" : "等待上线",
    }
    ];

    var str = "";

    jQuery.each(json, function(idx, obj) {
        str = str + '<div class="col-sm-6 col-md-4 thumb">' +
        '<div class="thumbnail">' + 
            '<div class="caption">' + 
                                '<p>'+obj.content+'</p>' +
            '</div>' +
            '</div>' +
        '</div>';
    });


    jQuery('#content-area').html(str);

    jQuery('#content-area').imagesLoaded(function() {
      jQuery('#content-area').masonry({
        columnWidth: '.thumb',
        itemSelector: '.thumb'
      });
    });

    baguetteBox.run('.tz-gallery');
});