var express = require('express');
var router = express.Router();
var index = require('../application/controllers');
var headers     = require('../application/lib/headers');


//路由配置
router.get('/',index.index);								//node标准模式
router.get('/cookie',index.cookie);							//cookie的使用
router.get('/h',headers.head2,index.h);						//头信息


module.exports = router;
