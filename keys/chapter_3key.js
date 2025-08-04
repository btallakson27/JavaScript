// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
// Remember: this one's all about arr[i]
let integers=[1,2,3,4,5,6,7,8,9,10] //set up an array

function functionFilter(arr){ //set up a function with the array as the argument
    let new_array=[] //set up a blank array to push into
    for (i=0;i<arr.length;i++){ //run a for loop to go over every value in array
        if (arr[i]%2===0){ // if current value you're looking at in the array is even, continue.
          continue
        }   
        new_array.push(arr[i]) //then take the new array and push the next odd value into it.
    }
    return new_array
}
let filered_function=functionFilter(integers) //set a new function be the original function with an argument of the integers.
console.log(filered_function)


// 2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
//Use a function. No new array. No push. Return after For Loop.
const names_and_ages=[
{name: 'Ben', age: 36},
{name: 'Angelina', age: 34},
{name: 'Mario', age: 54}
]

function findOldestPerson(arr){ //why do I need to make this a function?
    let oldest_person=arr[0] // assumes the first person is the oldest person
    for (let i=1;i<arr.length;i++){
        let new_person=arr[i]
        if (new_person.age>oldest_person.age){
            oldest_person=new_person
        }
    }
    return oldest_person
}
let found_oldest_person=findOldestPerson(names_and_ages) // why do I need to do this if I already told it to return? study return feature. 
console.log(found_oldest_person)

// 3. Data Transformation: Convert an array of string containing numbers into an array of actual number values.
// Don't use a function. set up new array BEFORE for loop. short code.
let array_of_strings = ['4', '8', '2', '10', '5']
let new_array_of_numbers = []

for (let i = 0; i < array_of_strings.length; i++) { // Why don't I use a function here?
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers)

//4. Array Sorting: Write a function that sorts an array of objects based on specific property (ie. 'price) in ascending order.
//Very short code. Function in different place. SORT is a THING! return a.price-b.price
let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }
]

array_of_objects.sort(function (a, b) { //why is this in this format? not a typical function format. 
    return a.price - b.price 
})

// you don't need this line here because it would look like this. let sortedArray = array_of_objects(array_of_objects). In other words, you sorted it directly so you don't need a new variable. 
console.log(array_of_objects)

// //5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
// think "trimarray trimmed_array"

let demo_array=[1,2,3,4,5]

function trimArray(arr){
    let array_length=arr.length //this is to assign array_length to the actual length for the next line.
    const trimmed_array=arr.slice(1, array_length-1) //slice takes starting and ending index and returns the values inbetween.
return trimmed_array
} 
console.log(trimArray(demo_array))

// 6. (23:20) Object Iteration: Given an object representing a shopping cart with items and their quantities, 
// write a function that calculates the total cost of the items.

let shopping_cart={ //Question for James: what's the index here? steak? quantity? cost? all 3?
    'cheese':{ // these are objects within the larger object.
        quantity: 4,
        price: 8
    },
    'milk':{
        quantity:10,
        price:4
    }
}

function sumProducts(obj){
    let object_keys=Object.keys(obj) // you can't run a for loop for an object, you need a list or an array, and doing this turns the object into an array.
    let sum=0 // do this any time you add.

    for (let i=0;i<object_keys.length;i++){
        let current_key=object_keys[i] // here you're accessing the array. create a variable to specify that the current key is the one you're looking at (cheese or milk).
        const key_data=shopping_cart[current_key] // here you're accessing the shopping cart. create a variable to access the key data within that key.   question for James: how does this work? I don't get how it's accessing the key data. What is a dynamic key?
        let product_total=key_data.price * key_data.quantity // create a variable to calculate the product total of an individual item.
        sum=sum+product_total // take the current sum and add the product total of the current item.
    }
    return sum // why is this outside of for loop?
}
console.log(sumProducts(shopping_cart))

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone(obj) {
    let new_object = {} //create new empty object

    let object_keys = Object.keys(obj) // convert object to array so you can run for a loop

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        new_object[current_key] = obj[current_key] //here you set the keys of the new object to be the exact same as the old object.
    }

    return new_object
}

let new_friends=deepClone(friend)

friend.james={ //this adds a new element to the "friend" object above. if you deep cloned successfully, the new object will not be modified, and therefore won't include this object. thispart tests to see if you actually deep cloned successfully. if this doesn't print, you got it. 
    hobbies: ['sleep']
}
console.log(new_friends)

// // (37:05) 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

let student = { //put braces around everything. then braces around the grades. student, chemistry, grade, physics, grade, math, and grade are ALL OBJECTS.
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function findAverageGrade(obj) {
    let list_of_subjects = Object.keys(obj) //both related to subjects
    let number_of_subjects = 0 //both related to subjects. anything you're counting, set equal to zero!!!
    let sum = 0 //anything you're counting, set equal to zero!!!

    for (let i = 0; i < list_of_subjects.length; i++) {
        let current_key = list_of_subjects[i] //this will be chemistry, physics, and math.
        let subject_grade = student[current_key].grade // tells it how to access the grades. ask James to explain.
        sum = sum + subject_grade //this will increase the sum (let sum = 0 above) by the subject grade. This is how we will get the sums of the grades.
        number_of_subjects++ // counts the number of grades, helps calculate the average.
    }

    let average_grade = sum / number_of_subjects // happens after the loop
    return average_grade
}

// why don't we create a new variable here like we do in many of these problems?
console.log(findAverageGrade(student))

// // 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.

function inception() { //create a function with no arguement
    let number_of_invocations = 0 //set a variable equal to zero so it can count how many times it's been invoked.

    return function () { //create a new anonymous function inside of the original function. 
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = inception()

incrementer()
incrementer()
incrementer()
incrementer()
incrementer() //we're invoking incrementer several times to see if it remembers the number of invocations. 

// // 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.
// function within a function. 2 returns.
let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]

function sortByGrade(arr) { //putting (arr) into the function tells the function to put the array into it, just like in math. 
    let sorted_array = grades_array.sort(function (a, b) { // a sorting function takes an a and a b as an argument. a is the current index and b is the next index.
        return b.grade - a.grade //this is the sorting criteria. it's telling the function to sort by grade in descending order. if you swap a and b, it will sort the opposite order.
    })

    return sorted_array
}
// why don't I need to make a new variable here???
console.log(sortByGrade(grades_array))

// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filterShortStrings(arr) {
    let new_array_of_long_strings = []

    for (let i = 0; i < arr.length; i++) {
        let current_string = arr[i]
        if (current_string.length > 5) {
            new_array_of_long_strings.push(current_string)
        }
    }

    return new_array_of_long_strings
}

console.log(filterShortStrings(array_of_short_strings)) //as James. How do I know when to do this?

// 12. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
// get rid of all commas with .replaceAll. .split will split the string into an array on all of the empty spaces. 

let sentence = 'hello world my name is hello, is is , what a great world, my, banana, james, cool'

function wordCounter(str) {
    let counter_dict = {} //an empty object

    let string_to_array = str.replaceAll(',', '').split(' ') //the replaceAll is going to delete every comma and replace it with an empty string.

    for (let i = 0; i < string_to_array.length; i++) {
        let current_word = string_to_array[i] //you often see the word current after the for loop is created.

        if (current_word in counter_dict) { // checks to see if word is in counter_dict. If the word is not, 
        // it moves on to the else clause, which will add the word to the counter_dict with a count of 1.
            counter_dict[current_word] = counter_dict[current_word] + 1 // let counter_dict current word = counter_dict current_word +1
        } else { //this is an else clause, telling JS to only count the word once if it only appears once.
            counter_dict[current_word] = 1
        }
    }
    return counter_dict
}

console.log(wordCounter(sentence)) //here you're calling the function on the array.