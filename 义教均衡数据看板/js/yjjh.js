// 动态更改rem
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
    console.log(html.style.fontSize)
}
setFont();
// 可视区域变化 浏览器后退/前进时重新计算 一条会话历史记录被执行 时触发
$(window).on("resize pageshow",() => {
    setFont();
});