var request = require("request");

function dxl(){

}


dxl.prototype.page = function(){
	return new Promise(function(resolve){

		request("http://sh.daoxila.com/",function(err,d){
			if(err){
				resolve(d);
			}else{
				resolve(d);
			}
		})
	})

}

module.exports = dxl;
