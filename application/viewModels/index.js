var dxlModel = require('../models/dxl');



function indexViewModel(){

}

indexViewModel.prototype.demo1 = function() {

	var dxl = new dxlModel();
	return new Promise(function(resolve){
		dxl.page().then(function(d){
			//console.log(d)
	    	resolve(d)
		})
	})

};

/*
indexViewModel.prototype.demo1 = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve({"test":"123456"});
        }, 500);
    });
};

*/

module.exports = indexViewModel;