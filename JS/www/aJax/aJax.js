/**
 * Created by Administrator on 2018/03/12.
 */
function aJax(url, fnSuccess, fnFailed){
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                fnSuccess(xhr.responseText);
            }else{
                if(fnFailed){
                    fnFailed(xhr.status);
                }
            }
        }
    };
}