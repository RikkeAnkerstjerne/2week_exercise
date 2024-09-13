export class dog {
    constructor(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
    }

    getData() {
    return `My dogs name is ${this.name} she is a ${this.color} ${this.breed}`
    }
    
    changeName(newName) {
        this.name = newName;
    }
}