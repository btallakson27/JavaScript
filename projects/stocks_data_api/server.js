// Steps 1-7 are about getting data.
// 1. Set up Express.
const express=require('express')
const app=express()
const port=8383

const cors=require('cors')

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public'))


// 4. Now that the server is alive, we need to collect the data.
async function scrapeData(ticker){ // WRONG you must include ticker as a parameter because the function needs to know which stock symbol (like “AAPL” or “TSLA”) to fetch data for.
    try{
        const range='1mo' //RANGE AND INTERVAL ABSOLUTELY MUST COME BEFORE YOU DEFINE THEM IN THE URL!!!
        const interval='1d'
        const url=`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=${range}&interval=${interval}` 
        // you can do this part before or after building the table in the frontend. up to you.
        const res = await fetch(url, { // needed to deploy because of Yahoo Finance API restrictions. if this wasn't an issue you could just run const res=await fetch(url)
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Accept': 'application/json,text/plain,*/*'
          }
        });
        
        const data=await res.json()
        if (!data.chart || !data.chart.result) return []

        const result=data.chart.result[0]
        const closes=result.indicators.quote[0].close
        const timestamps=result.timestamp

        const formatted=closes.map((close,i)=>{ // each closes[i] corresponds to timestamp[i]. close represents the actual price at that index. and it knows that 
          const date = new Date(timestamps[i] * 1000).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
                })
            return close != null ? {date, close} : null // then for each one, you build an object. 
        }).filter(Boolean)

        return formatted

    }catch(err){
        console.log('Error fetching data', err.message)
        return []
    }
}

// 5. Next you think, how will the frontend ask for this data? That's where you create this.
// Here the frontend sends the ticker to the backend, the backend extracts it and runs scrapeData(ticker), then sends back {prices: [...]}
// Now your backend is ready for frontend requests, so it's time to build the frontend structure.
app.post('/api', async (req,res)=>{
    const {stock_ticker: ticker}=req.body
    if (!ticker) return res.status(400).send({prices: []}) // here you do use return because you want to stop further execution of the 
    // route handler if no ticker is provided. WIthout return, the code would continue to try to call scrapeData(ticker) with undefined, which could cause errors.

    try{ //GOT HUNG UP HERE. YOU OVERTHOUGHT IT. SINCE YOU MAKE THE FUNCTION ABOVE, THERE'S NOT MUCH TO DO HERE.
        const prices=await scrapeData(ticker) // This line does not guarantee that the result is an array AND IT MUST BE AN ARRAY OR THIS ENTIRE THING WON'T WORK!!! 
        console.log('Returning data for', ticker, prices.length, 'rows')

        res.status(200).send({prices:prices || []}) // in JavaScript, the primary purpose of return is to stop execution of the current function, so you don't want it here.
    }catch(err){
        console.error('Error in /api', err)
        res.status(500).send({prices: []}) // you can include return here, but it's not required. The purpose of return would be to stop further code from running after sending a response,
        // but in your catch block, this is the last line — nothing executes after it anyway.
    }
})

// at this point, running node.js would return nothing, because you never actually started the server. 
// this happens below when you write app.listen(port, ()=>{...})

// 3. Create a quick test route.
app.get('/test', (req,res)=>{
    res.send('Server is running!') // why not console.log? // res.send sends a message back to the client’s browser (the frontend). So if you visit http://localhost:8383/test in a browser:
    // With res.send() → you’ll see “Server is working!” in the browser page.
})

// 2. Set up app.listen so it actually runs.
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
