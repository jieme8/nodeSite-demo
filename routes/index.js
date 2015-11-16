var express = require('express');
var router = express.Router();
var index = require('../application/controllers');


//路由配置
router.get('/',index.index);



module.exports = router;
