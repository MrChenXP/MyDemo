/**
 * Created by Administrator on 2018/02/02.
 */
function getFinalStyle(element, attr){
    if(window.getComputedStyle){
        return getComputedStyle(element, null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
function slowMove(oElement, attr, iTarget){     // 可以变化带像素单位的所有样式
    clearInterval(oElement.timer);
    var iSpeed, iStyleVal;
    oElement.timer = setInterval(function(){
        iStyleVal = parseInt(getFinalStyle(oElement, attr));
        iSpeed = (iTarget - iStyleVal)/ 5;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        oElement.style[attr] = iStyleVal + iSpeed + "px";
        if(iStyleVal === iTarget){          //iTarget 要保证是整数
            clearInterval(oElement.timer);
        }
    }, 30);
}