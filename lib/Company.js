
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")

class Company {
    constructor(){
    this.allEmployees=[]
    }
    addManager(name, id, email, office){
        const m = new Manager(name, id, email, office)
        this.allEmployees.push(m)
    }
    addEngineer(name, id, email, git){
        const m = new Engineer(name, id, email, git)
        this.allEmployees.push(m)
    }
    addIntern(name, id, email, school){
        const m = new Intern(name, id, email, school)
        this.allEmployees.push(m)
    }
    print(){
        console.log(this.allEmployees.length)
        this.allEmployees.forEach(empInfo => {
            console.log(empInfo.getName())
    });        
    }
}

module.exports = Company