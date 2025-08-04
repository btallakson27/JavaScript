
// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() { // we need an async function because the function above has some sort of Promise.
    await sleep(2000) //await is a method. 2000 is 2 seconds.
    console.log('hello world')
}

run()

// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will 
// likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/nonexistent') // res is for response, we're sending out a 
        // network request and that will come back with a response. and we need to define response as whatever comes back.
        console.log(res) // tries to print the response, which is a promise.
    } catch (err) {
        console.log('Error fetching data') // this will print if there was an error
    }
}

// fetchData()

// 3. Write an async function named fetchUserData that makes a GET request (all of these codes have been GET requests) 
// to 'https://the-one-api.dev/v2/book' using async/await. 
// Log the response to the console, handling any errors that might occur.

// In JavaScript, a GET request is an HTTP method used to retrieve data from a server. It's one of the most common types of requests 
// and is primarily used for fetching resources without modifying them. When a GET request is made, the server responds with the 
// requested data, which can then be used by the client.

async function fetchUserData() {
    try {
        const res = await fetch('https://the-one-api.dev/v2/book') // requests to get book data from this url. The await keyword makes 
        // sure the code waits for the response before continuing.
        const data = await res.json() // this takes the data and converts it to JSON format (which is like a special way to organize 
        // data that's easier for JavaScript to work with). bascially, you will see the data in the terminal as an object.
        console.log(data)
    } catch (err) {
        console.log('Error fetching data')
    }
}

// fetchUserData()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } 
// using async/await. Ensure you set the appropriate headers and catch any errors. 
// POST is used to send data to a server to create/update a resource. 
// SUPER similar to number 3. the only things that have changed are the name of the function, and the options you create.

async function postUserData() {
    try {
        const options = { // this creates an object that has all the information needed to send data to a server. 
            method: 'POST', // means we're sending data (like submitting a form)
            headers: { // The `headers` tell the server we're sending JSON data
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: 'james' }) // The `body` contains the actual data we're sending, 
            // which is a name "james" converted into JSON format
        }

        const res = await fetch('https://the-one-api.dev/v2/book', options) // actually sends the request to the server. 
    } catch (err) {
        console.log('Error fetching data')
    }
}

// In simpler terms, this is like filling out a digital form with the name "james" and sending it to a specific website,
//  while also making sure we handle any problems that might come up during the process.
