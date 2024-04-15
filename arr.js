//map
var x=[1,2,3,4,5,6,7,8,9,10,11];

var y=x.map(function square(x) {
    return x*x;
});
console.log(y);


////////////////////////////////////////////////////////////////////////

//filter
var z = x.filter(function odd(x) { return x%2 == 0; });
console.log(z);


////////////////////////////////////////////////////////////////////////


//reduce
var a = x.reduce(function(x, y) {
    //console.log(x);
    x=x+y;
    return x;
 },0)
 console.log(a);