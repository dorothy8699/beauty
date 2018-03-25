jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/hirosophy/001.png",
        "name" : "鱼子酱面膜",
        "content" : "透明质酸、胶原（保湿成分）渗透肌肤各层细胞",
        "size" : "1片",
        "price" : "951日元",
    },
    {
        "image" : "images/hirosophy/002.png",
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
        "image" : "images/hirosophy/004.png",
        "name" : "CB精华液 40mL/CB粉末 8g",
        "content" : "被誉为“神的胎盘”—希洛索菲胎盘直击肌肤！",
        "size" : "40mL/8g",
        "price" : "2支套装价16200日元/CB精华液8100日元/CB粉末8100日元",
    },
    {
        "image" : "images/hirosophy/005.png",
        "name" : "清洁精华液(左一)",
        "content" : "含65种美容成分的奢华滋润洁面,1支即可达到3种功效（洁面、卸妆、卸除重点彩妆）",
        "size" : "150ml",
        "price" : "4860日元",
    },
    {
        "image" : "images/hirosophy/006.png",
        "name" : "樱花美容液化妆水",
        "content" : "化妆水、乳液、美容液3合1化妆水",
        "size" : "100ml",
        "price" : "8100日元",
    },
    {
        "image" : "images/hirosophy/007.jpg",
        "name" : "QC硫辛酸+",
        "content" : "燃烧脂肪型减肥×抗衰老,消除生活习惯病和老化的最大原因物质：身体的“锈物”（活性氧）",
        "size" : "90粒／约1个月量",
        "price" : "6264日元",
    },
    {
        "image" : "images/hirosophy/008.png",
        "name" : "樱花C系霜",
        "content" : "配合维生素A、C、E（美肌成分）的“复合维生素霜”",
        "size" : "30g",
        "price" : "8640日元",
    },
    {
        "image" : "images/hirosophy/009.png",
        "name" : "樱花眼霜",
        "content" : "防止眼周、嘴周皮肤干燥,淡化眼周、嘴角细纹",
        "size" : "15ml",
        "price" : "11880日元",
    },
    {
        "image" : "images/hirosophy/010.png",
        "name" : "樱花蛇毒眼膜",
        "content" : "去黑眼圈 去眼袋 眼部抗皱",
        "size" : "60片",
        "price" : "12960日元",
    },
    {
        "image" : "images/hirosophy/011.png",
        "name" : "樱花膏状香水",
        "content" : "留香持久,能持续一整天的芳香",
        "size" : "8g",
        "price" : "2052日元",
    },
    {
        "image" : "images/hirosophy/012.png",
        "name" : "补水精华液",
        "content" : "适合超级敏感肌肤的安心保湿精华液3种透明质酸渗透肌肤深层进行全面保湿",
        "size" : "40ml",
        "price" : "7560日元",
    },
    {
        "image" : "images/hirosophy/013.png",
        "name" : "美白精华乳液",
        "content" : "美白+美容液+乳液护理3合1",
        "size" : "30g",
        "price" : "8640日元",
    },
    {
        "image" : "images/hirosophy/014.png",
        "name" : "蜜桃薄纱UV",
        "content" : "老化护理6合1的UV霜",
        "size" : "30g",
        "price" : "4860日元",
    },
    {
        "image" : "images/hirosophy/015.png",
        "name" : "CR洗发水/CR护发素",
        "content" : "修护毛发头皮",
        "size" : "280ml",
        "price" : "3024日元/3024日元",
    },
    {
        "image" : "images/hirosophy/016.png",
        "name" : "育发滋养液",
        "content" : "生发物质胎盘极限配合!最高品质的育发液!",
        "size" : "150ml",
        "price" : "8100日元",
    },
    {
        "image" : "images/hirosophy/017.png",
        "name" : "原末胎盘/胎盘MAX",
        "content" : "顶级抗衰老产品粉末/保持原末胎盘功效的胎盘片剂",
        "size" : "31g/120粒",
        "price" : "9800日元/9800日元",
    },
    {
        "image" : "images/hirosophy/018.png",
        "name" : "神的胎盘饮品",
        "content" : "更加适合饮用的胎盘饮品",
        "size" : "50ml／支,共10支",
        "price" : "4800日元",
    },
    {
        "image" : "images/hirosophy/019.png",
        "name" : "纳豆菌酵素茶",
        "content" : "1日1包即可达到整肠作用&减肥&抑制衰老",
        "size" : "60g（2g×30袋）",
        "price" : "6264日元",
    },
    {
        "image" : "images/hirosophy/020.png",
        "name" : "纳豆菌+",
        "content" : "配合最强3大有益菌（纳豆菌＆乳酸菌＆酪酸菌）",
        "size" : "90粒／约1个月量",
        "price" : "5184日元",
    },
    {
        "image" : "images/hirosophy/021.png",
        "name" : "纳豆菌＋酵素",
        "content" : "最强3大有益菌＝纳豆菌/乳酸菌/酪酸菌净化肠内环境",
        "size" : "270粒／约3个月量",
        "price" : "15120日元",
    },
    {
        "image" : "images/hirosophy/022.png",
        "name" : "DHA+",
        "content" : "有效摄取体内无法合成的必需脂肪酸",
        "size" : "270粒／约1个月量",
        "price" : "5400日元",
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