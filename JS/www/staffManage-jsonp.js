// 查询员工方法

    $("#search").on("click", function(){
        $.ajax({            //JSONP方式
            type: "get",
            url: "http://127.0.0.1/serverjson-jsonp.php?number=" + $("#keyword").val(),
            dataType: "jsonp",
            jsonp: "callback",
            success: function(data){
                $("#searchResult").html(data.msg);
            },
            error: function(xhr){
                if(xhr.status === 404){
                    alert("找不到文件");
                }
            }
        });
    });

 // 增加员工
    $("#add-search").on("click", function(){
        $.ajax({
            type: "post",
            url: "serverjson.php",
            dataType: "json",
            data: {
                name: $("#add-name").val(),
                number: $("#add-number").val(),
                sex: $("#add-sex").val(),
                job: $("#add-job").val()
            },
            success: function(data){
                if(data.success){
                    $("#add-resultshow").html(data.msg);
                }else{
                    $("#add-resultshow").html('出现错误：' + data.msg);
                }
            },
            error: function(xhr){
                alert('发生错误！'+ xhr.status);
            }
        });
    });