jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/cpb/001.jpg",
        "name" : "CPBCPB肌肤之钥钻石光感隔离霜妆前乳清爽滋润",
        "content" : "白管美白防晒型/黑短管清爽型/黑长管滋润型",
        "size" : "30ml/30ml/36ml",
        "price" : "6480日元",
    },{
        "image" : "images/cpb/002.jpg",
        "name" : "CPB钻光粉底霜",
        "content" : "轻松提亮肤色，时间越久妆越自然<br>OC00 OC10 OC20 OC00 <br> PO10 PO20 PO30 BO20",
        "size" : "25g",
        "price" : "12960日元",
    },{
        "image" : "images/cpb/003.jpg",
        "name" : "CPB肌肤之钥沁肌紧肤蜜(水磨精华)",
        "content" : "控油、紧致毛孔<br>改善闭口、平整粗糙",
        "size" : "170ml",
        "price" : "9180日元",
    },{
        "image" : "images/cpb/004.jpg",
        "name" : "CPB金致乳霜",
        "content" : "蕴含多种尖端特殊成分，有效改善各种肌肤烦恼",
        "size" : "30g",
        "price" : "64800日元",
    },{
        "image" : "images/cpb/005.jpg",
        "name" : "CPB精华基底液",
        "content" : "具有强大修复力均匀肤色有效去黄2017新包装",
        "size" : "40ml",
        "price" : "27000日元",
    },
    {
        "image" : "images/cpb/006.jpg",
        "name" : "CPB泡沫洁面乳",
        "content" : "滋润型/清爽型",
        "size" : "125g",
        "price" : "5400日元",
    },
    {
        "image" : "images/cpb/007.jpg",
        "name" : "CPB日夜乳",
        "content" : "日乳有SPF25的防晒指数，夜乳提高肌肤代谢唤回细胞再生",
        "size" : "125ml",
        "price" : "日乳11880日元/夜乳14040日元",
    },
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