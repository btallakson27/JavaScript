//oop object oriented programming.

const me = {
    name: 'Ben',
    age: '36'
}

class Person { // This creates a template for the person, so you can identify other peoples
// names and ages (as seen below) without needing to do this again. best practice for classes to start with a capital letter. 
    //class body
    constructor(name, age) {  // a constructor is used to make some properties and default information in this template. 
      this.name=name // this is a key word I haven't learned about yet. the last name here is the same as the one directly above it in (). name is a property of the class.
      this.age=age
    }

    greet() { //greet is a method
      console.log('Hello my name is ', this.name)
    }
}

const you = new Person('rufus', 24) // defined the variable "you". this will take the class Person above, and make a new template so you can make a new one. 
const them = new Person('doloris', 31)

console.log(them)
them.greet() // this is saying "take them and do what greet says above, which is to prin the text then the name associated with the Person for them."
// now every object we estantiate using the Person class is going to have access to the gree method above. 

class Gamer extends Person { //Gamer is a person, but it's more than that. This person also has a favorite video game, so we add the extends feature. 
  //this section of code is called inheritance, when a new class inherits the template of a parent class.
  constructor(name, age, videogame) {
      super(name, age) //the super method assigns the parent constructor.
      this.videogame = videogame
  }
}
const nerdyGuy = new Gamer('harold', 31, 'pokemon')
nerdyGuy.videogame = 'world of warcraft' //can do this if you want to change the video game. 
console.log(nerdyGuy)


// getters and setters
class MyClass {
  constructor(name) {
      this._name = name
  }


  get name() { //get is a key word because it's a getter.
      console.log('Fetched current name')
      return this._name
  }

  set name(value) { //set is a key word because it's a setter.
      this._name = value
  }
}

const obj = new MyClass('lucy')
console.log(obj.name)

obj.name = 'gregothy'
console.log(obj.name)
