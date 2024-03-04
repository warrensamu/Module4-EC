// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
} while (isNaN(investment) === true ) 
do  {
rate = parseFloat(prompt('Enter an interest rate less than 20% as xx.x'));
} while (isNaN(rate) === true || rate < 0 || rate > 20)
do {
years = parseInt(prompt('Enter the number of years, between 1 and 30, you want to invest for'));
} while (isNaN(years) === true || years < 1 || years > 30)

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);