var q = require("q");
var request = require("request");
var preadFile = {};
preadFile.qq = function(cs){
    var deferred = q.defer();

    request("http://n.daoxila.com/jsonp/?act=dengji",function(err,d){
        if(!err){q
            deferred.resolve(cs);//成功返回的数据
        }else{
            deferred.reject(err);//失败返回的错误信息
        }   
    })


    return deferred.promise;//必须返回这个
}
 


module.exports = preadFile;