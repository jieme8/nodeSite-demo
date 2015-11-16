var express       = require('express');             // express web框架
var logger        = require('morgan');              // 请求日志纪录
var cookieParser  = require('cookie-parser');       // cookie格式化
var favicon       = require('serve-favicon');       // 网站图标
var bodyParser    = require('body-parser');         // 请求参数格式化
var path          = require('path');                // 系统路径模块
var http          = require('http');
var hbs           = require('hbs');                 //模版引擎


//var dxlSessParser = require('dxl-session-parser');  // 到喜啦session加载
//var dxlLibCommon  = require('dxl-lib').libCommon;   // 到喜啦工具函数模块
//var dxlUtilWWW    = require('dxl-util').www;
//var rewriteJsonp  = require('./application/lib/rewrite-jsonp');  // 重写res.jsonp()



var app = express();
var server = http.createServer(app);
var index = require('./routes/index.js'); //路由文件

//global.serverConf = require('./conf/conf');         // 全局变量 服务器配置


app.set('view engine', 'html');  // 用hbs作为模版引擎
app.engine('html', hbs.__express);//配置html指向hbs
app.set('views', path.join(__dirname, 'views')); // 模版所在路径

hbs.registerHelper('helper_name',function(req,res){console.log('111111111')})
hbs.registerPartial('partials_name','partials_value');

hbs.registerPartials(__dirname + '/views');//设置调用模版路径 {{> head}}  空格 －  以 _ 表示


hbs.localsAsTemplateData(app);//设置模版全局变量
app.locals.hbsVar1 = "hbsVar1"; //模版全局变量




app.enable('view cache');  // 模板缓存
app.enable('trust proxy');  // 代理
app.disable('page data json');  // 页面显示json格式

//require('http').globalAgent.maxSockets = Infinity;

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// 从mem-session服务器获取session
/*
app.use(dxlSessParser(global.serverConf.sessionServer, global.serverConf.sessionPort));
app.use(rewriteJsonp);

app.use(dxlUtilWWW.rewriteRender);

app.use(dxlLibCommon.evoConfig);
app.use(dxlUtilWWW.setPublic2);
app.use(dxlUtilWWW.setResponseHeader);
*/

//默认路由
app.use('/', index);


// 捕捉404错误和转发错误给错误处理程序
app.use(function (req, res, next) {
    var err = new Error('Not Found' + req.originalUrl);
    err.status = 404;
    next(err);
});

// 错误处理程序
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({"err.status":err.status});

    if (err.status === 404) {
        console.log(err);
        res.redirect('http://www.daoxila.com/error/');
    } else {
        console.error(err.stack);
        res.send(err.status);
    }
});


server.listen(3999, function() {
    console.log("Running node on port :3999");
});

module.exports = app;

