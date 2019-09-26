     
  function getStyle(element, attr){
            return element.currentStyle ? element.currentStyle[attr] : getComputedStyle(element, null)[attr];
        }
        function slowMove(element, target, attr){     //减速函数（样式值是px都可以变化）
            clearInterval(element.iTimer);          //清除上次打开的定时器，保证只有一个定时器
            var speed, styleVal;
            element.iTimer = setInterval(function(){
                styleVal = parseInt(getStyle(element, attr));       //获取最终样式值
                speed = (target - styleVal)/5;                    //处理速度大小（系数越大速度越慢）
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);        //处理速度方向
                element.style[attr] = styleVal + speed + "px";
                if(styleVal === target){
                    clearInterval(element.iTimer);
                }
            }, 30);
        }