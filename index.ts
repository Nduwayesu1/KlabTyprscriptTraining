function testAge(age:number){
    if(age < 18){
        return "Childhood"
    }
    else if(age >=18 && age <=65){
        return "Adult"
    }
    else{
        return "OldMan"
    }
}
let myAge=40;
console.log(testAge(myAge))