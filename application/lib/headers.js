exports.head = function(req, res, next) {
	res.setHeader("X-Powered-By","jie");
	next();
}

exports.head2 = function(req, res, next) {
	res.setHeader("head2","true");
	next();
}
