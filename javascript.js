// Function to find the max of two numbers
// Time to create: ~5 minutes
function max(a, b) {
    return (a > b) ? a : b;
}

// Function to find the max of three numbers
// Time to create: ~5 minutes
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

// Function to check if a character is a vowel
// Time to create: ~10 minutes
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// Function to sum all numbers in an array
// Time to create: ~10 minutes
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to multiply all numbers in an array
// Time to create: ~10 minutes
function multiply(numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Function to reverse a string
// Time to create: ~10 minutes
function reverse(str) {
    return str.split('').reverse().join('');
}

// Function to find the length of the longest word in an array
// Time to create: ~10 minutes
function findLongestWord(words) {
    return words.reduce((longest, word) => Math.max(longest, word.length), 0);
}

// Function to filter words longer than a given length
// Time to create: ~10 minutes
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// Modifications for map/filter/reduce
// a) Multiply each element by 10
// Time to create: ~5 minutes
const multiplyBy10 = arr => arr.map(x => x * 10);

// b) Return array with all elements equal to 3
// Time to create: ~5 minutes
const allEqualTo3 = arr => arr.filter(x => x === 3);

// c) Return the product of all elements
// Time to create: ~5 minutes
const productOfElements = arr => arr.reduce((acc, curr) => acc * curr, 1);

// Test function
// Time to create: ~10 minutes
function myFunctionTest(expected, func) {
    return func() === expected ? "TEST SUCCEEDED" : "TEST FAILED";
}

// Test cases
console.log("Expected output of max(20, 10) is 20 and " + myFunctionTest(20, function() { return max(20, 10); }));
console.assert(max(20, 10) === 20, "Test Failed: max(20, 10)");

console.log("Expected output of maxOfThree(5, 4, 9) is 9 and " + myFunctionTest(9, function() { return maxOfThree(5, 4, 9); }));
console.assert(maxOfThree(5, 4, 9) === 9, "Test Failed: maxOfThree(5, 4, 9)");

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() { return isVowel('a'); }));
console.assert(isVowel('a') === true, "Test Failed: isVowel('a')");

console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " + myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, "Test Failed: sum([1, 2, 3, 4])");

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, "Test Failed: multiply([1, 2, 3, 4])");

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest("ratset gaj", function() { return reverse('jag testar'); }));
console.assert(reverse('jag testar') === 'ratset gaj', "Test Failed: reverse('jag testar')");

console.log("Expected output of findLongestWord(['a', 'ab', 'abc']) is 3 and " + myFunctionTest(3, function() { return findLongestWord(['a', 'ab', 'abc']); }));
console.assert(findLongestWord(['a', 'ab', 'abc']) === 3, "Test Failed: findLongestWord(['a', 'ab', 'abc'])");

console.log("Expected output of filterLongWords(['a', 'ab', 'abc'], 1) is ['ab', 'abc'] and " + myFunctionTest(JSON.stringify(['ab', 'abc']), function() { return JSON.stringify(filterLongWords(['a', 'ab', 'abc'], 1)); }));
console.assert(JSON.stringify(filterLongWords(['a', 'ab', 'abc'], 1)) === JSON.stringify(['ab', 'abc']), "Test Failed: filterLongWords(['a', 'ab', 'abc'], 1)");

// Tests for map/filter/reduce modifications
console.log("Expected output of multiplyBy10([1, 2, 3, 4]) is [10, 20, 30, 40] and " + myFunctionTest(JSON.stringify([10, 20, 30, 40]), function() { return JSON.stringify(multiplyBy10([1, 2, 3, 4])); }));
console.assert(JSON.stringify(multiplyBy10([1, 2, 3, 4])) === JSON.stringify([10, 20, 30, 40]), "Test Failed: multiplyBy10([1, 2, 3, 4])");

console.log("Expected output of allEqualTo3([1, 2, 3, 4, 3]) is [3, 3] and " + myFunctionTest(JSON.stringify([3, 3]), function() { return JSON.stringify(allEqualTo3([1, 2, 3, 4, 3])); }));
console.assert(JSON.stringify(allEqualTo3([1, 2, 3, 4, 3])) === JSON.stringify([3, 3]), "Test Failed: allEqualTo3([1, 2, 3, 4, 3])");

console.log("Expected output of productOfElements([1, 2, 3, 4]) is 24 and " + myFunctionTest(24, function() { return productOfElements([1, 2, 3, 4]); }));
console.assert(productOfElements([1, 2, 3, 4]) === 24, "Test Failed: productOfElements([1, 2, 3, 4])");
