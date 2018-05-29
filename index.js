var n = 0;
$('.list').on('click','li',function() {
    var $this = $(this);
    var $index = $this.index();
    n = $index;
    if (!$this.hasClass('curr')) {
        $this.addClass('curr').siblings().removeClass('curr');
        var distance = $index*300;
        $('.images').css({
            transform: 'translateX(-'+distance+'px)'
            });
    }
});

var timer = setInterval(function() {
    changeImg();
},1500);

function changeImg() {
    $('.list li').eq(n).trigger('click');
    n++;
    if ( n == 3) {
        n = 0;
    }
}
$('.container').on('mouseenter',function() {
    clearInterval(timer);
})
$('.container').on('mouseout',function() {
    timer = setInterval(function() {
        changeImg();
    },1500);
})