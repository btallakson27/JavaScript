

let sentence = 'hello world'

true && false //these are booleans

let friends={ //this is an object, and it uses {}
    james: 'is super cool',
    lucy: 'isn\'t so cool',
    number_Of_eggs: sentence
}

//let example_array = [1, 5, 7, 9, 4, 5, 6, 7, 3, 4, 5, 2342]
 //this is an array, and it uses [] an array is a list of items

 let is_true = true

 console.log()


function myFirstFunction(value, secondValue){ //functions have both (parameters/arguments) and {}
//output the value of is_true
console.log(value || secondValue) 
}

// && AND || OR ! logical not

let condition1 = false
let condition2 = true

console.log(typeof '') //typeof tells you why kind of type comes after it.

if (condition2 && condition1) { //creating this function tells the computer, if condition1 is true, execute this block of code, and if it's false, skip it. 
console.log('hi mom')
} else if (condition1 || condition2) { //a subsequent else if needs a condition statement so you need (). this is a third option of what your code will print. 
console.log('one condition of the two is true')
} else { // this is an else block. 
    console.log('the value was false so here we are') //if the argument is false, this will print. 
}


let example_array = [1, 5, 7, 9, 4, 5, 6, 7, 3, 4, 5, 2342] // this is a While Loop
let i = 0 // this is a counting variable. 
let length = example_array.length
/*while (i < length) { 
    console.log('value was true:', i, example_array[i]) //adding example_array[i] in the round parenthesis tells the computer to access the value at the index. In other words, it will tell you the value that's associated with each index.
    i = i++
}*/

for (let j = 0; j < length; j++) { // this is a for loop. this works similarly to the while loop, but you're able to pass more than one argument through. j = 0 is the definition of the counting variable. the second argument is the condition, and the third is the incrementer.
   if (j === 6) { 
    break // says if the condition is met, stop the loop. also works with the while loop.
    //continue // this says skip this loop, so if j % 2 === 0 it won't print. also works with the while loop.
   }
    console.log('value was true:', j, example_array[j])
}

 function addStrings(string1 = 'default1', string2 = 'default2') {
  
     let concatString = string1 + ' ' + string2
    console.log(concatString)
     return concatString
}

let newString = addStrings('hello')
console.log('The new string is: ', newString)

// addStrings('monkey') // it's going to print monkey default2 because the word monkey, is string 1 and there is no string 2 so it prints the dault of 'default2'

module.exports={ //this makes these things accessible in all of your JavaScript files. 
    addStrings,
    example_array
}