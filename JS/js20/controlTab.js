/**
 * Created by Administrator on 2018/02/06.
 */
function ControlTab(element){
    var _self = this;
    this.aControl = element.querySelectorAll(".control li");
    this.aContent = element.querySelectorAll(".content > li");

    for(var i = 0, len = this.aControl.length; i < len; i++){
        this.aControl[i].index = i;
        this.aControl[i].onmouseover = function(){
            _self.mouseover(this);
        };
    }
}
ControlTab.prototype.mouseover = function(_this){
    for(var i = 0, len = this.aControl.length; i < len; i++){
        this.aControl[i].removeAttribute("class");
        this.aContent[i].style.display = "none";
    }
    _this.className = "active";
    this.aContent[_this.index].style.display = "block";
};