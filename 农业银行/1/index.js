$('.nav-list li').mouseover(function () {
    $(this).addClass('cc').siblings().removeClass('cc');
});

//   tab
var $ps = $('.top').children('p');
var $lis = $('.list').children('li')
$ps.click(function () {
    $(this).addClass('cc').siblings('p').removeClass('cc')
    $lis.eq($(this).index()).addClass('dd').siblings('li').removeClass('dd')
})
$('.banner-list li').mouseover(function () {
    console.log(2)
    $(this).find('p').addClass('ddd');
    $(this).siblings().find('p').removeClass('ddd')
});
// tab轮播图
var num = 0,
    tnum = 0;
var timer = null;

function auto() {
    num++;
    if (num > 2) {
        num = 0
    }
    $('i').eq(num).addClass('active').siblings().removeClass('active');
    tnum++;
    if (tnum > 3) {
        tnum = 1;
        $('.listt').css('left', 0)
    }
    var le = tnum * -792;
    $('.listt').stop().animate({
        left: le + 'px'
    }, 500, function () {
        if (tnum == 3) {
            $('.listt').css('left', 0)
        }
    })
}
$('.next').click(function () {
    auto()
})
$('.prev').click(function () {
    num--;
    if (num < 0) {
        num = 2
    }
    $('i').eq(num).addClass('active').siblings().removeClass('active');
    tnum--;
    if (tnum < 0) {
        tnum = 2;
        $('.listt').css('left', -2385)
    }
    var le = tnum * -792;
    $('.listt').stop().animate({
        left: le + 'px'
    }, 500)
})
$('i').click(function () {
    num = $(this).index();
    tnum = $(this).index();
    var le = tnum * -792;
    $(this).addClass('active').siblings().removeClass('active');
    $('.listt').stop().animate({
        left: le + 'px'
    }, 500)
})
timer = setInterval(auto, 3000);
$('.baa').hover(function () {
    clearInterval(timer)
}, function () {
    timer = setInterval(auto, 3000)
})