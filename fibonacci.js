// Number of terms in the Fibonacci series
let numTerms = 10;

// Initialize the series with the first two numbers
let fibonacciSeries = [0, 1];

// Generate the Fibonacci series
for (let i = 2; i < numTerms; i++) {
    // Calculate the next number in the series
    let nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    // Add the next number to the series
    fibonacciSeries.push(nextNumber);
}

// Print the Fibonacci series
console.log(fibonacciSeries);