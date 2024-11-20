class Person {
    constructor(name) {
        console.log("Entering Parent constructor.")
        this.species = "Homo-sapians";
        this.name = name;
        console.log("Exiting Parent constructor.")
    }
    trait() {
        console.log("First, humans are emotional creatures.");
    }
}

class Engineer extends Person{         // Engineer is also a person.
    constructor(branch, name) {
        console.log("Entering Child constructor.")
        super(name);    // "super()" is used to invoke/run the parent class constructor.
        this.branch = branch;
        console.log("Exiting Child constructor.")
    }
    work () {
        super.trait();
        console.log("Then, a problem solver.")
    }
}

let person1 = new Engineer("Computer Science", "Amandeep Singh");    




//     Practice Question - 1

let DATA = {
    MobileNumber : "9310130192",
    Age : 20,
    Gender : "Male",
};

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email; 
    }
    viewData() {
        console.log(`User Data : `, DATA);
    }
}

let user1 = new User("Harjot Singh", "igharjot@gmail.com");
let user2 = new User("Kusha Sharma", "igkusha@gmail.com");

console.log(user1);
console.log(user2);

user1.viewData();
user2.viewData();




//     Practice Question - 2

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData(){
        DATA = {
            MobileNumber : "9899815971",
            Age : 19,
            Gender : "Female",
        };
    }
}

let admin1 = new Admin("Admin", "admin@gmail.edu.to");
console.log(admin1);