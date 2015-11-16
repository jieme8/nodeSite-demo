var request = require("request");



function dxl(){

}


dxl.prototype.page = function(){
	return new Promise(function(resolve){
		request("http://sh.daoxila.com/",function(err,d){
			resolve(d);
		})
	})

}

module.exports = dxl;
