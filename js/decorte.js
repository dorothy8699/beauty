jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/decorte/007.jpg",
        "name" : "黛珂保湿美容液",
        "content" : "洗颜后立即使用于脸部肌肤,细微的磷脂质囊体,就会顺滑地渗透至角质深层。美容成分由外侧的磷脂膜开始,层层缓缓释放,令干燥肌肤水嫩莹润。改善肌肤纹理,缔造光滑润泽有张力的肌肤。",
        "size" : "40ml/60ml",
        "price" : "10800日元/14580日元",
    
    },
    {
        "image" : "images/decorte/021.jpg",
        "name" : "黛珂紫苏水",
        "content" : "含有天然植物紫苏叶及其他植物萃取物。",
        "size" : "150ml/300ml",
        "price" : "4860日元/8100日元",
    
    },
    {
        "image" : "images/decorte/001.jpg",
        "name" : "AQ珍萃精颜 悦活洗颜露",
        "content" : "所含丰沛美容成分奢华如精华液的洗颜露，温和洗净，细腻调理角质层。",
        "size" : "200ml",
        "price" : "10800日元",
    },
    {
        "image" : "images/decorte/002.jpg",
        "name" : "黛珂 AQ 珍萃精颜 绮迹眼霜",
        "content" : "眼眸，澄净明亮。点睛之美，改写脸部印象。由内承托的张力，涌现于外的光泽，让肌肤尽享智慧滋养的集中修护眼霜。",
        "size" : "20g",
        "price" : "32400日元",
    },
    {
        "image" : "images/decorte/003.jpg",
        "name" : "牛油果双瓶滋润套组",
        "content" : "锁住以高营养价值的森林黄油,【牛油果油】为首的果实和植物的恩惠。具有柔软剂效果的“精华乳液”。",
        "size" : "150ml*2瓶",
        "price" : "9950日元",
    },
    {
        "image" : "images/decorte/004.jpg",
        "name" : "AQ珍萃精颜悦活乳液",
        "content" : "锁住以高营养价值的森林黄油,【牛油果油】为首的果实和植物的恩惠。具有柔软剂效果的“精华乳液”。",
        "size" : "200ml",
        "price" : "40000日元",
    },
    {
        "image" : "images/decorte/005.jpg",
        "name" : "AQMW亮采美白乳液",
        "content" : "以曲酸防止黑斑的生成，唤醒弹力感和光泽的美白乳液。悉心守护，肌肤再也无惧紫外线等来自外部环境的侵袭，防患黑斑生成于未然的美白乳液。",
        "size" : "200ml",
        "price" : "14100日元",
    },
    {
        "image" : "images/decorte/006.jpeg",
        "name" : "AQMW睿护乳液 滋润型/普通型",
        "content" : "AQMW睿护乳液盈润呵护遍布于干燥肌肤的角质层之间。使寸寸肌理弹动张力的芬醇乳液。",
        "size" : "200ml/200ml",
        "price" : "14100日元/14100日元",
    },
    {
        "image" : "images/decorte/008.jpg",
        "name" : "AQ活力循环乳 滋润型/普通型",
        "content" : "AQ活力循环乳丰润触感遍布每一寸肌肤。令肌肤紧实饱满的柔软乳液。",
        "size" : "200ml/200ml",
        "price" : "18500日元/18500日元",
    },
    {
        "image" : "images/decorte/010.jpg",
        "name" : "AQ珍萃精颜 悦活化妆水",
        "content" : "如水般清澈的透明感和生命的张力，遍及肌肤。深层·持续润泽保湿的至尊保养化妆水",
        "size" : "200ml",
        "price" : "27000日元",
    },
    {
        "image" : "images/decorte/012.jpg",
        "name" : "AQMW睿护化妆水",
        "content" : "涂抹瞬间，呈现臻美肌质。黏蛋白囊体深入肌肤，构筑、强化屏障机能的高机能化妆水。",
        "size" : "200ml",
        "price" : "14100日元",
    },
    {
        "image" : "images/decorte/013.jpg",
        "name" : "AQ珍萃精颜 悦活洁肤霜",
        "content" : "AQ珍萃精颜 悦活洁肤霜以醇厚的质感包裹肌肤，深入洁净彩妆和皮脂，让肌肤悦现清透光泽的洁肤霜。",
        "size" : "150g",
        "price" : "13300日元",
    },
    {
        "image" : "images/decorte/014.jpg",
        "name" : "莹润粹白菁华液",
        "content" : "源自对天然美白有效成分：曲酸的长年研究。独辟蹊径，启用和含羞草决明提取物（保湿）相匹配的曲酸EW。",
        "size" : "20ml/40ml",
        "price" : "10000日元/17500日元",
    },
    {
        "image" : "images/decorte/015.jpg",
        "name" : "黛珂 时光活妍 洗颜霜",
        "content" : "把造成晦暗、发硬的氧化皮脂和老化角质，一并洗净。以质感上乘的泡沫洗出澄净弹密肌。",
        "size" : "125g",
        "price" : "5000日元",
    },
    {
        "image" : "images/decorte/016.jpg",
        "name" : "AQMW洗颜霜",
        "content" : "透明质酸钠绵密而丰沛的泡沫，将污垢和老化角质都裹挟而去，让肌肤澄净柔滑的洗颜霜。",
        "size" : "125g",
        "price" : "7000日元",
    },
    {
        "image" : "images/decorte/017.jpg",
        "name" : "AQMW洗颜皂",
        "content" : "透明质酸钠能牵引出轻盈细丝般的泡沫，盈柔体恤，连老化角质一并去除的洗颜皂。",
        "size" : "100g",
        "price" : "6700日元",
    },
    {
        "image" : "images/decorte/018.jpg",
        "name" : "黛珂 时光活妍 乳液",
        "content" : "由角质层深处开始疏松、柔软，让肌肤变得饱满且光泽四溢。指尖轻触可知的丰盈弹力，缔造弹密肌的乳液",
        "size" : "200ml",
        "price" : "8700日元",
    },
    {
        "image" : "images/decorte/019.jpg",
        "name" : "AQMW精华凝膏",
        "content" : "精选4种天然有机油，百分之百不含水分的纯油制剂。汲取白檀（香精）芬芳，水润沁透，为肌肤孕育优渥润泽的油性面霜。",
        "size" : "22g",
        "price" : "16600日元",
    },
    {
        "image" : "images/decorte/020.jpg",
        "name" : "黛珂时光活妍 美白精华霜(左一)",
        "content" : "醒来，感受因美肌而生的喜悦。缔造明亮、弹润澄光肌的美白面霜。",
        "size" : "30g",
        "price" : "10000日元",
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