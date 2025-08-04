// 1. Define a variable called name and set it equal to a string that contains your name. 
// Then, demonstrate how you would change its value to your full name.

let name = 'Ben'
 name = 'Ben Tallakson' // doing this says, forget what you said the variable name was equal to, this is what it's equal to now!

 console.log(name)

 // 2. How would you compare two variables, a and b, to check equality?

 let a = 5
 let b = 7
 console.log(a === b) 

 // 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. 
 // If true, it should log "Adult" to the console; otherwise, it should log "Minor".

 let age = 27 // missed this part
 if (age > 18) { //you put age outside the ()
    console.log('Adult') // missed quotes
 } else { // you wrote if else
    console.log('Minor') // missed quotes
 }
 
// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.
// Remember: set up array length, no empty array. second bracket after if (is_even). console.log after that.
let numbers_to_ten = [0,1,2,3,4,5,6,7,8,9,10] //create an array
let array_length = numbers_to_ten.length //you need to tell it what the array length is, so you can in the next step.
for (i = 0; i < array_length; i++) { // put {} on same line as For
let current_value = numbers_to_ten[i]
let is_even = current_value % 2 === 0
if (is_even) {
   console.log(current_value)
}
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
// Remember: if you used the counter as i previously in your code, you now must use a different letter, like j. 

let array_numbers = [2,5,13,22,5,7,21,43,25] //create an array
   let sum = 0 //tells it to start counting with the sum of 0, allowing it to count every sum in the array.
   let j = 0 // for a while loop we put the tracker here, tracks the index in the array.
while (sum < 100) { // put { on same line as While}
let new_current_value = array_numbers[j] //keep going through the loop.
sum = sum + new_current_value //then take the sum and add the current value to it.

j++ //for a while loop we put the counter here
}
console.log(sum)

// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle.
// Remember: return area. 
function calculateArea(width, height) { // put {} on same line as function
   let area = width * height
   return area
}
let area_one = calculateArea(9, 10)
let area_two = calculateArea(5, 9)
console.log('The calculated area:', area_one) //writing 'The calculated area:' inside the parenthesis tells it to print this text THEN whatever area_one is.
console.log('The calculated area:', area_two)






