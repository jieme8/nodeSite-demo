var dxlModel = require('../models/dxl');
var cityModel = require('../models/city');


function indexViewModel(){

}

indexViewModel.prototype.demo1 = function() {

	
	return new Promise(function(resolve){
		var dxl = new dxlModel();
		dxl.page().then(function(d){
			//console.log(d)
	    	resolve(d)
		})
	})

};


module.exports = indexViewModel;