// 1. Write a JavaScript class named Rectangle that has two properties, width and height, and initialized through its constructor. 
// Then create a method that gets added to the prototype (original version) of the class and calculates the area. 
// Next, instantiate an object of Rectangle with a width of 5 and a height of 10.
// Finally, show how all instances of Rectangle can access the method above. 
// instantiate: to represent or be an example of something. basically it's a word or number. 

class Rectangle { // this is how you write a class in JS. capitalizing is best practice. 
    constructor(width, height) { //CONSTRUCTOR OPENS up like a function and it's how you build the class from the template. 
        this.width = width // this is a key word that allows you to access the current instantiation of the class. 
        this.height = height // so "this" height, will be whatever height you enter below.
    }

    calculateArea() { // calculateArea is a method! which is essentially a function accessible within a class. 
        let area = this.height * this.width
        return area
    }
}

const new_rectangle_object = new Rectangle(5, 10) // here you are instantiating an object of new Rectangle with a width of 5 and a height of 10.
console.log(new_rectangle_object.calculateArea()) // this shows how all instances of Rectangle can access the method, calculateArea


// 2. How do you create a constructor within a class named Circle that initializes a property radius and sets its value based on the argument passed when a new Circle instance is created? Create an instance of Circle with a radius of 4.

class Circle {
    constructor(radius) {
        this.radius = radius
    }
}

const new_circle = new Circle(4)
console.log(new_circle)

// 3. In the context of a class method in JavaScript, what does the "this" keyword refer to, and how would you use 
// it inside a method named describe in a class Person to access the instance's properties named name and age?

class Person {
    constructor(name, age) {
        this.name = name //this refers to the instance of the class, which is "my_new_person" below. It doesn't refer to the class itself, but the new instance, which is the new Person below.
        this.age = age
    }

    describe() {
        console.log('The name is ' + this.name + ' and the age is ' + this.age)
    }
}

const my_new_person = new Person('james', 27)
my_new_person.describe() // you don't need to console.log here! you can just call on the method.
const my_second_person = new Person('rebecca', 25)
my_second_person.describe()

// 4. Create a class named Animal with a constructor that initializes a property species. Then, define a subclass named Dog 
// that inherits from Animal and adds an additional property name in its constructor. How do instances of Dog access methods 
// defined on Animal's prototype?

class Animal {
    constructor(species) {
        this.species = species
    }
}

class Dog extends Animal { // this sub class is outside of the original class. 
    constructor(species, breed) { // here you're adding the additional property
        super(species) // "super" is a method that sets the property equal to what it is in the parent class above.
        this.breed = breed
    }
}

const spud = new Dog('doggo', 'corgi')
console.log(spud)