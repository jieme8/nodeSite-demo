var Q = require("q");
var request = require("request");

var url = "http://n.daoxila.com/jsonp/?act=dengji";
console.log("start");
var preadFile = function(){
    var deferred = Q.defer();

    request(url,function(err,d){
        if(!err){
            deferred.resolve(d);//成功返回的数据
        }else{
            deferred.reject(err);//失败返回的错误信息
        }   
    })


    return deferred.promise;//必须返回这个
}


//单词调用
/*
preadFile().then(function (data) {//then方法有两个参数(成功回调，失败回调)
    console.log(data.body);
}, function (error) {      
    console.error(error);
});

*/

//多次调用
Q.all([
    preadFile(),//执行三个函数
    preadFile(20)
])
.spread(function (x, y) {//三个函数返回的三个值
    //console.log(x, y,z);
    return x.body + y.body;
})
.done(function(str){//完成前面的后执行
    console.log(str)
});
