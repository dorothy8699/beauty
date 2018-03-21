jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/sk2/001.jpg",
        "name" : "SK-2神仙水",
        "content" : "SK-II护肤精华露，又称SK-II“神仙水”，是一款流行了数十年的高档化妆品。抗老化、促进新陈代谢、保湿、美白。",
        "size" : "75ml/160ml/230ml",
        "price" : "9180日元/18360日元/23760日元",
    },
    {
        "image" : "images/sk2/002.jpeg",
        "name" : "前男友面膜",
        "content" : "青春敷面膜主打Pitera（即神仙水的主要成分），Pitera浓度较高，功效也比较神奇，敷完皮肤滑嫩细腻。",
        "size" : "6片",
        "price" : "10800日元/",
    },
    {
        "image" : "images/sk2/003.png",
        "name" : "小灯泡",
        "content" : "SK-II环采臻皙钻白精华露。清爽水润的乳液状质地，比一般的乳液可能还要稀薄一些，延展性非常的好。能有效抑制黑色素生成，抑制隐藏斑生长，整体提亮肤色的功效。",
        "size" : "30ml/50ml",
        "price" : "17280日元/24840日元",
    },
    {
        "image" : "images/sk2/004.png",
        "name" : "大红瓶轻盈版/普通版",
        "content" : "修复肌底细胞，去除老废角质，保持肌肤的弹性。还是很适合20+的轻熟龄肌的。",
        "size" : "50g/80g",
        "price" : "12420日元/18360日元",
    },
    {
        "image" : "images/sk2/005.jpg",
        "name" : "肌源修护精华露",
        "content" : "抗老化精华，适合轻熟龄肌肤。将SK-II对干细胞的研究成果，浓缩在ES肌源再生复方中，能够改善肌肤的再生能力，提升细胞活力",
        "size" : "30ml/50ml",
        "price" : "13500日元/19980日元",
    },
    {
        "image" : "images/sk2/006.png",
        "name" : "肌源修护焕采眼霜",
        "content" : "3点眼周肌龄逆转，直击眼底、上眼睑及眼角老化问题",
        "size" : "15g",
        "price" : "11880日元",
    },
    {
        "image" : "images/SK2/001.jpeg",
        "name" : "护肤精华露樱花限量版",
        "content" : "限定发售。 SK-II人气No.1的护肤精华露推出了樱花限定款，瓶身设计灵感取自只有这个季节才能欣赏的美丽优雅的樱花。",
        "size" : "230ml",
        "price" : "19200日元",
    },
    {
        "image" : "images/SK2/002.jpeg",
        "name" : "轻润净透空气防晒霜",
        "content" : "轻润净透空气防护乳30G:清透遮瑕，高倍防晒，焕白护肤，隔离环境污染、伤害。",
        "size" : "30g",
        "price" : "7400日元",
    }
    ];

    var str = "";

    jQuery.each(json, function(idx, obj) {
        str = str + '<div class="col-sm-6 col-md-4 thumb">' +
        '<div class="thumbnail">' + 
        '<a class="lightbox" href="' + obj.image + '">' +
            '<img src="' + obj.image + '" alt="Park">' +
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