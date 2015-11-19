var dxlModel = require('../models/dxl');
var cityModel = require('../models/city');



function indexViewModel(){

}

indexViewModel.prototype.demo1 = function() {

	var dxl = new dxlModel();
	var city = new cityModel();
	return new Promise(function(resolve){
		dxl.page().then(function(d){
			//console.log(d)
	    	resolve(d)
		})
	})

};


module.exports = indexViewModel;