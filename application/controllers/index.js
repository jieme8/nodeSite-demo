var q = require("q");

exports.index = function(req, res) {
	var indexViewModel = require('../viewModels/index');
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


exports.q = function(req, res) {
	var qViewModel = require('../viewModels/q');

	
	qViewModel.page().then(function(resolve){
		console.log(resolve)
		res.render("q",resolve);
	})
	/*
	qViewModel.page().then(function(resolve){
		console.log("----------index--------------" + resolve.body);
		var data = {
			"html":resolve.body
		}
		res.render("index",data);
	})

	*/
}


