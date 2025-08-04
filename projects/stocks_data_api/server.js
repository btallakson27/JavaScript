// 1. define the web scraper

const cheerio= require('cheerio') // imports Cheerio library which is used to parse and manipulate HTML using jQuery-like syntax in Node.js. It's commonly used for web scraping.

let stockTicker= 'mrna' // 'mrna' is the stock ticker symbol for the company Moderna. a stock ticker is a unique abbreviation used to identify a publicly traded company and its securities on a stock exchange. 
let type = 'history' // tells Yahoo to show the historical data tab.

async function scrapeData(){
    
    try{
        // step a - fetch the page html
        const url=`https://finance.yahoo.com/quote/${stockTicker}/${type}?p=${stockTicker}` // ?p=${stockTicker} is a query parameter used internally by Yahoo to know which stock you're viewing.
        const res = await fetch(url) // tells JavaScript: “Wait for the page to finish downloading before continuing.” in other words, it sends an HTTP request to the Yahoo Finance URL and waits for the response. 
        const html = await res.text() // converts the HTTP response into plain HTML text, so it can be parsed later.

        const $ = cheerio.load(html) // loads the HTML content into Cheerio, allowing you to use jQuery-style syntax to search and extract elements from the HTML.
        const price_history=getPrices($)
        console.log(price_history)

    } catch (err){
        console.log(err.message)
    }
}

function getPrices(cher){ // short for cheerio
    const prices = cher('td:nth-child(6)').get().map((current_value)=>{
        return cher(current_value).text()
    }) // .get will access every value in the row and return it as an array. don't need index in this case. 
    return prices //after writing this function, go to the line under const $ = cheerio.load(html) and write "const price_history=getPrices($"
}

scrapeData()

// 2. initialize server that serves up an html file that the user can play with

// 3. define api endpoints to access stock data (and call webscraper)
