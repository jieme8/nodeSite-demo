var express = require('express');
var router = express.Router();
var index = require('../application/controllers');


//路由配置
router.get('/',index.index);
router.get('/q',index.q);


module.exports = router;
