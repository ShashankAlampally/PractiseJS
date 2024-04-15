//class means blueprint or template of the object
//not hoisted and construtor method is used to intialize 
class x{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    statement(){
        console.log(this.name,this.age);
    }
}
let y = new x("shashank",25);
y.statement();
