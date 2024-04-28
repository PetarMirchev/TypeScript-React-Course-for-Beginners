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

//!example how to be stored 2 types & to be accepted by TypeScript
let tax: number | string = 10;
tax = 100;
tax = '$20';
console.log(tax);


//!example whit 3 status & assumptions for result to be chosen from
let requestStatus: 'pending' | 'success' | 'error' =  'pending';
requestStatus = 'success';

//***************************************************************************************************** */

