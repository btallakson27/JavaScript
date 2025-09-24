const express = require('express')             // Import Express (web framework)
const fetch = require('node-fetch')            // Import fetch for Node.js (API requests)
const cors = require('cors')                   // Import CORS to allow cross-origin requests

const app = express()                          // Create Express app instance
const port = 8383                              // Port the server will run on

// Middleware
app.use(express.json())                        // Parse incoming JSON request bodies
app.use(cors())                                // Enable CORS so other apps can access this server
app.use(express.static('public'))              // Serve static files from "public" folder

// Fetch stock data from Yahoo Finance API
async function scrapeData(ticker) {
    try {
        const range = '1mo'                    // Time period = 1 month
        const interval = '1d'                  // Data interval = 1 day
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=${range}&interval=${interval}` 
                                               // Construct Yahoo Finance API URL

        const res = await fetch(url)           // Fetch stock data from Yahoo API
        const data = await res.json()          // Convert response to JSON

        if (!data.chart || !data.chart.result) return []  
                                               // If response is invalid, return empty array. this is a little “defensive coding”. 
                                               // If there’s no valid data, instead of crashing the code, or returning null/undefined (which would confuse your API response structure), it safely returns an empty array.

        const result = data.chart.result[0]    // First result object
        const closes = result.indicators.quote[0].close  
                                               // Array of closing prices
        const timestamps = result.timestamp    // Array of UNIX timestamps

        const formatted = closes.map((close, i) => {    // Each closing price corresponds to a timestamp at the same index in the timestamps array.
            const date = new Date(timestamps[i] * 1000) // Convert UNIX timestamp → JS date. Here, i is the current index from the closes array. By using timestamps[i], each closing price is matched with its correct date. You could iterate over timestamps, but mapping over closes Skips null prices using return close != null ? ... : null and filters out timestamps that don’t have a price. If we mapped timestamps first, we’d need extra logic to handle null closes.
                .toISOString()                          // Format to ISO string (YYYY-MM-DDTHH:mm:ssZ)
                .split('T')[0]                          // Keep only the date part (YYYY-MM-DD)

            return close != null ? { date, close } : null  // a shorthand if-else. It says, if there is a current closing price, return the date and closing price, if not, return null.
                                               // Return { date, close } object, skip nulls
        }).filter(Boolean)                      // Removes null entries. So any missing or invalid prices are skipped from the final array. They simply don’t show up in the final array.

        return formatted                        // Return cleaned stock price data
    } catch (err) {
        console.log('Error fetching stock data:', err.message)  
                                               // Log errors for debugging
        return []                               // Return empty array on error
    }
}

// API endpoint (POST request)
app.post('/api', async (req, res) => { // creates a route that listens for POST requests to /api, allowing clients to send data (like a stock ticker), process it on the server, and return a response.
    const { stock_ticker: ticker } = req.body  // Extract "stock_ticker" from request body. This line instantiates ticker.
    if (!ticker) return res.status(400).send({ prices: [] })  // does three things. 1. res.status(400) → Sets HTTP status code to 400 Bad Request. Indicates to the client: “You didn’t send required data.”
                                                              // 2. .send({ prices: [] }) → Sends a JSON response with an empty prices array. Keeps the response structure consistent, so clients can always expect prices to exist.
                                                              // 3. return → Stops further execution of the route handler. No further processing (like calling scrapeData) happens.
    try {
        const prices = await scrapeData(ticker)// Fetch stock data
        console.log('Returning data for', ticker, prices.length, 'rows')  
                                               // Log result info
        res.status(200).send({ prices: prices || [] }) // status(200) sets the HTTP status code of the response. 200 OK → indicates the request was successful.
                                               // sends data back to the client. || [] = fallback: If prices is null, undefined, or any falsy value, it will default to an empty array. Ensures the client always receives a consistent array in prices.
    } catch (err) {
        console.error('Error in /api:', err)   // Log error if API call fails
        res.status(500).send({ prices: [] })  // Respond with empty array + 500 status. 500 = Internal Server Error.
    }
})

// Optional test endpoint
app.get('/test', (req, res) => {
    res.send('Server is running!')             // Simple GET test route
})

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)  
                                               // Print message when server starts
})
