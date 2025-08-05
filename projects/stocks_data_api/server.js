// 1. Define stock ticker and API URL
const stockTicker='MRNA'
const range= '1mo'
const interval = '1d'

const url = `https://query1.finance.yahoo.com/v8/finance/chart/${stockTicker}?range=${range}&interval=${interval}`;

// 2. Fetch and process the data
async function getHistoricalPrices(){
    try{
        const res=await fetch(url)
        const data= await res.json()

        const result=data.chart.result[0]
        const timestamps=result.timestamp
        const prices = result.indicators.quote[0].close

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