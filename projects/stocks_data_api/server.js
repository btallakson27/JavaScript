// 1. Define stock ticker and API URL
const stockTicker='MRNA' // stock symbol for Moderna.
const range= '1mo' // the time range.
const interval = '1d' // the interval (daily closing prices)

const url = `https://query1.finance.yahoo.com/v8/finance/chart/${stockTicker}?range=${range}&interval=${interval}`;
// by setting range=1mo and interval=1d in your URL, you asked for daily data. The API respects that request and outputs one timestamp per trading day.
// this becomes especially useful when you want to find this specific info in JSON as you will see below.
// find url (directions in how to folder). next you must add the template literal strings. The ?, = and & are part of a query string. ? starts the query string, 
// so it separates the base url from the parameters. the = assigns a value to a key. but you already set these values above, so do you really need to do 
// them again? YES! And here's why. These variables live inside your code, but the Yahoo API doesn’t know what your variables are. It only sees the final URL string
// the & separates multiple parameters, so you use it to chain additional key-value pairs. 

// 2. Fetch and process the data

async function getHistoricalPrices(){
    try{
        const res=await fetch(url) // gets the stock data from the url/internet.
        const data= await res.json() // This parses the raw JSON body and gives you a regular JavaScript object so you can work with it in your code.
        //The res object you get from fetch() is a special Response object, not raw JSON or a usable JS object by default, which is why you need to do this,
        // then immediately turn it into a usable JSON object in the next line of code below. 
        
        // const data await JSON.parse(res) is incorrect and will not do the same thing, and here's why.
        //res is a Response object from fetch(). .json() is a built-in method of the Response object that: Reads the body stream, Parses it as JSON, 
        //and returns the result as a JavaScript object. This is the standard and correct way to get JSON from a response. 
        // on the other hand, const data = await JSON.parse(res) is incorrect because res is a Response object, not a JSON string.
        // JSON.parse() expects a JSON-formatted string, not a Response object. Bottom line: always use const data= await res.json() when working with fetch() and JSON APIs.
        
        console.log(JSON.stringify(data, null, 2)) // If you console.log(data) directly, most environments will show it in a 
        // collapsible object form, meaning it will not show all nested levels by default. You might see [object] or [array =] placeholders
        // if the structure is deep. JSON.stringify on the other hand, shows it as a full raw JSON text, readable anywhere.
        // The bottom line is you need to do the previous steps because just fetching the raw  url, will give you a JSON string exactly as sent by Yahoo. 
        // It would be all on one line, hard to read. Parsing it into a JS object, and then stringifying it into a JSON file, formats it with indentation 
        // so you can actually explore it in your console.

        // all 3 of the following lines are extracting specific parts of the JSON response returned by the Yahoo Finance API.
        const result=data.chart.result[0] 
        // data.chart.result is an array. [0] means you're accessing the first element of that array. but the first thing inside it is "meta", not "timestamp". 
        // So why does the original code work when it says "result.timestamp"? Because there's more in the object than just "meta".
        // You're only seeing the beginning of the object printed, ie. the top of result[0]. The full structure continues down and includes more keys like "timestamp" and "indicators".
        // data is the full JSON response from the API. 
        // data.chart accesses the "chart" key.
        // data.chart.result[0] grabs that single object.
        // We assign it to a variable called result so we can use it more easily.
        // Now result contains all the useful stock data.

        // when it comes to all the notes for const result=data.chart.result[0] above, it starts with knowing that here you will need to access the timestamp and indicators.
        const timestamps=result.timestamp // you know to look for "timestamp because it is an array of Unix time values, one for each trading day.
        const prices = result.indicators.quote[0].close // you know to look for "indicators" because it contains price-related arrays (open, close, high, low, volume).
        // .close is indeed the array of closing prices for each time period in the chart data you got from Yahoo Finance’s API.
        
        //3. Format the data.
        const formatted=timestamps.map((ts,i)=>{ // map (loop over) each element in the array (timestamps) and pass in the parameters
                // (ts,i) so for each timestamp (ts), at position i, make a new object that has a readable date from ts and the closing 
                // price from prices[i]." this object is being returned below.
            const date=new Date(ts * 1000).toISOString().split('T')[0] // ts is just the name you gave to each element of the array during iteration.
            // for ts * 1000, Your ts value is a Unix timestamp in seconds, JavaScript’s Date 
            // object expects milliseconds since Jan 1, 1970, so multiplying by 1000 converts seconds → milliseconds. new Date(...) Creates a Date object 
            // from that timestamp. Now you have something like: Fri Aug 12 2022 00:00:00 GMT+0000 .toISOString() Converts the date into an ISO 8601 string 
            // in UTC time, e.g.:"2022-08-12T00:00:00.000Z" .split('T') Splits that ISO string into two parts: ["2022-08-12", "00:00:00.000Z"] The 'T' is 
            // the separator between the date and time in ISO format. [0] Takes the first part (just the date part): "2022-08-12"
            // Result: date now contains just the date in YYYY-MM-DD format.
            return {date,close:prices[i]} // For each timestamp index i, you look up the corresponding closing price from the prices array.
                // this line of code returns an object literal with two properties. 
                // In JavaScript, { date, close: prices[i] } is shorthand for: { date: date, close: prices[i] }
        })

        console.log(`\n📈 Historical Closing Prices for ${stockTicker}:\n`)
        // \n → adds a line break before and after the text, to make the console output look cleaner.
        // 📈 → just an emoji to decorate the output.
        // ${stockTicker} → string interpolation: inserts the value of the stockTicker variable (in your case "MRNA") into the string.
        // example output -> 📈 Historical Closing Prices for MRNA:
        // .forEach(...) loops through every object in that array.
        // "entry" is a parameter name you chose, and it's part of an arrow function. 
        // JavaScript calls your arrow function once for each element in the array.
        // So entry is just a variable that represents the current array element while looping.
        formatted.forEach(entry=>{
            console.log(`${entry.date}: $${entry.close}`)
        })

    }catch (err){
        console.error('Error fetching data:', err.message) // This logs an error message to the console (like console.log, but styled as an error).
    }
}

// 4. initialize server that serves up an html file that the user can play with

const express = require('express')
const app=express()
const port = 8383 // the express server is serving the HTML file, index.html from your public folder. So whatever is in there 
// will show when you go to your search bar and type "localhost:8383"

// middleware
app.use(express.json())
app.use(require('cors')())
app.use(express.static('public'))

app.listen(port, ()=>{console.log(`Server hsa started on port: ${port}`)})

app.get('/', (req, res) => {
  res.send('Server is working!')  
})

// 5. define api endpoints to access stock data

getHistoricalPrices()
