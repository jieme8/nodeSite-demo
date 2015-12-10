var express = require('express');
var router = express.Router();
var index = require('../application/controllers');


//路由配置
router.get('/',index.index);								//node标准模式
router.get('/cookie',index.cookie);							//cookie的使用
router.get('/h',index.h);	


module.exports = router;
