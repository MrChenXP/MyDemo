/**
 * Created by Administrator on 2018/02/07.
 */
function Drag(element){
    var _self = this;
    this.oMove = element;
    this.oMove.onmousedown = function(ev){
        var oEvent = ev || event;
        _self.mousedown(oEvent);
        return false;
    };
}
Drag.prototype.mousedown = function( oEvent ){
    var _self = this;
    this.differX = oEvent.pageX - this.oMove.offsetLeft;
    this.differY = oEvent.pageY - this.oMove.offsetTop;
    document.onmousemove = function( ev ){
        var oEvent = ev || event;
        _self.mousemove(oEvent);
    };
    document.onmouseup = function(){
        _self.mouseup();
    };
};
Drag.prototype.mousemove = function( oEvent ){
    this.oMove.style.left = oEvent.pageX - this.differX + "px";
    this.oMove.style.top = oEvent.pageY - this.differY + "px";
};
Drag.prototype.mouseup = function(){
    document.onmousemove = null;
    document.onmouseup = null;
};

function SubDrag(element){
    Drag.call(this, element);
}
SubDrag.prototype = Object.create(Drag.prototype);
SubDrag.prototype.constructor = SubDrag;

//        Object.setPrototypeOf(SubDrag.prototype, Drag.prototype);
SubDrag.prototype.mousemove = function(oEvent){     //方法重写
    var finalX = oEvent.pageX - this.differX;
    var finalY = oEvent.pageY - this.differY;
    if(finalX < 0){
        finalX = 0;
    }else if(finalX > document.documentElement.clientWidth - this.oMove.offsetWidth){
        finalX = document.documentElement.clientWidth - this.oMove.offsetWidth;
    }
    if(finalY < 0){
        finalY = 0;
    }else if(finalY > document.documentElement.clientHeight - this.oMove.offsetHeight){
        finalY = document.documentElement.clientHeight - this.oMove.offsetHeight;
    }
    this.oMove.style.left = finalX + "px";
    this.oMove.style.top = finalY + "px";
};
