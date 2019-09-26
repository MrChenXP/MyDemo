// 查询员工方法
        var oKeyword = document.getElementById('keyword'),
            oSearch = document.getElementById('search'),
            oSearchRes=document.getElementById('searchResult');

        // 查询员工按钮点击事件    
        oSearch.onclick=function(){
            var xhr = new XMLHttpRequest();
            xhr.open("get", "serverjson.php?number=" + oKeyword.value);
            xhr.send(null);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        var oDate = JSON.parse(xhr.responseText);
                        oSearchRes.innerHTML = oDate.msg;
                    }else{
                        if(xhr.status === 404){
                            alert("找不到文件");
                        }
                    }
                }
            };
        };

        // 增加员工        
        var oAddnumber=document.getElementById('add-number'), //员工编号
            oAddname=document.getElementById('add-name'), //员工姓名
            oAddsex=document.getElementById('add-sex'), //员工性别
            oAddjob=document.getElementById('add-job'), //员工职位
            oAddSearch=document.getElementById('add-search'), //增加员工按钮
            oAddResult=document.getElementById('add-resultshow'); //反馈结果显示

        // 增加员工按钮点击事件
        oAddSearch.onclick=function(){
            createStaff();
        };
        // 创建增加员工方法
        function createStaff(){

            var xhr=new XMLHttpRequest();

            xhr.open('POST','serverjson.php');

            var data = 'name='+oAddname.value
            +'&number='+oAddnumber.value
            +'&sex='+oAddsex.value
            +'&job='+oAddjob.value;

            //在open和send之间设置Content-Type
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

            xhr.send(data);

            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        var data=JSON.parse(xhr.responseText);
                        console.log(xhr.responseText);
                        if(data.success){
                            oAddResult.innerHTML=data.msg;                            
                        }else{
                            oAddResult.innerHTML='出现错误：'+data.msg;
                        }
                    }else{
                        alert('发生错误！'+xhr.status)
                    }
                }
            }
        }