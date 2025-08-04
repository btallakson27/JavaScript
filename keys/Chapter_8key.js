// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, 
// and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

function isUnique(str) {
    let count_dict = {} // ANY TIME YOUR'E COUNTING, YOU USE A COUNTER_DICT. This object will be used to keep track of the characters we've seen.

    for (let i = 0; i < str.length; i++) { //run a for loop that looks at each character one by one
        let current_char = str[i] // set letter that's being looked at as the current character
        if (current_char in count_dict) { // should this be an if-else block? For each character, it checks if we've seen it before by looking in our `counter_dict`.
            return false //If the character is already in `counter_dict`, it means we've seen it before, so the function immediately returns `false`
        }
        count_dict[current_char] = 1 // If we haven't seen the character before, we add it to `counter_dict`. This is like making a note 
        // that we've now seen this character.
    }

    return true //If the loop finishes without finding any repeats (which would have caused an early `return false`), 
    // the function returns `true`. This means all characters were unique.
}

console.log(isUnique(string_3))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let arr_1 = [2, 4, 6] // putting the numbers in order from least to greatest, makes them sorted arrays.
let arr_2 = [1, 3, 5]

function mergeSort(array_1, array_2) {  // In JavaScript, the names of function parameters don't need to match the names of the 
// arrays passed as arguments; the function can use any valid identifier for its parameters, and the arguments are mapped by position, not name. 
    let merged_array = [...array_1, ...array_2].sort()
    return merged_array
}

console.log(mergeSort(arr_1, arr_2)) // you can't just code "mergeSort()" because it's being called without any arguments, but the function 
// is defined to take two parameters (arr_1 and arr_2). This means that when the function runs, it won't have any arrays to merge. To fix this, 
// we need to pass the arrays we defined earlier as arguments.



// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. 
// Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.

let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5]

function findAllDuplicates(nums) {
    let duplicates = [] //This is an empty array where we'll store the numbers that appear more than once.
    let count_dict = {} //This is an empty object that we'll use to keep track of the numbers we've seen.

    for (let current_value of nums) { // run a For...of loop, that goes through each number in the input array. For each number, 
    // it does one of two things:
        if (current_value in count_dict) { // If the the `count_dict` has seen the number before... 
            duplicates.push(current_value) // it will be added to the `duplicates` array.
        } else { //If the number is not in `count_dict`, we add it to `count_dict` with a value of 1.
            count_dict[current_value] = 1
        }
    }
    return duplicates //After the loop finishes, the function returns the `duplicates` array, which contains all the numbers 
    // that appeared more than once in the original array.

}

console.log(findAllDuplicates(dummy_arr))

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. Typically, you won't write out what the rotated array will
// look like because you could be dealing with an array with 100 or even 1000 elements. Rotating arrays is a highly efficient and flexible way
// to reorganize information.

let start_array = [1, 2, 3, 4, 5, 6]
let k = 3 //This tells us to shift the elements of the array to the right by 3 positions.
let finish_array = [4, 5, 6, 1, 2, 3] //shows what we want the result to look like after rotating.

function rotateArray(nums, k) { // do I need to enter k here?
    let end_values = nums.slice(k) // This line creates a new array called `end_values` that contains all 
    // the elements from index `k` to the end of the original array. In our example, this would be [4, 5, 6]. So the first value, is the 3rd index.
 
    let start_values = nums.slice(0, k) // This creates another array called `start_values` that contains 
    // the first `k` elements of the original array. In our case, this would be [1, 2, 3].

    let new_array = [...end_values, ...start_values] // This line creates the final rotated array. It uses the spread operator (...) to combine `end_values` and `start_values` into a new array
    return new_array
}

console.log(rotateArray(start_array, k)) // do I need to enter k here?

// 5. Valid Parentheses (a common interview question)
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order. For example, this would return false. ([])

let s='()[]{}'
let s_2='[](}){'
let s_3='([])'

function validParenthesis(str) {
    const combos = { 
        '{': '}', 
        '(': ')',
        '[': ']'
    }

    let stack = []   

    for (let current_bracket of str) { // loop through each bracket in the string.
        if (stack.length === 0) { // if the stack is empty...
            stack.push(current_bracket)  // put the bracket in it.
        } else if (current_bracket in combos) {  // or if the current bracket is an opening bracket (JS only sees the keys)....
            stack.push(current_bracket) // put it in the stack.
        } else { // or
            let last_value_on_stack = stack[stack.length - 1] // (create a variable for the last value put into the stack)
            if (!(last_value_on_stack in combos)) { // if the last value is a closing bracket (JS doesn't see values)....
                stack.push(current_bracket) // put it in the stack.
            } else { 
                if (combos[last_value_on_stack] === current_bracket) { // the code is checking if the value of `last_value_on_stack` 
                // in the `combos` object exactly matches `current_bracket`
                    stack.pop() // remove it from the stack.   
                } 

            }
        }

    }

    return stack.length === 0 // After going through all the characters, if the stack is empty, it means all brackets were 
    // properly closed, so the function returns true. If there's anything left in the stack, it means some brackets weren't 
    // closed properly, so it returns false.
}

console.log(validParenthesis(s_2))

// Why this works.
// This method works because of how it uses the stack. When we see an opening bracket, we put it on the stack. 
// When we see a closing bracket, we check if it matches the last opening bracket we saw (which is on top of the stack). 
// If it matches, we can remove that opening bracket from the stack because we've found its pair.
// If we go through the whole string and the stack is empty at the end, it means every opening bracket found its matching 
// closing bracket in the correct order.
