jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/tgz/001.jpg",
        "name" : "The Ginza深层卸妆油",
        "content" : "轻柔彻底清洁彩妆及肌肤表层空气污染物",
        "size" : "200ml",
        "price" : "6480日元",
    },
    {
        "image" : "images/tgz/002.jpg",
        "name" : "The Ginza能量化妆水",
        "content" : "赋予肌肤丰富的水份保持滋润",
        "size" : "200ml",
        "price" : "19440日元",
    },
    {
        "image" : "images/tgz/005.png",
        "name" : "The Ginza去角质化妆水",
        "content" : "缔造精致打磨过的透明肌肤",
        "size" : "200ml",
        "price" : "12960日元",
    },
    {
        "image" : "images/tgz/003.jpg",
        "name" : "The Ginza深层护理乳液",
        "content" : "保持肌肤水润平衡的乳液",
        "size" : "150g",
        "price" : "21600日元",
    },
    {
        "image" : "images/tgz/004.jpg",
        "name" : "The Ginza洁面乳洗面奶",
        "content" : "泡沫丰富令肌肤细嫩柔滑",
        "size" : "130g",
        "price" : "6480日元",
    },
    {
        "image" : "images/tgz/006.jpg",
        "name" : "The Ginza收敛化妆水",
        "content" : "收缩毛孔紧致肌肤",
        "size" : "200ml",
        "price" : "16200日元",
    },
    {
        "image" : "images/tgz/007.jpg",
        "name" : "The Ginza至尊保湿眼霜",
        "content" : "收缩毛孔紧致肌肤",
        "size" : "15g",
        "price" : "16200日元",
    },
    ];

    var str = "";

    jQuery.each(json, function(idx, obj) {
        str = str + '<div class="col-sm-6 col-md-4 thumb">' +
        '<div class="thumbnail">' + 
            '<a class="lightbox" href="' + obj.image + '">' +
                '<img src="' + obj.image + '"' +
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