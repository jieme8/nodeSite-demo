var cityModel = require('../models/city');
var qModels = require("../models/q");
var q = require("q")

var qViewModel = {};
/*
qViewModel.page = function() {
	
	var deferred = q.defer();
	var def = "";
	qModels.qq().then(function(a){
		def += "aaaa"
		//return "aaaa";
	})

	return deferred.promise;

};

*/

qViewModel.page = function() {
	var deferred = q.defer();
	q.all([qModels.qq("aaa"),qModels.qq("bbb")]).spread(function(str1,str2){
		console.log(str1 + "----------" + str2)
		deferred.resolve({"id":str1 + "----------" + str2})
	})


	return deferred.promise;


};



module.exports = qViewModel;


