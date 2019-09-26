let bodyparser = require('body-parser');
let jsonParser = bodyparser.json()    // json就是json解析方式
let urlencodedParser = bodyparser.urlencoded({extend:false}); //urlencoded表单解析方式
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',(err) => console.log('数据库链接成功...') );
const todoSchema = mongoose.Schema(     //创建一个schema架构
    {
        item: String,
    }
);
const Todo = mongoose.model('todos',todoSchema);//创建一个model

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        Todo.find({},(err,data)=>{
            if(err) throw err;
            res.render('todo',{datas:data});
        });
    });

    app.post('/todo', urlencodedParser,function(req, res) { //
        //创建一个model实例
        let temeOne = Todo(req.body).save((err,data)=>{    //保存到数据库
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res) {
        Todo.find({item:req.params.item.replace(/-/g," ")}).remove(
            (err,data)=>{
                if(err) throw err;
                res.json(data);
            }
        );
    });
};
