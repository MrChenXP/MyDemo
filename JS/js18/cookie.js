/**
 * Created by Administrator on 2018/02/01.
 */
var cookie = {
    setCookie: function (cookieName, cookieValue, cookieTime){
                    if(cookieName !== ""){
                        if(typeof cookieTime === "undefined"){
                            document.cookie = cookieName + "=" + escape(cookieValue);
                        }else if(typeof cookieTime === "number"){
                            var oDate = new Date();
                            oDate.setDate(oDate.getDate() + cookieTime);
                            document.cookie = cookieName + "=" + escape(cookieValue) + ";expires = " + oDate.toGMTString();
                        }
                    }
                },
    getCookie: function (cookieName){
                    var aCookie = document.cookie.split(/; |=/);
                    for(var i = 0, len = aCookie.length; i < len; i += 2){
                        if(aCookie[i] === cookieName){
                            return unescape(aCookie[i + 1]);
                        }
                    }
                    return null;
                },
    removeCookie: function (cookieName){
                    this.setCookie(cookieName, null, -1);
                },
    clearCookie: function (){
                    var aCookie = document.cookie.split(/; |=/);
                    for(var i = 0, len = aCookie.length; i < len; i += 2){
                        this.setCookie(aCookie[i], null, -1);
                    }
                }
};