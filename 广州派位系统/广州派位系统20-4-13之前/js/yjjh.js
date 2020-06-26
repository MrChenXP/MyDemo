// -------动态更改rem-----------
var setFont = function() {
    var html = document.documentElement;
    var width = html.clientWidth;
    if (width < 1024)
        width = 1024
    if (width > 1920)
        width = 1920
    // 设计图是 1920*1000    
    var fontSize = width / 38.4 + 'px';
    html.style.fontSize = fontSize;
}
setFont();
// -----------收缩展开学校名单------------
$('.port-bottom-left .column-title-togger').click(function(){
    $('.port-bottom-left').toggleClass('port-bottom-left-extend');
    $('.port-bottom-right').toggle();
    // column-title-togger
});
$('.port-bottom-right .column-title-togger').click(function(){
    $('.port-bottom-right').toggleClass('port-bottom-right-extend');
    $('.port-bottom-left').toggle();
});
//------------学生名单滚动效果-------------
$.each($('.port-bottom-left .xsmd-body,.port-bottom-right .right-xsmd'),function(i,obj){
    var scrollHeight = $(obj).get(0).scrollHeight || 0; // 内容高度
    var height = $(obj).height() || 0; // 可是区域高度
    var xsmdInt = setInterval(function(){
        var scrollTop = $(obj).scrollTop()|| 0; // 滚动距离
        if(scrollTop + height < scrollHeight){
            scrollTop += 2;
            $(obj).scrollTop(scrollTop);
        } else{
            clearInterval(xsmdInt);
        }
    },50);
    xsmdInt;
});
// 可视区域变化 浏览器后退/前进时重新计算 一条会话历史记录被执行 时触发
$(window).on("resize pageshow",() => {
    setFont();
});
