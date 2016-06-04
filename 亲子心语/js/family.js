/*
 * 功能：tab切换
 */

var tabIndex = 0;
$('.tits li').on('click', function() {
    tabIndex = $(this).index();
    $(this).css({
        'background' :'#778daa',
        'color' : 'gold'
    })
    $(this).siblings().css({
        'background' :'none',
        'color' : 'blue'
    })
    $('.cons').children('div').eq(tabIndex).fadeIn(600).siblings().css({
        'display' : 'none'
    })
})

/*
 * 功能：添加图片
 */
function preview1(file) {
    var img = new Image();
    var url = img.src = URL.createObjectURL(file);
    var $img = $(img);//将img转化为JQ对象
    img.onload = function() {
        URL.revokeObjectURL(url)
        $('.pos').empty().append($img)
    }
}
function preview2(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var $img = $('<img>').attr('src', e.target.result)
        $('.pos').empty().append($img)
    }
    reader.readAsDataURL(file)
}
$(function() {
    $('[type=file]').change(function(e) {
        var file = e.target.files[0]
        preview1(file)
    })
})



/*
 * 功能：大图渐变效果
 * 参数：imgparent：img的父级， bord：蒙版,  btnLeft：左按钮
 *       btnRight：右按钮， img：获取大图的图片标签
 */
changeImg('.min-pics div', 'p','.our-btnl', '.our-btnr','.show-out img');

function changeImg(imgparent, bord, btnLeft, btnRight, img){
    var mark = 0; 
    var maxMark = $(imgparent).length;
    var nowClick = null;
    var btnClick = false;
    var timer = setInterval(change, 4000);
    // 缩略图鼠标移入、移出
    $(imgparent).hover(function(){
        $(this).children(bord).css('display', 'none');
    }, function(){
        if ($(this).index() != nowClick) {
            $(this).children(bord).css('display', 'block');
        }
        if (nowClick != null) {
            nowClick = null;
            mark++;
            if (mark >= maxMark) {
                mark = 0;
            }
            change();
            timer = setInterval(change, 4000);      
        }
    })
    // 缩略图鼠标点击事件
    $(imgparent).click(function(){
        clearTimeout(timer);
        mark = $(this).index();
        $(this).children(bord).css('display', 'none');
        $(this).siblings().children(bord).css('display', 'block');
        $(img).eq(mark).stop(true).fadeIn(2000).siblings('img').stop(true).fadeOut(2000);
        nowClick = $(this).index();
    })
    // 左按钮移入、移出事件
    $(btnLeft).hover(function(){
        $(this).css('background', 'url("../images/scroll.png") -11px -49px');
    }, function(){
        $(this).css('background', 'url("../images/scroll.png") -11px -7px');
        if (btnClick) {
            btnClick = false;      
            mark += 2;
            if (mark >= maxMark) {
                mark = 0;
            }
            change();
            timer = setInterval(change, 4000);      
        }
    })
    // 右按钮移入、移出事件
    $(btnRight).hover(function(){
        $(this).css('background', 'url("../images/scroll.png") -63px -49px');
    }, function(){
        $(this).css('background', 'url("../images/scroll.png") -63px -7px');
        if (btnClick) {
            btnClick = false;      
            change();
            timer = setInterval(change, 4000);      
        }
    })
    // 左按钮点击事件
    $(btnLeft).click(function(){
        clearTimeout(timer);
        if (!btnClick) {
            mark -= 2;
        }
        if (mark < 0) {
            mark = maxMark - 1;
        }
        $(imgparent).eq(mark).children(bord).css('display', 'none');
        $(imgparent).eq(mark).siblings().children(bord).css('display', 'block');
        $(img).eq(mark).stop(true,true).fadeIn(2000).siblings('img').stop(true,true).fadeOut(2000);
        mark--;
        if ( mark >= maxMark) {
            mark = 0;
        }  
        btnClick = true;
    })
    // 右按钮点击事件
    $(btnRight).click(function(){
        clearTimeout(timer);
        if (mark >= maxMark) {
            mark = 0;
        }
        $(imgparent).eq(mark).children(bord).css('display', 'none');
        $(imgparent).eq(mark).siblings().children(bord).css('display', 'block');
        $(img).eq(mark).stop(true,true).fadeIn(2000).siblings('img').stop(true,true).fadeOut(2000);
        mark++;
        if ( mark >= maxMark) {
            mark = 0;
        }
        btnClick = true;
    })
    // 主功能函数
    function change() {
        $(imgparent).eq(mark).children(bord).css('display', 'none');
        $(imgparent).eq(mark).siblings().children(bord).css('display', 'block');
        $(img).eq(mark).stop(true,true).fadeIn(2000).siblings('img').stop(true,true).fadeOut(2000);
        mark++;
        if ( mark >= maxMark) {
            mark = 0;
        }
    }
    change();
}


/*
 * 功能：相册切换
 */

var photoIndex = 0;
var pText = $('.manage span');
var nowText = $('.photos p');

$('.photos ul').children('li').on('click', function() {
    photoIndex = $(this).index();
    $(this).css({
        'border' : '1px solid #39f',
        'border-radius': '5px'
    })
    $(this).siblings('li').css({
        'border' : 0
    })
    pText.innerText = nowText[photoIndex].innerText;
    console.log(pText);
    console.log(photoIndex);
   $('.show').children('.ch-ph').eq(photoIndex).css({
    'display' : 'block'
   }).siblings('.ch-ph').css({
    'display' : 'none'
   })
})



/*
 * 功能：获取相册
 */

