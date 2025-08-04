const fs = require ('fs') // This imports Node's built-in File System (fs) module, which allows you to read and write files on your computer.

function readDb(dbName ='db.json'){ // reads data from a JSON file. 
    const data=fs.readFileSync(dbName, 'utf-8') // accesses the data from the File System, under the name dbName synchronously as a UTF-8 string.
    // UTF-8 stands for "Unicode Transformation Format - 8-bit". basically a way of turning letters, symbols, and emojis into bytes that computers
    // can store and understand. Why do we need it? Computers don't understand letters like A or あ or 🚀 — they understand binary numbers (0s and 1s).
    // To store or send text, we need to encode it into bytes. That’s what UTF-8 does.

    const converted_data=JSON.parse(data) // parse converts JSON data to a regular JS object. "objects like parsely"
    return converted_data // The difference between using **return** and **console.log** in the readDb() function comes down to what you want the 
    // function to do versus what you want to see.
}

function writeDb(obj, dbName ='db.json'){ // writes data to a JSON file. 
    // check that a user has passed in an object
    if (!obj){
        return
    }

    try{
        let converted_data=JSON.stringify(obj) // Converts the JavaScript object into a JSON string. "Jason likes strings". Even though "converted_data" is in the readDb function, they are completely unrelated because they exist in different functions. each function has it's own local scope.
        fs.writeFileSync(dbName, converted_data) // // THE dbName HERE IS THE MOST COMMON THING YOU MISS!!! YOU MUST TELL THE FUNCTION WHERE TO WRITE THE CODE!!! Writes that JSON string to a file (default: 'db.json') synchronously.
        console.log('Save successful')

    }catch (err) {
        console.log('Failed to save data\n', err.message) // err.message is a string that gives a short, human-readable description of the error.
        // So this line might print:
        // Failed to save data
        // ENOENT: no such file or directory, open 'db.json'      
    }
}

module.exports={ // This line exports both functions, so they can be used in other files. 
    readDb, writeDb
}
