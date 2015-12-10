exports.head = function(req, res, next) {
	res.setHeader("X-Powered-By","jie");
	next();
}