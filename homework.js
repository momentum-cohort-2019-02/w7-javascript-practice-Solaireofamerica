// 1. Set the variable `givenName` to the string "Addison".
const givenName = "Addison"
// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.
const candies = 20
const people = 6
let leftover = candies % people
// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.
function greeting(name) {
    return `Hello, ${name}!`
}

greeting(Chase)
// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.
function isOdd(number) {
    let x = 2
    //  return Math.abs(number % 2) === 1
    if (number % x === 1) {
        return true
    } else if (number % x === -1) {
        return true
    } else {
        return false
    }
}
// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.
function isEven(y) {
    let x = 2
    if (y % x === 0) {
        return true
    } else {
        return false
    }

}
// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.
function fahrenheitToCelsius(F) {
    let c = (F - 32) * (5 / 9)
    return c
}
// (32°F − 32) × 5/9 = 0°C
// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.
function celsiusToFahrenheit(C) {
    let f = (C * (9 / 5)) + 32
    return f
}
// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.
function fahrenheitToKelvin(F) {
    let c = fahrenheitToCelsius(F)
    let k = c - -273.15
    return k
}
// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.
function lesser(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}
// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.
// template literals are like f strings. magic.
function multigreeting(name, language) {
    let greeting;
    if (language === 'en') {
        greeting = 'Hello,';
    } else if (language === 'es') {
        greeting = '¡Hola,';
    } else if (language === 'fr') {
        greeting = 'Bonjour,';
    } else if (language === 'eo') {
        greeting = 'Saluton,';
    } else {
        return
    }
    return `${greeting} ${name}!`
}

// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
function sum(numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total
}
// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(array) {
    if (array.length > 0) {
        let total = sum(array);
        return total / array.length;
    }
    return;
}
// function average(array) {
// if (array.length == 1) {
//     return array / 1
// }
//     if (array == 0) {
//         return undefined
//     }
//     let total = 0
//     for (let x = 0; x < array.length; x++) {
//         total += array[x];
//     }
//     return total / array.length;
// }

// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
function minimum(array) {
    let lowest = array[0]
    for (let num of array) {
        if (num < lowest) {
            lowest = num
        }
    }
    return lowest
}
// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
// slice returns an unsorted copy of an array
function selectionSort(unsortedArray) {
    let unsortedCopy = unsortedArray.slice(0)
    let sortedVersion = []
    for (let x = 0; x < unsortedArray.length; x++) {
        let lowest = minimum(unsortedCopy)
        unsortedCopy.splice(unsortedCopy.indexOf(lowest), 1)
        sortedVersion.splice(x, 0, lowest)
    }
    return sortedVersion
}
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.