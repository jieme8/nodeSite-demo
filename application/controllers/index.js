var q = require("q");

exports.index = function(req, res) {
	var qViewModel = require('../viewModels/q');

	qViewModel.page().then(function(resolve){
		console.log(resolve)
		res.render("q",resolve);
	})

}


exports.cookie = function(req, res) {
	//存储session
	req.session.jie = "jie";
	console.log(req.session.jie);
	res.cookie("username1","jie",{maxAge: 60 * 1000});		//设置cookie
	res.cookie("username2","jie",{maxAge: 60 * 1000});		//设置cookie
	res.cookie("username2","",{maxAge: -1});				//清楚cookie
	res.render("q",{"id":"session.jie : " + req.session.jie});

}


exports.h = function(req, res) {

	//res.setHeader("X-Powered-By","jie")
	res.render("q",{"id":"asdfdasf"});

}

