
// 大图
var imgIndex = 0;
var timer = setInterval(fade, 3000);
function fade() {
    imgIndex++;
    if (imgIndex == $('.big-img').children().length) {
         imgIndex = 0;
    };
    $('.big-img').children().eq(imgIndex).fadeIn(3000).siblings().fadeOut(3000);

    $('.dots').children().eq(imgIndex).addClass('dot').siblings().removeClass('dot');
}fade();
//左箭头
$('.large').hover(function(){
    $('.l-arr').stop(true, true).fadeIn(1000);
}, function() {
    $('.l-arr').stop(true, true).fadeOut(1000);
})

$('.l-arr').on('click', function() {  
    clearInterval(timer);
    imgIndex--;
    if (imgIndex < 0) {
         imgIndex = 2;
    };
    $('.big-img').children().eq(imgIndex).fadeIn(3000).siblings().fadeOut(3000);
    timer = setInterval(fade, 3000);
    console.log(imgIndex);
})
//右箭头
$('.large').hover(function(){
    $('.r-arr').stop(true, true).fadeIn(1000);
}, function() {
    $('.r-arr').stop(true, true).fadeOut(1000);
})  
$('.r-arr').on('click', function() { 
    clearInterval(timer);
    imgIndex++;
    if (imgIndex == $('.big-img').children().length) {
        imgIndex = 0;
     };
    $('.big-img').children().eq(imgIndex).fadeIn(3000).siblings().fadeOut(3000);
    timer = setInterval(fade, 3000);
    console.log(imgIndex);
})
//滚动条
$('.tit a').hover(function(){
    // var barIndex = $(this).index();
    $('.scroll-bar').stop().animate({
        'left' : $(this).offset().left
        // 'left' : 248 + 106 * barIndex
    }, 500)
}, function(){
    $('.scroll-bar').stop().animate({
        'left' : '248px'
    })
})

//返回顶部
$(window).scroll(function(){
    var scrollVal = $('body').scrollTop();
    if (scrollVal >= 600) {
        $('.rocket').fadeIn(800),
        $('.wech').fadeIn(800)
    } else {
        $('.rocket').fadeOut(800),
        $('.wech').fadeOut(800)
    }
})
$('.rocket').on('click', function() {
    $('body').stop(true, true).animate({
        'scrollTop' : 0
    }, 800)
})

// 监理数据模块
$('.pic-con').hover(function() {    
    $(this).children('div').stop(true).animate({
        'height' : '243px',
        'padding-top' : '112px' 
    }, 20)   
}, function() {    
    $(this).children('div').stop(true).animate({
        'height' : '75px',
        'padding-top' : '19px' 
    })         
})   

//监理案例模块
$('.box1 li').hover(function(){
    $(this).css({
        'width' : '29.6%'       
    }).siblings().css({
        'width' : '14%'
    })
    $(this).children('.per-cha').css({
        'display' : 'block'
    })
}, function(){
    $(this).css({
        'width' : '16.6%'       
    }).siblings().css({
        'width' : '16.6%'
    })
    $('.box1 .per-cha').css({
        'display' : 'none'
    })
})

$('.box2 li').hover(function(){
    $(this).css({
        'width' : '29.6%'       
    }).siblings().css({
        'width' : '14%'
    })
    $(this).children('.per-cha').css({
        'display' : 'block'
    })
}, function(){
    $(this).css({
        'width' : '16.6%'       
    }).siblings().css({
        'width' : '16.6%'
    })
    $('.box2 .per-cha').css({
        'display' : 'none'
    })
})

// tab切换模块
$('.tabTit li').on('click', function() {
    var tabIndex = $(this).index();
    $(this).addClass('select').siblings().removeClass('select');
    $('.tabCon').children().eq(tabIndex).css({
        'display' : 'block'
    }).siblings().css({
        'display' : 'none'
    })
})
//tab权威报道




// 友情链接
var judge = true;
$('.icon').on('click', function() {
    if(judge) {
        $('.link').css({
            'height' : '100px',
        })
        $('.links').css({
            'height' : '100px',
        })
        $(this).css({
            'background' : 'url(../images/img30.png) no-repeat'
        })
        judge = false;
    } else {
        $('.link').css({
        'height' : '50px'
        })
        $('.links').css({
            'height' : '50px',
        })
        $(this).css({
            'background' : 'url(../images/img21.png) no-repeat'
        })
        judge = true;
    }
})
