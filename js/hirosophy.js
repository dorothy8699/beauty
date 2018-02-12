jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/hirosophy/001.png",
        "name" : "鱼子酱面膜",
        "content" : "透明质酸、胶原（保湿成分）渗透肌肤各层细胞",
        "size" : "1片",
        "price" : "951日元",
    },
    {
        "image" : "images/hirosophy/002.jpg",
        "name" : "樱花珍珠面膜",
        "content" : "象征日本的“樱花”和“珍珠”（pearl）采用日本产樱花花瓣中的提取液给予肌肤如樱花般清新淡雅、珍珠般光滑亮泽",
        "size" : "1片",
        "price" : "422日元",
    },
    {
        "image" : "images/hirosophy/003.png",
        "name" : "蛇毒全能面霜",
        "content" : "「蛇毒、蛋白多糖、透明质酸」（保湿成分）高配合的霜",
        "size" : "30g",
        "price" : "16200日元",
    },
    {
        "image" : "images/hirosophy/004.jpg",
        "name" : "CB精华液 40mL/CB粉末 8g",
        "content" : "被誉为“神的胎盘”—希洛索菲胎盘直击肌肤！",
        "size" : "40mL/8g",
        "price" : "2支套装价16200日元/CB精华液8100日元/CB粉末8100日元",
    },
    {
        "image" : "",
        "name" : "",
        "content" : "正在上线中！",
        "size" : "",
        "price" : "",
    }
    ];

    var str = "";

    jQuery.each(json, function(idx, obj) {
        str = str + '<div class="col-sm-6 col-md-4 thumb">' +
        '<div class="thumbnail">' + 
        '<a class="lightbox" href="' + obj.image + '">' +
            '<img src="' + obj.image + '">' +
        '</a>' + 
            '<div class="caption">' + 
                '<h3>'+obj.name+'</h3>' +
                                '<p>'+obj.content+'</p>' + 
                                '<p>'+obj.size+'</p>' +
                                '<p>'+obj.price+'</p> ' +
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