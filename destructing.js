//allows to unpack values from arrays or properties from object
//destructing from arrays
var x = ["virat","dhoni","rohit","rahul","siraj"];
var [y,z,...a] = x;
console.log(y,z);
console.log(...a);



////////////////////////////////////////////////////////////////
//destructing from object
var b = {
    x:"virat",
    y:"dhoni",
    z:"siraj",
    a:"rahul"
};
var {x,y,z}=b;
console.log(x,y);
console.log(z);
