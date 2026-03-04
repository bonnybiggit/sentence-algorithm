// ======================
// STRING FUNCTIONS
// ======================

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}


// ======================
// ARRAY FUNCTIONS
// ======================

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr) {
    return arr.filter(num => num % 2 === 0);
}


// ======================
// MATHEMATICAL FUNCTIONS
// ======================

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence.slice(0, n);
}


// ======================
// TESTING SECTION
// ======================

console.log(reverseString("hello"));
console.log(countCharacters("Hello World"));
console.log(capitalizeWords("javascript is fun"));
console.log(findMax([3, 7, 2, 9]));
console.log(findMin([3, 7, 2, 9]));
console.log(sumArray([1, 2, 3, 4]));
console.log(filterArray([1, 2, 3, 4, 5, 6]));
console.log(factorial(5));
console.log(isPrime(7));
console.log(fibonacci(7));