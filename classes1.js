//                      P R O T O T Y P E :

//  1. JS objects have a special property called prototype. 
//  2. Prototype is a pre-defined or a default object INSIDE every object, which contains certain methods and properties. 
//  3. For example - push(), pop() and toString() properties.



//                         C L A S S E S

class ToyotaCar {
    constructor (rate, name) {
        console.log("A new object is created.");
        this.rate = rate;
        this.name = name;
    }
    start(){
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setRate(rate) {
        this.rate = rate;
    }
    setCarName(name) {
        this.name = name;
    }
};

let fortuner = new ToyotaCar;  // constructor
let innova = new ToyotaCar;    // constructor

console.log(ToyotaCar);

fortuner.start();
innova.stop();

innova.setRate("22 Lakh");
fortuner.setRate("55 Lakh");

console.log(fortuner);    
console.log(innova);




//                        I N H E R I T A N C E

class Parent{
    constructor() {
        this.species = "Humans";
    }
    hello() {       // a method of the class Parent.
        console.log("Hey there.");
    } 
    eyes() {        // another method of this class.
        console.log("Blue eyes.");
    }
}

//  Derived class
class Child extends Parent {          // Inheriting using "extends" keyword.
    bye () {
        console.log("Bye-bye.");
    }
    eyes() {                          // Overriding.
        console.log("Brown eyes.");
    }
}

class GrandChild extends Child {      // Multi-level Inheritance.
    eyes() {
        console.log("Grey eyes.");
    }
}

let maaBaap = new Parent;
let aulaad = new Child;
let potre = new GrandChild;