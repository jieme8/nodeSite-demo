var request = require("request");
var q = require("q");
function city(){

}


city.prototype.jiehunList = function(){

	return new Promise(function(resolve){

		request("http://n.daoxila.com/jsonp/?act=dengji",function(err,d){
			if(err){
				resolve(d);
			}else{
				resolve(d);
			}
		})
	})

}

module.exports = dxl;
