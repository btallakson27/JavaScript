// 1. Define stock ticker and API URL
const stockTicker='MRNA'
const range= '1mo' // how far back you want to look.
const interval = '1d' // how often you want data points.

const url = `https://query1.finance.yahoo.com/v8/finance/chart/${stockTicker}?range=${range}&interval=${interval}`; // find url (directions in how to folder).
// next you must add the template literal strings. The ?, = and & are part of a query string. ? starts the query string, so it separates the base url from the parameters.
// the = assigns a value to a key. but you already set these values above, so do you really need to do them again? YES! And here's why. These variables live inside your code,
// but the Yahoo API doesn’t know what your variables are. It only sees the final URL string
// the & separates multiple parameters, so you use it to chain additional key-value pairs. 

// 2. Fetch and process the data

async function getHistoricalPrices(){
    try{
        const res=await fetch(url) // fetches the stock data from the url.
        const data= await res.json() // parses the response from JSON.
        console.log(JSON.stringify(data, null, 2)) // converts the object to a pretty-printed string with indentation.
        // This makes nested objects and arrays easier to read.

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
        const timestamps=result.timestamp 
        const prices = result.indicators.quote[0].close // 

        //3. Combine and print dates with closing prices
        const formatted=timestamps.map((ts,i)=>{
            const date=new Date(ts * 1000).toISOString().split('T')[0]
            return {date,close:prices[i]}
        })

        console.log(`\n📈 Historical Closing Prices for ${stockTicker}:\n`)
        formatted.forEach(entry=>{
            console.log(`${entry.date}: $${entry.close}`)
        })

    }catch (err){
        console.error('Error fetching data:', err.message)
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
