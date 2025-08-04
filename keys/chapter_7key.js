
// 1. Create a string that includes some text and the text of the variable "name", using template literals.

// let name = 'gregothy'
// let special_string = `hello my name is ${name}`
// console.log(special_string)

// 2. Convert the following function into an arrow function syntax:

function add(a, b) {
    return a + b;
  }
  
  let add_arrow_version = (a, b) => { return a + b }
  
  console.log(add_arrow_version(2, 4))
  
  // 3. Create an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.
  
  const person = {
    name: 'james',
    age: 27
  }
  
  const { name, age } = person // this is where the destructuring happens. it takes the information out of the person object,
  // and creates separate variales. we can do this instead of writing const name=person.name and const age=person.age
  // It's like opening up the person object and pulling out just the pieces we want. 
  console.log(name, age) // since we destructed the object, we can now use 'name' and 'age as their own variables. 
  // In simpler terms, it's like having a backpack (the object) with different items in it, and then taking out specific items (destructuring) 
  // so you can use them separately. This makes the code cleaner and easier to work with!
  
  // 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.
  
  const colors_array = ['red', 'green', 'blue']
  const [first, second, third] = colors_array // uses []. the values in brackets are words but not strings because 
  // we are matching the variables we want to assign them to with the index of the actual color. 
  // these are the only differences between array destructuring and object destructuring. 
  console.log(first, second, third)
  
  // 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
  let arr1 = [1, 2, 3, 7]
  let arr2 = [4, 5, 6, 7]
  
  let combined = [...arr1, ...arr2] //this is the only part you need to study.
  console.log(combined)
  
  // 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?
  
  let obj1 = { name: 'henry', age: 14 }
  let obj2 = { name: 'gregothy', color: 'blue' }
  
  let combined_obj = {
    ...obj1,
    ...obj2 //since each key can only exist once, whichever example is written last, will be the one to be saved. in this case, obj2.
  }
  
  console.log(combined_obj)
  
  // 7. How do you safely attempt to access the street property of address inside an object user that may not exist, using optional chaining?
  // Optional chaining makes our code more reliable when dealing with incomplete data.

  const user = { name: 'Ben'}
  console.log(user?.address?.street) // this line is trying to safely check if there's an address and street inside the user object. 
  // ORDER MATTERS!!! Think of it like trying to find someone's exact location - you need to first make sure you're in the right 
  // neighborhood (address) before you can find the specific street. JavaScript needs to check things in order from left to right.

  
  // 8. Define a function "greet", that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".
  
  const greet = (name, greeting = 'Hello') => { //putting = 'Hello' here, makes Hello the default greeting if there isnt' one. 
    console.log(`${greeting} ${name}`)
  }
  
  greet('Bella') // since we are only passing in a name and not a greeting, the default greeting of 'Hello' above will print with this name.
  
  // 9. Explain the difference between let and const keywords, and give an example of when you would use each.
  
  let chosen_number = 4 // let is used when we know the value assigned to the variable could change.
  chosen_number = 83
  
  const my_name = 'james' // const guarantees the value assigned to the variable will not change. 
  my_name = 'henry'
  
// 10. Show 3 different ways to iterate over an array numbers and log each number to the console.
  

  let new_array = [1, 2, 3, 4]

  for (let current_value of new_array) { // this is a "for...of" loop, which is a newer and cleaner way to loop through arrays. 
    // Instead of dealing with indexes, it automatically gives you each value one at a time. This is probably the easiest to read 
    // and understand. It also prints the same numbers.
    console.log(current_value)
  }

  new_array.forEach((curr_value, curr_index)=> { //forEach allows it to execute a provided function for every element of the array.
    console.log(curr_value)
  })
  
  for (let i = 0; i < new_array.length; i++) { 

    const current_value = new_array[i]
    console.log(current_value)
  }
  
  // 11. Given an array of numbers, use the map method to create a new array with each number squared.
  
  // A for...if loop would do the same thing. However, this is why you would want to use the .map() method. 
  // The .map() method is a more advanced way of doing the same thing. Instead of manually looping through 
  // everything, .map() automatically applies the squaring operation to every element in the array and creates 
  // a new array with the results. It's more compact and probably what professional developers would use more often.
  // Map() is specifically designed for when you want to create a new array with transformed values from an original array.
  // The entire arrow function goes inside parenthesis because the .map() method takes an arrow function.

  let original_array = [2, 4, 5, 6, 8, 93]
  let squared_array = original_array.map((current_value, current_index) => { 
    let squared_value = current_value * current_value
    return squared_value
  })
  
  console.log(squared_array)

  
  // // 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?
  
  let current_age = 21
  
  let ageStatus = current_age > 18 ? 'Adult' : 'Minor' // if you do this, you don't need to do what's below! One line and done!
  
  if (current_age > 18) {
    ageStatus = 'Adult'
  } else {
    ageStatus = 'Minor'
  }
  console.log(ageStatus)
  
  // 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
  
  const logMessage = () => { console.log('logged in') } //make a function that prints 'logged in'
  
  let isLoggedIn = true // Next, there's a variable called isLoggedIn that's set to true. This is like a flag that tells us 
  // whether someone is logged into the system or not. Since it's set to true, it means the user is currently logged in.
  
  isLoggedIn && logMessage() // What's cool about this is that it will only run the logMessage function if isLoggedIn is true. 
  // It's kind of like saying "IF the user is logged in, THEN show the message." If isLoggedIn was false, the message wouldn't 
  // appear at all. This is actually a common pattern used in real websites. For example, when you log into Instagram or Snapchat, 
  // they probably have similar code that checks if you're logged in before showing you certain messages or content.
  
  // 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current 
  // user.name is undefined or null? This code shows how to work with JavaScript objects and the OR operator to handle usernames.
  
  let user_2 = {
    name: 'banana muffin'
  }
  
  let username = user_2.name || 'guest' //What this does is check if `user_2.name` exists and has a value. If it does, the username 
  // variable will be set to that value. But if `user_2.name` is empty or doesn't exist, then username will be set to 'guest' instead. 
  // This is a common way to set up default values in JavaScript.


  console.log(username) 

  //This is useful when building websites or apps where you want to show a default name like 'guest' if someone hasn't set up their username yet.