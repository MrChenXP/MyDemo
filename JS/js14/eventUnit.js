/**
 * Created by Administrator on 2018/01/26.
 */
var eventUint = {
    getPosition : function ( oEvent ){      //返回鼠标离文档的坐标
        if(oEvent.pageX){
            return {X: oEvent.pageX, Y: oEvent.pageY};
        }else{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return{X: oEvent.clientX + scrollLeft, Y: oEvent.clientY + scrollTop};
        }
    },
    target: function(oEvent){       // 返回目标源
        return oEvent.target ? oEvent.target : oEvent.srcElement;
    },
    stopBubble : function (oEvent){        //阻止事件冒泡
        oEvent.stopPropagation ? oEvent.stopPropagation() : oEvent.cancelBubble = true;
    },
    stopDefault : function (oEvent){        //阻止默认行为
        oEvent.preventDefault ? oEvent.preventDefault() : oEvent.returnValue = false;
        return false;
    },
    bindEvent : function (obj, eventName, fnEvent){     //增加事件监听器
        if(obj.addEventListener){
            obj.addEventListener(eventName, fnEvent, false);
        }else{
            obj.attachEvent("on" + eventName, fnEvent);
        }
    },
    removeBind : function (obj, eventName, fnEvent){     //移除事件监听器
        if(obj.removeEventListener){
            obj.removeEventListener(eventName, fnEvent);
        }else{
            obj.detachEvent("on" + eventName, fnEvent);
        }
    }
};