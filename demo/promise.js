
var test = function() {

};

var aa = new test();
aa.aa = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('123');
        }, 1000);
    });
};

aa.aa().then(function(d) {
    console.log(d);
});
