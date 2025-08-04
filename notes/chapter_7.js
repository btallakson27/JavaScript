// arrow functions

const myFunction = (input) => {
    console.log('Executed function')
}


// Ternary operator ?

let friends = ['lucy', 'gregothy', 'janice']

let isJaniceFriend = friends.includes('janice') ? true : false

// if (friends.includes('janice')) {
//     isJaniceFriend = true
// } else {
//     isJaniceFriend = false
// }

console.log(isJaniceFriend)

// optional chaining

const james = {
    hobbies: {
        skiing: {
            pairs_of_skis: 1
        }
    }
}

console.log(james?.['hobbies']?.football?.pairs_of_boots)


// object destructuring
let person = {
    name: 'james',
    age: 27
}

const { name: person_name, age } = person

console.log(person_name, age)

// array destructuring

let oldArray = [4, 5]

// let value1 = oldArray[0]
// let value2 = oldArray[1]

let [value1, value2] = oldArray

//template literal string

let my_name = 'james'

console.log('hello my name is ' + my_name + ' and i like the fraction 3/8 which has a decimal value of ' + 3 / 8)

console.log(`hello my name is ${my_name} and i like the fraction 3/8 which has a decimal value of ${3 / 8}`)

// short circuits && ||

///AND &&

let person_dict = { name: 'jon' }

let person_name_2 = person_dict.name && 'jonny'

if (person_dict.name) {
    person_name_2 = 'jonny'
}

let person_name_3 = person_dict.name || 'default name'

// enhanced object literals 

let breed = 'corgi'
let animal = 'dog'

const animal_info = {
    breed,
    animal
}


//spread operator ... adds array values onto a previous array?
let demo_array = [1, 2, 3, 4, 5]
let demo_array_2 = [...demo_array, 6, 7, 8]

let demo_object = {
    favorite_color: 'blue'
}

let demo_object_2 = {
    ...demo_object,
    favorite_food: 'cookies and cream icecream'
}

let new_object = {
    ...demo_object
}

// array methods

let my_cool_array = [8, 3, 93, 3, 123, 2, 34, 5, 6, 6]

//for each. doesn't return anything. it's more for a repeated operation that we want to do for every element in the array.

my_cool_array.forEach((current_value, current_index) => {
    console.log(`The current value is: ${current_value} & the current index is ${current_index}`)
})

//map. similar to forEach, except it's not for consoling. we want to manipulate every value and return something different. In this odd example, 
// originally at the first index we had 8, now we're going to get a string that contains 8. doesn't modify the original array.
let my_new_array = my_cool_array.map((current_value, current_index) => {
    return `the value is ${current_value}`
})

console.log(my_new_array)

// filter. filters the current array and returns a new one. 
let filtered_array = my_cool_array.filter((curr, curr_index) => {
    let is_even = curr % 2 === 0
    return !is_even //the ! here makes everything the inverse, so it's actually saying kick out even numbers and only put odd numbers in the array. 
})

console.log(filtered_array)


//reduce. arguably the most complicated method. allows you to do everything with the map, forEach and filter all in one. 
let reduced_array = my_cool_array.reduce((accumulator, current_value, current_index) => {
    console.log(`ACCUMULATOR: ${accumulator}\nCURRENT_VALUE: ${current_value}\nCURRENT_INDEX: ${current_index}`) 
    //the accumulator is something we build up as we loop over every value. 
    return accumulator + `,${current_value}:${current_index}`
}, '')

console.log(reduced_array)