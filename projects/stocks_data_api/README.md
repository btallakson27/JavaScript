# Stock Data Web Scraper

This is a simple web app that lets users enter a stock ticker symbol (like AAPL or TSLA) and see the last month's closing prices in a table.  

## Features
- Fetches stock data from Yahoo Finance
- Displays data in a clean HTML table
- Handles errors gracefully if the ticker is invalid

## Setup
1. Clone the repo: git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
2. Navigate into the project folder: cd YOUR_REPO
3. Install dependencies: npm install
4. Start the server: node index.js
5. Open `http://localhost:8383` in your browser.

## Feedback Requested
When I input a stock ticker, the terminal shows "Returning data for mrna 22 rows", but the web page shows "Error fetching stock data. Please try again" 
and the web page console shows, "(index):146 Error fetching stock data: Cannot read properties of undefined (reading 'forEach')". I've spent hours troubleshooting but just don't have the solution.
If you have a solution or can help in any way I would really appreciate it. Thank you.
