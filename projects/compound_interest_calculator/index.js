const prompt=require('prompt-sync')()

// 1. create a function that will calculate compound interest.

// let initial_amount=20000
// let monthly_installment=200
// let years_invested=30
// let interest=10

function compoundInterest(initial_amount, monthly_installment, years_invested, interest){
    let total=initial_amount
    let annual_contribution=monthly_installment*12

    for(i=0;i<years_invested;i++){
        total=total+annual_contribution
        total = total * ((100 + interest)/100)
    }
    return total.toFixed(2)
}

// 2. create a function that calculates the difference.

function regular_amount(initial_amount, monthly_installment, years_invested){
    let reg_amount=initial_amount+monthly_installment * 12 * years_invested
    return reg_amount.toFixed(2)
}


//3. creata a function that will produce an organized print statement using a template literal string to show the complete finanical breakdown.

function run(){
    let initial_amount=parseInt(prompt('What is your initial investment ($)?'))
    let monthly_installment=parseInt(prompt('What is your monthly installment ($)?'))
    let years_invested=parseInt(prompt('How many years would you like to invest?'))
    let interest=parseInt(prompt('What is your expected interest rate (%)?'))

    printOutput(initial_amount, monthly_installment, years_invested, interest)
}

//4. creata a run function, that will prompt the user to input all necessary values. 


function printOutput(initial_amount, monthly_installment, years_invested, interest){
    let final_value=compoundInterest(initial_amount, monthly_installment, years_invested, interest)
    let value_without_compounding=regular_amount=(initial_amount,monthly_installment, years_invested)
    let summary=`INIT_AMOUNT: $${initial_amount}\nMONTHLY_INSTALLMENT: $${monthly_installment}\n NUMBER_OF_YEARS: ${years_invested}\n
    INTEREST_RATE: ${interest}%\n\n FINAL_COMPOUNDED_VALUE: $${final_value}\n FINAL_NONCOMPOUNDED_VALUE: $${value_without_compounding}\n
    DIFFERENCE: $${final_value-value_without_compounding}}`
    console.log(summary)
}

run()