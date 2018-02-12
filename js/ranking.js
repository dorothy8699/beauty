jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/ranking/001.jpg",
        "name" : "江田水素水杯",
        "content" : "自来水中都含有对人体有害的氯，一般携带型的水素生成器无法隔绝自来水中的氯臭。而江田杯配有特殊陶瓷，可以隔绝氯臭，抗菌并使水变得清甜可口",
        "size" : "295g,容量350cc",
        "price" : "54000日元",
    },
    {
        "image" : "images/ranking/002.jpg",
        "name" : "YAMAN HRF-10T新款提拉紧致抗衰老美容仪",
        "content" : "新一代抗衰美颜神器，加上粉色或黑色的质感设计，获得了雅萌YAMAN粉丝们的热烈追捧。",
        "size" : "",
        "price" : "39960日元",
    },
    {
        "image" : "images/ranking/003.jpg",
        "name" : "ROYAL LARGE脐带血引流精华液胎盘素",
        "content" : "增强肌底自我含水量，醒肤、焕肤、活化、抗氧化。平衡肌肤水油平衡，修复角质层，收缩毛孔，紧致肌肤。",
        "size" : "90包每包1.3ml",
        "price" : "8249日元",
    },
    {
        "image" : "images/ranking/004.jpg",
        "name" : "日本BPC睡眠面膜超声刀睡美人面膜",
        "content" : "",
        "size" : "1盒30个",
        "price" : "18360日元",
    },
    {
        "image" : "images/ranking/005.jpg",
        "name" : "黛珂保湿美容液",
        "content" : "洗颜后立即使用于脸部肌肤，细微的磷脂质囊体，就会顺滑地渗透至角质深层。美容成分由外侧的磷脂膜开始，层层缓缓释放，令干燥肌肤水嫩莹润。改善肌肤纹理，缔造光滑润泽有张力的肌肤。",
        "size" : "40ml/60ml",
        "price" : "10800日元/14580日元",
    
    },
    {
        "image" : "images/ranking/006.jpg",
        "name" : "华雪美白饮",
        "content" : "原材料100%天然纯净，不添加雌激素及化学原料，有效对抗老化、抑制黑色素生成及减缓细胞老化，一次解决肌肤根本问题，并不是那种单纯提亮肤色的白，而是由内而外纯粹的白起来",
        "size" : "20ml x 30包",
        "price" : "16210日元",
    },
    {
        "image" : "images/ranking/007.jpg",
        "name" : "华雪逆龄童颜抗糖饮",
        "content" : "抗糖+逆龄！增厚角质层加强皮肤免疫力扫除体内的糖化，让毛孔变细，皱纹填平",
        "size" : "20ml x 30包",
        "price" : "25000日元",
    },
    {
        "image" : "images/ranking/008.jpg",
        "name" : "EGF童颜丸",
        "content" : "诺贝尔奖白莲花成分有消炎的作用，同时哈密瓜提取物的活性酵素能净化血液的作用，痘痘肌肤推荐使用。",
        "size" : "27g（1包300mg×3粒×30包）",
        "price" : "9720日元",
    },
        {
        "image" : "images/ranking/009.jpg",
        "name" : "资生堂 怡丽丝尔优悦活颜弹润焕活面膜",
        "content" : "焕活面膜修护肌肤烦恼，肌醇成分促进肌肤自生胶原蛋白自生，迷迭香叶提取物和甘油成分促进肌肤生物体内结合水自生，呵护肌肤弹性，充分滋润并包裹肌肤，将美容成分渗透至肌肤内部，保持肌肤滋润。",
        "size" : "30ml x 6片",
        "price" : "2700日元",
    },
    {
        "image" : "images/ranking/010.jpg",
        "name" : "资生堂 悦薇 抗皱美容露 眼霜",
        "content" : "深层滋润精华素，含专有Ekon萃取物，能澹化细纹和皱纹",
        "size" : "15g",
        "price" : "10800日元",
    },
    {
        "image" : "images/ranking/011.png",
        "name" : "资生堂悦薇质纯抗皱眼膜",
        "content" : "添加有视黄醇成分，可以促进胶原蛋白的生成，预防和缓解皱纹行程。添加的胶原蛋白、透明质酸、丝氨酸可以加强保湿功效，同时还含有抗氧化的姜黄根和维生素E成分。特别适合有局部纹路的部位使用，如果不添加香料会更好。",
        "size" : "12包24片",
        "price" : "6480日元",
    },
    {
        "image" : "images/ranking/012.jpg",
        "name" : "怡丽丝尔亮白/保湿凝胶啫喱面膜",
        "content" : "美白睡眠面膜/保湿滋润睡眠面膜",
        "size" : "105g",
        "price" : "保湿3024日元/美白3456日元",
    }
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