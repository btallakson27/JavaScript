// Methods

// querySelector: THE MOST COMMON WAY OF SELECTING ELEMENTS. you can use anything you 
// would target in CSS. looks for the first html element with the tag or class you specify.
// getElementByID: allows you to access an element in the document by targeting it's ID.
// getElementsByClass: same as element by ID but class instead.  
// addEventListener: listens for an event, like 'click', 'mouseover', or 'submit'
// createElement: creates an element. 
// appendChild: attach it at the end. 
// preventDefault: stops default behavior. 
// stopPropogation: specifically associated with the event interface. primary function is to 
// prevent further propogation of the current event in the capturing
// and bubbling phases of the event flow. 
// toggle: specifically within the DOMTokenList interface and the Element interface, and also in 
// libraries like jQuery. It provides functionality to switch elements or attributes between two 
// states, often adding or removing them based on their current presence.

// 1. Basic DOM Manipulation: How do you select an element with the ID main-title 
// and change its text content to "Welcome to the DOM World"?

    let title = document.getElementById('main-title') // establish variable and getElementById
    title.innerText = 'Welcome to the DOM World' // target variable and change inner text. 
    // innerText is quite literal, it changes the inner text...

// 2. Event Handling: Write the JavaScript code to listen for a click event on a button 
// with the ID submit-btn and alert "Button Clicked!".

    let submitBtn = document.getElementById('submit-btn') //pick element by id

    function alertFunction() { // make a function. Does NOT need to be named "alertFunction". 
        alert ('Button Clicked!') // ALERT! ALERT! THIS CREATES A POP-Up! 
    }
    
    submitBtn.addEventListener('click', alertFunction) // assign the function to the button!

    // summary: pick the element from the document. create a function that will have the pop-up with the message.
    // take the variable and addEventListener to listen for the click and when it is heard, engage the function. 

// 3. Dynamic Styling. How can you change the background color of a <div> with the class highlight to yellow when a user 
// hovers over it using JavaScript?

    let colorDiv = document.querySelector('.highlight') // When targeting a class, you must use qutoes and a dot!!!

    function yellowBackground() { //make a function
        colorDiv.style.background = 'yellow' //notice the function name is in the function (weird!). also colors in JS are words inside ''
    }

    colorDiv.addEventListener('mouseover', yellowBackground) //target the variable and listen for a hover (mousover) then engage function.

// 4. Element Creation and Insertion: Create a new <li> (list) element, set its text content to "New Item", 
// and append (attach) it to an existing <ul> (unordered list) with the ID list-container.

    let listContainer = document.getElementById('list-container') // call it list container because it will contain both lists. this accesses <ul>

    let newItem = document.createElement('li') // creates the HTML element IN THE DOCUMENT.
    newItem.innerText = 'New Item' // sets the text of the new element to "New Item"
    listContainer.appendChild(newItem) // take the original list and appendChild to pin it on the end. 

// 5. Form Handling: Write a script to prevent the default submission of a form 
// with the ID form-example and instead console log the value of a text input field within 
// the form when the submit button is clicked.

// DON'T FORGET THE E! E GOES WITH PARENTHESIIIIS!!! AND E IS FOR EVENT

    let form = document.getElementById('form-example') // call it form because that's what users are looking at. 

    function handleSubmit(e) { // e is for event, and the event here is submitting a form. 
        e.preventDefault() // take the event and prevent it. () to envoke it as a function.
        let inputValue = document.querySelector('#input-id').value
        console.log(inputValue)

    }

    form.addEventListener('submit', handleSubmit) // take the form listen for submit, then perform the function.

// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking 
// on a <button> contained within a <div> that both have click event listeners attached.
// event bubbling is a way to define the order in which event handlers are fired off.
// for example, if you have events set for a word in a paragraph, and the paragraph,
// it will bubble and perform both functions. 

let propBtn = document.querySelector('button') // because a button can be targeted in CSS, you must remember to use the querySelector. targeting the tag directly so no period as you do for a class. 

function StopBubbling(e) { //popogation: to spread out and effect a greater area. what's the event? bubbling!  stopBtnPropogation here is just the name, not the method.
    e.stopPropogation() // take the event, stop the propgation, and call upon it. 
}

propBtn.addEventListener('click', StopBubbling) // this uses the addEventListener to tell the button (propBtn) to run our stopBubbling function whenever someone clicks it.

// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring 
// that if the class is present it gets removed, and if it's not, it gets added? Basically saying,
// add a class if it doesn't exist, and remove it if it does.

let toggleElement = document.getElementById('toggle-element') // I wasn't given an ID so I made one up.

function toggleStyle() {
    toggleElement.classList.toggle('active') // take the original element, access the classList 
    // (allows you to access a list of all the classes), and toggle to search for the class we'll call 'active'.
}

toggleElement.addEventListener('click', toggleStyle)

// 8. Advanced Event Handling: Write JavaScript code to change the text content of a paragraph element to 
// display the current time when a button is clicked.

let paragraphElement = document.querySelector('p')

paragraphElement.innerText = new Date() // date is a class. didn't cover in this chapter, but we will in the next. 
// this will have the date and the time. 

// 9. Event Listener Removal: How do you remove an event listener from an element, and why might you need to do this?
// you want to do this when you want the event listener to work on some elements but not others. 
// don't need a variable if you're only acting on it once. 

document.getElementById('james-is-cool').removeEventListener('click', myFunction)

// 10. Manipulating Attributes and Properties: Write JavaScript code to change the src (source) attribute of an <img> element. 
// Then explain the difference between attributes and properties in the context of DOM elements.

document.querySelector('img').setAttribute('src', 'new-img.png')


// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store extra information 
// and how to access this information using JavaScript. You won't encounter this often.

let informationDiv = document.getElementById('info') // here we access the HTML element.
console.log(informationDiv.dataset.userId)

//<div id="info" data-user-id="12345" data-user-role="admin"></div>


