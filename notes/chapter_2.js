415027502 // this is a number

'hello world' // this is a string of characters

null
console.log('hello world') //console is the console class, log is the method, hello world is an argument.
true & false //these are booleans

let friends =
{james: 'is super cool', // james is the key, is super cool is the definition
    lucy: 'isn\'t so cool'
} // this is an object aka dictionary

let example_array = [1,5,7,9,4,5,6,7,3] //The assignment operator is the = which tells javaScript to take the first value and assign it to this variable (example_array)

let is_true = true

function multiplyNumbers(value, secondValue){ // here the words value and secondValue are arguments
// multiplies two numbers
console.log(value * secondValue) // at this moment, if you rerun the output through the terminal, nothing prints to your console. this is because at no point did we invoke the function. see below for invoking. multiplication * is also an operator. you can also do this with + - / or modulus aka remainder %.
}

let multiplyTwoNumbers = myFirstFunction // here we're assigning a value to a function because it's a valid data type. because myFirstFunction is a valid value, we can assign it to a cariable and then refer to that new variable later. 

multiplyTwoNumbers(3, 5) // this invokes the function, and now if you run the output it will execute the code. when you call this function you can pass in the values 3 and 5.
multiplyTwoNumbers(4, 9)// a big benefit of this is you can rewrite different values and it will multiply them all becasuse of what's above.
multiplyTwoNumbers(7, 5)

console.log(multiplyTwoNumbers) // if you run this, JavaScript will tell you it's a function.

function myFirstFunction(value, secondValue){

    console.log(value !=secondValue) // the != means inverse so when you execute the code the opposite answers will appear. 
}
myFirstFunction(3,5)
myFirstFunction('6',6)
myFirstFunction(7,5)

// here are the conditions. AND which looks like this, && or whic his this, || and the not condition which is ! see examples below.

let condition1 = true
let condition2 = false

console.log(typeof '') //typeof checks the type of whatever comes after it.
console.log(typeof multiplyTwoNumbers) //this will tell you it's a function
console.log(typeof example_array) //this will tell you it's an object, there's a good reason for this that we will touch on later. 

console.log(condition1 && condition2) //and condition
console.log(condition1 || condition2) // or condition
console.log(!condition1) //logical not condition

if (condition2){ // we do this if we want to have a code that is conditionally executed, meaning, it doesn't necessarily always go but it does depending on the value or state of something.
console.log('hi mom') //it prints as hi mom because condition1 is true. if we change this to condition2, it won't print.
} else if (condition1 || condition2) { //after adding the else block, we can also add this else if block. since this is a subsequent else if, it also needs round parenthesis.
    console.log('one condition of the two was true')
} else {  //this is an else block chained to end of our if statement.
console.log('the value was false so here we are') //this text will also print if it's false
}

//let example_array = [1,5,7,9,4,5,6,7,3]

let i = 0 // a counting variable is typically defined at either an i, j, or k. 
let length = example_array.length // this is a length variable, where the .length is a special parameter of the example_array that tells me how many entries are in the array.
while(i < length){
console.log('value was true: ', i) //just doing this will execute over and over and over, because i is always 0 and it's less than 12. to change this, see below.
i = i + 1 //at the end of every loop we can do this, which is saying i is equal to the previous value of i plus 1. this is telling the computer to reassign a new value to I that's equal to the previous value, plus 1. the shorthand syntax for this is i++, you can also do i-- to do down by 1 every time.
}

for (let j = 0; j < length; j = j+1) { //this is a for loop. instead of just having one argument passed into the while loop, we now have 3. the first one we have to pass in is a definition of the counting variable, j = 0. it's the 0th index, which is where most arrays start.
//if you ever wanted to skip a section, for example, see next line of code
if (j % 2 === 0)
    continue //continue is a reserved key word that tells it to skip this loop. so in this example, if the index value of j is equal it's going to skip and not console out the value. 
break //mean if a condition is met, end the loop early. 
console.log('value was true: ', j)

}

//here are some new functions
function addStrings(string1, string2) {

    if (!string1 || !string2) {
        console.log('you are missing an input')
        return //a key word, when a function shits the top level, return it exits the function equivalent to breaking a loop. 

        let concatString = string1 + '' +string2
        console.log(concatString)
        
    }
      
}

addStrings('hello, 'mom')