// These questions will likely be in an interview. 

// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if 
// all characters are unique, and false otherwise. Assume the string has no spaces, because spaces count as repeated characters.
// MASTERED ...Brisk to see how you can write this code using a For...of loop.

let string1='abcdefghijkl'
let string2='himynameisbenandilikepizza'



// 2. Merge Sorted Arrays
// Question: Given two sorted arrays arr_1 and arr_2, write a function to merge them into a single, sorted array.
// MASTERED

// let arr_1=[3,4,5]
// let arr_2=[6,7,8]



// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice 
// and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. 
// You must achieve this with O(n) time complexity.
// MASTERED

let array_of_integers=[1,2,3,53,765,45,1,2,3,6,67,8,4,8]



// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. Typically, you won't write out what the rotated array will
// look like because you could be dealing with an array with 100 or even 1000 elements. Rotating arrays is a highly efficient and flexible way
// to reorganize information.
// MASTERED

let unrotated_array=[1,2,3,4,5,6,7]
let k=3



// 5. Valid Parentheses @ 32:30
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string 
// is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// MASTERED

let s='(){}[]'
let s_2='(){()}]'

const validParenthesis=(str)=>{

    let combos={
        '(':')',
        '{':'}',
        '[':']'
    }

    let stack=[]

    for(let current_bracket of str){
        if (stack.length===0){
            stack.push(current_bracket)
            }else if(current_bracket in combos){
                stack.push(current_bracket)
            }else{
                let last_value_on_stack=stack[stack.length-1]
                if (!(last_value_on_stack in combos)){ //closing bracket
                    stack.push(current_bracket)
                }else{
                    if (combos[last_value_on_stack]===current_bracket){
                        stack.pop()
                    }
                }
            }
        }
        return stack.length===0
    }
    console.log(validParenthesis(s_2))

