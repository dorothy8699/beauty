jQuery(document).ready(function(){
    var json = [{
        "image" : "images/pola/001.jpg",
        "name" : "pola局部美白精华",
        "content" : "局部美白精华霜卓越的渗透力和吸收性,集中、持续长达24小时不间断地向肌肤底层的麦拉宁母细胞输送美白成分,发挥成倍密集美白效果。",
        "size" : "20g",
        "price" : "12960日元",
    },
    {
        "image" : "images/pola/002.jpg",
        "name" : "pola黑BA眼霜",
        "content" : "有效改善眼周皱纹、、细纹、上眼皮松弛、眼袋、黑眼圈等问题,BA的高端全效眼霜,让眼部多一个特别的选择,完美你的皮肤护理程序和美容效果。",
        "size" : "18g",
        "price" : "21600日元",
    },
    {
        "image" : "images/pola/003.jpg",
        "name" : "pola Witness美白防晒",
        "content" : "是一款药用抗紫外线的美白脸部的美容液,也可以用于身体。 在防晒的同时享受美白护理和肌肤紧致。轻薄的乳白色液体,非常清爽,上脸后成膜快且干爽,具有良好的控油效果。",
        "size" : "50ml",
        "price" : "4104日元",
    },
    {
        "image" : "images/pola/004.jpg",
        "name" : "pola 新版防脱护色预防白发洗发水/护发素",
        "content" : "超好用的洗发水,味道也挺特别,泡沫丰富,主要是作为每天洗头的人,感觉换了pola的洗护发之后头发可以清爽一整天,这么热的天气出汗也没有关系,特别值得入手。",
        "size" : "370ml/370ml",
        "price" : "3132日元/3132日元",
    },
    {
        "image" : "images/pola/005.jpg",
        "name" : "pola B.A夏之晨光美白线",
        "content" : "B.A晨光美白化妆水,B.A晨光美白乳液,B.A晨光美白泡沫面膜,B.A晨光抗糖化防晒乳。纳米渗透技术,感受如雾般的迅速吸收,达到深层滋润。抵御肌肤夏乏,塑造水润弹性,清透白皙,充满光泽的肌肤。",
        "size" : "120ml/80ml/80ml/50ml",
        "price" : "21600日元/21600日元/8640日元/8640日元",
    },
    {
        "image" : "images/pola/006.jpg",
        "name" : "pola 黑BA免洗泡沫面膜",
        "content" : "pola黑BA泡沫面膜,业界首创的压入即融泡沫面膜,唤醒休眠细胞 张力 饱满 弹性 焕活新生肌 高密闭性泡沫 达到纸质面膜无法媲美的紧贴性",
        "size" : "60g",
        "price" : "21600日元",
    },
    {
        "image" : "images/pola/007.jpg",
        "name" : "pola 馥美洗发水&护发液",
        "content" : "无硅配方却能产生浓密细致的弹力泡沫,奢华裹覆每一根发丝,防止摩擦损伤,保证秀发柔顺；深层清洁,排出堆积头皮的有害糖化物、过氧化油脂和难清除的硅胶,提高有效成分的渗透；紧致头皮,固养发根,带来舒爽实感。",
        "size" : "洗发水250ml/护发液240g",
        "price" : "2592日元(洗发水+护发液)",
    },
    {
        "image" : "images/pola/008.jpg",
        "name" : "pola 美白丸",
        "content" : "这款美白丸纯植物提取,从身体内部美白,全身美白,新版美白丸增强了淡斑功效,是最安全健康有效的美白丸,有经济能力的选这款最好了。",
        "size" : "60粒(1天2粒约1个月份/180粒（1天2粒约3个月份）)`",
        "price" : "6696日元/17820日元",
    },
    {
        "image" : "images/pola/009.jpg",
        "name" : "pola 抗糖化口服液",
        "content" : "pola抗糖化口服液,从根本上清除代谢糖化物质,提高细胞代谢能力。通过内服方式,让BA的抗糖化精华深入身体内服,有效作用全身,抵抗身体的糖化过程。从里到外让皮肤拥有自身的最优状态。",
        "size" : "1箱20ml*12瓶",
        "price" : "9504日元",
    },
    {
        "image" : "images/pola/010.jpg",
        "name" : "pola 健美三泉",
        "content" : "蜂王浆女王元气丸/补气血营养丸/灵芝水循环营养丸",
        "size" : "180粒子x3包",
        "price" : "52704日元",
    },
    {
        "image" : "images/pola/011.jpg",
        "name" : "pola 极光焕发精华",
        "content" : "B.A殿堂级奢华品质,开创抗老新纪元。将岁月的痕迹转化为肌肤光辉的“自噬循环®”机制为切入点,POLA独创保湿成分“甘茶精华”,促进细胞自噬循环的活性,提高老废物的分解速度,增加极光粒子的生成,肌肤由内而外通透光泽。",
        "size" : "50g",
        "price" : "77760日元",
    },
    {
        "image" : "images/pola/012.jpg",
        "name" : "pola B.A光彩精华液",
        "content" : "多年来亮泽肌肤都成为女士追求的重要目标,特别是25岁以后的轻熟女们都纷纷使出浑身解数去追上肌肤衰老的速度",
        "size" : "40ml",
        "price" : "21600日元",
    },
    {
        "image" : "images/pola/013.jpg",
        "name" : "pola 黑BA赋颜晨光美容面霜30g",
        "content" : "抗老抗糖化,增强皮肤弹性,保湿,提拉紧致,淡化细纹",
        "size" : "30g",
        "price" : "34560日元",
    },
    {
        "image" : "images/pola/014.jpg",
        "name" : "pola 晶致光耀美容霜",
        "content" : "POLA V RESONATIC CREAM,强化皮下细胞组织,让肌肤更有立体感",
        "size" : "50g",
        "price" : "62640日元",
    },
    {
        "image" : "images/pola/015.jpg",
        "name" : "pola 维丝美白洁面泡沫",
        "content" : "维丝美白洁面泡沫,实现高效净化效果的同时,兼具“美白泡沫面膜”功效。富含美白有效成分的浓密慕斯状泡沫,涂抹瞬间紧密包裹肌肤,冲洗后即刻导向通透明亮、水润柔软的美肌。",
        "size" : "90g",
        "price" : "5940日元",
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