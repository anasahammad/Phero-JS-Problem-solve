// For this object below add a property named passenger capacity with value 5
/*
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.passenger = 5;
console.log(car);
*/

//Count the number of properties.
/*
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student).length);
*/


//Loop through an object and print the key-value pairs with their types
/*
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(key in myObject){
    let prop = key;
    let value = myObject[prop];
    let valueType = typeof value;
    let concat ='key:'+ prop + " | " + 'value:' + value + " | "+ 'type:' + valueType;
    console.log(concat); 
}

*/

// String Tasks:
// Task 1: Count how many times a string has the letter a

/*
let str = "Amar Sonar Bangla Ami tomay Valobashi!";
 let src = str.match(/a/g).length;
 console.log(src);
 */

//  Task-2: Count how many times a string has the letter a or A
/*
let str = "Amar Sonar Bangla Ami tomay Valobashi!";
 let src = str.match((/a/g) || (/A/g)).length;
 console.log(src);
*/

// Task-3: Check whether a string contains all the vowels a, e, i, o, u

/*
let str = "The quick brown fox jumps over the lazy dog";

let checkVowel = str.match(/[aeiou]/g).length;
console.log(checkVowel);
*/

//Task-4: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

/*
let str = "The quick brown fox jumps over the lazy dog";

let rep = str.replace("x", "y").replace("T", "t");
console.log(rep);
*/

//---------------array-looping-tasks---------

//Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

/*
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverse = colors.reverse();
console.log(reverse);
*/

//Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 78, 46]

/*
const numbers = [12, 98, 5, 41, 23, 78, 46];

for(num of numbers){
    if(num % 2 === 0){
        console.log(num)
    }
}
*/

//Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
/*
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let concatenate = '';
for(num of numbers){
    concatenate += num;
   
}
console.log(concatenate)
*/

//Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

/*
const statement = 'I am a hard working person';
const reverse = statement.split(' ').reverse().join(' ');
console.log(reverse)
*/

// ---------------JS-function-practice-task

// Task-1 Take four parameters. Multiply the four numbers and then return the result

/*
function multiply(num1, num2, num3, num4){
    let result = num1 * num2 * num3 * num4;
    return result;
}
console.log(multiply(4, 5, 6, 7));
*/


// Task-2 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

/*
function myFunction(number){
    if(number % 2 === 1){
        let multiply = number * 2;
        return multiply;
    }
    else {
        let divide = number / 2;
        return divide;
    }
}

let result = myFunction(5);
console.log(result)

*/


// Task-3 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/*
let total = 0 ;
function make_avg(myArr, size){
    for(number of myArr){
        total = total + number; 
    }
    const average = total / size;
    return average;
}
let myArr = [40, 45, 49, 75];
let length = myArr.length;
let result = make_avg(myArr, length)
console.log(result)

*/

// Task-4 Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


/*
function count_zero(binaryStr){
    const count = binaryStr.match(/0/g).length;
    return count;
}

let binaryStr = '10110011000011110';
let result = count_zero(binaryStr);
console.log(result)
*/

// Task-5 Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

/*
function odd_even(param){
    if(param % 2 === 0){
        return "This is an even"
    }
    else{
        return "This is odd"
    }
}
let value = 45;
let result = odd_even(value);
console.log(result);
*/