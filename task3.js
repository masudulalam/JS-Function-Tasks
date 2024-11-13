/**
 * 
 * Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 * 
 * 
 */



// Solution:
function make_avg (numbers) {
    const sizeOfArray = numbers.length;

    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    const average = sum / sizeOfArray;

    return average
}

const numbers = [1, 2, 3, 4, 5];
const output = make_avg(numbers)

console.log('Average Value:',output);