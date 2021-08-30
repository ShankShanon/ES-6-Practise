class parent {
    constructor(){
        this.fatherName = "sosNigga"
    }
    
}
class child extends parent{
    constructor(name) {
        super();
        this.name = name;
    }
}

getFullName(){
    return this.name +" "+ this.fatherName;
}
const baby = new child("arnold");
const baby2 = new child("Tomas Shelby");
console.log(baby.getFullName());
console.log(baby2);