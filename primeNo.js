// Number to check for primality
let number = 29;
let isPrime = true;

if (number === 1) {
    isPrime = false; // 1 is not a prime number
} else if (number > 1) {
    // Check from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false; // Negative numbers and 0 are not prime
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
