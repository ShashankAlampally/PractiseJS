// strictness = var<let<const
//const : no re-declare and can not be changed again
//const is a block scope
function c(){
    if(true){
        let d=10;
    }
    console.log(d);
}
//hoisted completely

const x = 10;
// x = 11; //not allowed
// when declared it must be intialised too & it throws syntax error when used against the rule
//const x;
//x=12;
//console.log(x);


////////////////////////////////

// when you console a let variable before its declaration you get the reference error 
// calling before intialisation variable would be in temporal zone 
//let is a block scope
function c(){
    if(true){
        let d=10;
    }
    console.log(d);
}
//can be updated but not declaration

//console.log(y);
let y = 10;




////////////////////////////////
//var is global scope 
//can be updated and re-declaration is also allowed
//hoisted but stayes in temporal zone before intialisation
// when you console a var variable before its declaration it doesnt show any error but gives output as undefined
console.log(z);
var z = 10;
//global scope
function a(){
    if(true){
        var b=10;

    }
    console.log(b);
}
a();

