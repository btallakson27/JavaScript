// data manipulation

const { addStrings, example_array } = require("./Chapter_2new")

let example_sentence = 'this_is_a_string' // this just shows you that the values in a string always have an index.
let string_length = example_sentence.length
// console.log('The fifth value in the string is = ', example_sentence[5])

// let combined_string = 'Did you know' + ' ' + 'Cannoli is so handsome?' // this is string concatenation, which is just putting them together. you want to do this in situations where one variable is constant and you don't want to have to retype it every time.
// console.log(combined_string)

//let combined_string = '3' + 5 // this is type coersion, instead of adding them, it will put them together and look like 35.
//console.log(combined_string-6)

//regex


//array and lists
let simple_array = [[[3],[]],[[],[]],[[],[]]] //since these are all strings, 'is' counts as the second index entry. this array is known as 1 dimensional. 
//crud - create read update delete
console.log(simple_array[0][0][0]) // we can access the value 3 within an array by typing console.log(simple_array[0][0][0]) This is called a nested array since there are arrays within arrays. And since the valye of 3 is nested in the innermost array we need to type [0][0][0]
simple_array[0][0][0]='hello world' //this updates the array so hello world takes the place of 3.


// 4 methods to manipulate an array: pop, push, shift, and unshift. pop and push cut or add values to the end of the array. shift and unshift do the same but at the start of the array.
//let check=simple_array.sort() // the sort method midifies the original array. this is saying sort simple_array, then assign new simple_array to check.
// simple_array.pop() //this will kick the last value off of the array
// let check=simple_array
console.log(simple_array)

let cool_array = [[1,2],[3,4]] //what we're doing here is showing what value is present at the 0th index of i and j, then the 1st index, and so on.
for (let i=0;i<cool_array.length;i++){ //this a For Loop. i++ initializes the counter.
let subArray=cool_array[i] //so when i=0, subArray is going to assume the value of the [1,2] array.
for (let j=0;j<subArray.length;j++){ //this a For Loop. i++ initializes the counter.
    console.log(i,j,cool_array[i][j]) //we have to include both values i and j here since it's a 2 dimensional array. the way this prints is first go to the 0th index of the 1st array(the big one), then the 0th index of the second array, and tell me what that value is. Repeat for every index.
}
}


let hot_array=[1,2,3,4,5] //here we will remove the value at the second index.

let start_array=hot_array.slice(0,2) //the 2 here tells the computer which index value you want removed. 
let end_array=hot_array.slice(3)

let new_filtered_array=start_array.concat(end_array) //concat here will add combine the 2 sliced arrays you created. 

console.log(new_filtered_array)

// dictionaries or objects
const bio = {
name: 'Ben',
age:'36',
hobbies: ['gym','coding','football'],
friends: {
    'juan': {
        description: 'good at math'
    }
}
}


console.log('joke' in bio)

function helloWorld(){
let sentence='helloWorld'
console.log(sentence)
}

function counter(){
    let count=0

    return function(){ //this is known as an anonymous function since it doesn't have a name. 
        count++
        console.log(count)
    }
    }

    let increment=counter() //
    increment()
    increment()

    addStrings(example_array)

    //error handling and debugging, try-catch-block
const brokenObject={
    word: 'nice'
}

    function problematicCodeBlock(){
        try {
            console.log('attempted the try block')
            const sub_object=broken_object.hello.world
            console.log(sub_object)
        } catch (err) {
            console.rror(err.message)
        }
    }
    // problematicCodeBlock()
    console.log('code continued to execute') // here we're just printing 'code continued to execute' to show that code wil continue to print after creating the try-catch-block above.

    function throwError() {
        try {
            throw new Error('custom error message')
    } catch (err) {
        console.log(err.message)
    }
}

throwError()