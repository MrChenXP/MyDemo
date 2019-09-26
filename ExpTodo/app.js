let express = require('express');
let todoController = require('./controllers/todoController');//引用模块

let app = express();

app.set('view engine', 'ejs');  //指定模板引擎
app.set('views', './views');//设置模板存放目录

app.use(express.static('./public'));//访问静态文件中间件

todoController(app);//将express实例传入该模块

app.listen(88);

console.log('http://localhost:88/');