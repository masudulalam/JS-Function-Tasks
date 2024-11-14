/**
 * 
 * 
 * Task-5:
 * Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 * 
 * 
 * 
 */


// Solution:
function odd_even (number) {
    if (number % 2 === 1) {
        return 'Odd';
    } else {
        return 'Even';
    }
}

const output = odd_even(1);
console.log(output);