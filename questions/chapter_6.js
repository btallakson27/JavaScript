
// This chapter is all about asynchronous programming, which allows code execution to continue without waiting 
// for long-running operations to complete. Instead of blocking the execution thread, asynchronous operations are handled 
// in the background, and their results are processed later using mechanisms like callbacks, promises, or async/await. 
// This approach prevents the program from freezing or becoming unresponsive while waiting for tasks such as network requests, 
// file I/O, or timers.

// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds
// 99% mastery
    // const sleep = ms => new Promise(r => setTimeout(r, ms));


// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error. 
// Use try/catch to handle the error and log "Error fetching data" if the request fails.
// 99% mastery



// 3. Write an async function named fetchUserData that makes a GET request to the url, 'https://the-one-api.dev/v2/book' using async/await. 
// Log the response to the console, handling any errors that might occur.
// 97% mastery



// 4. Demonstrate how to make a POST request to 'https://the-one-api.dev/v2/book' to create a new user with JSON data { name: "John", age: 30 } 
// using async/await. Ensure you set the appropriate headers and catch any errors. copy and paste code block from number 3 because it's going
// to be very similar. 
// POST is used to send data to a server to create/update a resource. 
// 90% mastery



