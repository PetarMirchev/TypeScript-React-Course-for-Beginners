// console.log('typescript test console work?');


interface someMyInterface {
    name: string;
    id: number;
}

let someObject: someMyInterface = {
    name:'Random',
    id: 1234,
};

console.log(someObject);


//*************************************************************************************************** */


let awesomeName: string = 'AwesomeNameBlaBla'; // you can use also only let [awesomeName = 'AwesomeNameBlaBla';] is Ok for TypeScript
awesomeName = awesomeName.toLowerCase();
console.log(awesomeName);

let sumNumber: number = 20; // you can use also only let [sumNumber = 20;] is Ok for TypeScript, He knows the type
sumNumber = 12 - 1;

let isOkThis: boolean = true;
isOkThis = false;

//**************************************************************************************************** */

//Union type -- var dat hold many types in it

//! example how to be stored 2 types & to be accepted by TypeScript
let tax: number | string = 10;
tax = 100;
tax = '$20';
console.log(tax);


//! example whit 3 status & assumptions for result to be chosen from
let requestStatus: 'pending' | 'success' | 'error' =  'pending';
requestStatus = 'success';

//***************************************************************************************************** */

//! ANY type -- if your input is 'any' in function the result & all combinations of data will be 'any'
let notSure: any = 4;
notSure = 'maybe is a string...?';
notSure = false;

//************************************************************************************************* */

//! possibility to return 'undefined' as result
const books = ['1984', 'Brave', 'Random Title'];

let foundBook: string | undefined;

for (let book of books) {
    if(book === '1983'){
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break; 
    }
}

console.log(foundBook?.length);

//******************************************************************************************************* */

let discount: number | string = 20;

//! set variable to be only 4 types of custom content
let orderStatus: 'processing'|'shipped'|'delivered'|'cancelled' = 'processing';

// orderStatus= 'stop'; // Error --> Type '"stop"' is not assignable to type '"processing" | "shipped" | "delivered" | "cancelled"'.


//********************************************************************************************************* */

//! Array in TS

let price: number[] = [100, 75, 55, 47]; //
// price.push('ups') // error --> Argument of type 'string' is not assignable to parameter of type 'number'.

let fruits: string[] = ['apple', 'orange', 'banana'];


//! TS understanding that array is empty all the time if you don't sey the data type! 
// let randomValues:[] = ['hello']; // error --> Type '[string]' is not assignable to type '[]'. Source has 1 element(s) but target allows only 0.

// TS dynamic assignment of control type values --> NG!
let names = ['Anna', 'Gogo', 11]; //?? --> let names: (string | number)[]


