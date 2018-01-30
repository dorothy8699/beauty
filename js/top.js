jQuery(document).ready(function(){
    var json = [ {
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },{
        "image" : "images/cpb/001.jpeg",
        "name" : "CPB卸妆膏和卸妆乳",
        "content" : "卸妆膏精润温和卸妆乳卸妆洁面二合一",
        "size" : "150ml",
        "price" : "6156日元",
    },
    ];

    var str = "";
    
    jQuery.each(json, function(idx, obj) {
        str = str + '<div class="col-sm-6 col-md-4">' +
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
});