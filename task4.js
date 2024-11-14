/**
 * 
 * 
 * Task-4:
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 * 
 * 
 * 
 */

// Solution:
function count_zero (binaryStr) {
    let count = 0;
    for (const element of binaryStr) {
       if (element === '0') {
        count = count + 1;
       }
    }
    return count;
}

const binary = '01111111111110110101111111111';

const output = count_zero(binary);

console.log(output);