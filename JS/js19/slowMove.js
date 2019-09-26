/**
 * Created by Administrator on 2018/02/05.
 */
function getFinalStyle(element, attr){         //获取元素节点的最终样式
    if(window.getComputedStyle){
        return window.getComputedStyle(element, null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
function slowMove(element, jAttr, fnEnd){
    clearInterval(element.timer);
    var iSpeed = 0, iStyleVal = 0, attr, bState;
    element.timer = setInterval(function(){
        bState = true;
        for(attr in jAttr){
            if(attr === "opacity"){
                iStyleVal = getFinalStyle(element, attr);
                iStyleVal = iStyleVal === undefined ? 100 : Math.round(iStyleVal * 100); //兼容IE8-透明度不写读取时出现undefined
            }else{
                iStyleVal = parseInt(getFinalStyle(element, attr));
            }
            iSpeed = (jAttr[attr] - iStyleVal) / 3;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            iStyleVal += iSpeed;
            if(attr === "opacity"){
                element.style[attr] = iStyleVal/100;
                element.style.filter = "alpha(opacity: " + iStyleVal + ")";
            }else{
                element.style[attr] = iStyleVal + "px";
            }
            if(iStyleVal !== jAttr[attr]){
                bState = false;
            }
        }
        if(bState){
            clearInterval(element.timer);
            if(fnEnd){
                fnEnd();
            }
        }
    }, 30);
}