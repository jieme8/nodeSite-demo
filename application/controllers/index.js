
'use strict';
var indexViewModel = require('../viewModels/index');



exports.index = function(req, res) {
	var index = new indexViewModel();
	//console.log(aa.demo1())

	index.demo1().then(function(resolve){
		console.log("----------index--------------" + resolve.body);
		var data = {
			"html":resolve.body
		}
		res.render("index",data);
	})

	
}
