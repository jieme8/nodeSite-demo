var Q = require("q");
var request = require("request");
console.log("start");
var preadFile = function(){
    var deferred = Q.defer();

    request("http://n.daoxila.com/jsonp/?act=dengji",function(err,d){
        if(!err){
            deferred.resolve(d);//成功返回的数据
        }else{
            deferred.reject(err);//失败返回的错误信息
        }   
    })


    return deferred.promise;//必须返回这个
}
 
preadFile().then(function (data) {//then方法有两个参数(成功回调，失败回调)
    console.log(data);
}, function (error) {      
    console.error(error);
});