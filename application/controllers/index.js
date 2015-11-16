
'use strict';
var indexViewModel = require('../viewModels/index');



exports.index = function(req, res) {
	var index = new indexViewModel();
	//console.log(aa.demo1())

	index.demo1().then(function(d){
		//console.log("----------index--------------" + d);
		res.render("index",{"obj":d.body});
	})

	
}