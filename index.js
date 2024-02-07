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


// js-problems-part1-practice-tasks
// Task-1: Write a function to convert temperature from Celsius to Fahrenheit.

/*
function celciusToFahrenheit(temp){
   let fahrenheit = temp * (9 / 5) + 32;
   return fahrenheit;
}
const temperature = 40;
let result = celciusToFahrenheit(temperature);
console.log(result, '°f');
*/


//Task-2: You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


/*
function repeated(arr){
    const target = 5;
    let sortedArr = arr.sort();
    let duplicate = 0;
    for(let num of sortedArr){
    //    console.log(num);
       if(num === target){
        duplicate++;
       }
    }
    return duplicate;
}
const numbers = [5,6,11,12,98, 5];

let result = repeated(numbers);
console.log(result);
*/

// Task-3: Write a function to count the number of vowels in a string.

/*
let vowels = ['a', 'e', 'i', 'o', 'u'];
function countVoewl(str){
    
    let count = 0;
    for(let letter of str.toLowerCase()){
        // console.log(letter)

        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;

}

let str = "A Quick Brown Fox Jumps Over the lazy Dog";

let result = countVoewl(str)
console.log(result);
*/


//Task-4: Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


/*
function longestWord(sentence){
 let split = sentence.split(' ')
    let longWord = '';
    for(word of split){
        if(word.length > longWord.length){
            longWord = word;
        }
    }
    return longWord;
}
const str = "I am learning Programming to become a programmer";
let result = longestWord(str);
console.log(result);
*/

//Task-5: Generate a random number between 10 to 20.

/*
let result =Math.floor(Math.random() *  10 + 11 );
console.log(result)
*/


/***
 * Largest number from array
 */

/*
const age = [21, 23, 25, 27, 30, 40, 55];

function getMaxAge(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

let result = getMaxAge(age);
console.log(result);
*/

/**
 * Minimum Number/ Lowest Number
 */

/*
const age = [21, 23, 25, 27, 30, 40, 55];
function getMaxAge(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(num < min){
            max = num;
        }
    }
    return min;
}

let result = getMaxAge(age);
console.log(result);
*/

/**
 * Sum of Object values in array
 */

/*
let mobile = [
    {name: "Samsung", price: 23000, ram: '6gb'},
    {name: "Walton", price: 25000, ram: '8gb'},
    {name: "Iphone-x", price: 150000, ram: '12gb'},
]

function getPhoneTotalPrice(products){
    let total = 0;
    for(let product of products){
        total = total + product.price;
    }
    return total;
}

let result = getPhoneTotalPrice(mobile);
console.log(result);
*/


/**
 * Multi Layer Discount:
 * first100 --> 100tk ba full
 * 101To200 --> 90tk ba 10% discount
 * above200 --> 70tk ba 30% discount
 */

/*
function layerdDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

   if(quantity <=100){
    const first100Total = quantity * first100Price;
    return first100Total;
   }
   else if(quantity <=200){
    const first100Total = 100 * first100Price;
    const remaimingQUantity = quantity - 100;
    const remaimingQUantityTotal = remaimingQUantity * second100Price;
    let total = remaimingQUantityTotal + first100Total;
    return total;
   }
   else{
    const first100Total = 100 * first100Price;
    const second100Total =  100 * second100Price;
    const remaimingQUantity = quantity - 200;
    const remaimingQUantityTotal = remaimingQUantity * above200Price;
    let total = remaimingQUantityTotal + first100Total + second100Total;
    return total;
   }
}

let result = layerdDiscountTotal(201);
console.log(result);
*/

/**
 * Simple Calculator
 */

/*

function addition(num1, num2){
    return num1 + num2;
}
function substraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, opearation){
    if( opearation === 'addition'){
        let result = addition(num1, num2);
        return result;
    }
    else if( opearation === 'substraction'){
        let result = substraction(num1, num2);
        return result;
    }
    else if( opearation === 'multiplication'){
        let result = multiplication(num1, num2);
        return result;
    }
    else if( opearation === 'division'){
        let result = division(num1, num2);
        return result;
    }
    else{
        return "Please input two numbers";
    }
    
}

console.log(calculator(5,6,'multiplication'));
*/

//-------------js-problems-part2-practice-tasks

/**Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

/*
const heights2 = [167, 190, 120, 165, 137];
function lowestNumber(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
 let result = lowestNumber(heights2);
 console.log(result)
 */

 /**Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; 
*/

/*
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed']; 
function smallestName(names){
    let smallName = names[0];
    for(let name of names){
        if(name.length < smallName.length){
            smallName = name;
        }
    }
    return smallName;
}
let result = smallestName(heights2);
console.log( result);
*/

/*
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

/*
function calculateElectronicsBudget(tab, lap, mob){
    const laptop = 35000;
    const tablet = 15000;
    const  mobile = 20000;

    const laptopTotal = laptop * lap;
    const tabletTotal = tablet * tab;
    const mobileTotal = mobile * mob;
    const total = laptopTotal + tabletTotal + mobileTotal;
    return total;
}

let result = calculateElectronicsBudget(1, 1, 2);
console.log(result);
*/

/***Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 * 
 */

 /*
const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products){
    let total = 0;
    for(const product of products){
        
         total = total + product.price;
         
    }
    let average = total / products.length;
    return average;
}

let result = findAveragePhonePrice(phones);
console.log(result);
*/

/***Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 * 
 */

/*     
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalEmployeeSalary(data){
    let totalsalary = 0;
    for(const item of data){
        let total = item.experience * item.increment;
         totalsalary = totalsalary +  item.starting + total;
       
    }
    return totalsalary;
}
let result = totalEmployeeSalary(employees);
console.log('The company has to provide total:', result, 'tk');


*/


/**
 * Assighnment - 4
 * Problem - 1
 * 1. Declare a function named calculateMoney(). It will number of tickets as input.
 * 2. Fixed ticket price is 120 ; lets multifly this with ticket number;
 * 3. 
 */

/*
function calculateMoney(ticketSale) {
if(ticketSale < 0){
    return "Invalid Number";
}
else{
    const ticketPrice = 120;
    const darowanCoast = 500;
    const stuffLaunchCoast = 50 * 8;
    let totalCoast = darowanCoast + stuffLaunchCoast; 
    let totalSale = ticketPrice * ticketSale;
    let saveMoney = totalSale - totalCoast;
    return saveMoney;
}
     
}
*/

//Problem - 2

/*
function checkName(name) {

    if(typeof name !== "string"){
        return "invalid";
    }
    else{
        const goodChar = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
        let lastChar = name.slice(-1);
        if(goodChar.includes(lastChar.toLowerCase())){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
        
}
 
*/    

/* Problem - 3*/



// function deleteInvalids(array) {
//     if(Array.isArray(array)){
//         let filter = array.filter(function(num){
//             if(typeof num === "number" && num !== isNaN){
//                 return num;
//             }
              
//         })
//         return filter;
//     }
//     else{
//         return "Invalid Array"
//     }       
// }




// Problem - 4

/*
function password(obj) {

        const name = obj.name;
        const birthYear = obj.birthYear;
        const siteName = obj.siteName;

       if((obj.name === undefined) || (obj.birthYear === undefined) || (obj.siteName === undefined)) {
        return "invalid";
       }
      else if(birthYear.toString().length !== 4){
        return "invalid";
       }
    else{
        let firstCapitalLetter = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
       let uniqePassword = firstCapitalLetter +  "#" + name + "@" +  birthYear;
        return uniqePassword;
    }
}

*/

// Problem - 5

/*

function monthlySavings(arr, livingCost) {

    if(Array.isArray(!arr) || typeof livingCost !== "number"){
        return "invalid input";
    }
    else{
        let totalIncome = 0;
        let tax = 0;
        let savings = 0;
        for(let money of arr){
            totalIncome = totalIncome + money; 
            if(money >= 3000){
                tax = (money * 20) / 100; 
                
            }  
           
        }
    
        let totalCoast = tax + livingCost;
        savings = totalIncome - totalCoast;
        if(savings >= 0){
            return savings;
        }
        else{
            return "earn more"
        }
    }

}

*/