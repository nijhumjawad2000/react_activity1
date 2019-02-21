class Developer{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName(){
        return this.firstname + " " +this.lastname;
    }
}
var developer1 = new Developer('Nijhum', 'Jawad');

console.log(developer1.getName());

class JavaScriptDeveloper extends Developer{
    getJob(){
        return 'JavaScript Developer';
    }
}

var developer1 = new JavaScriptDeveloper('Zakia', 'Jeme');

console.log(developer1.getName());
console.log(developer1.getJob());

const greting = () => {
    return 'Welcome to React Dev';
}
console.log(greting());