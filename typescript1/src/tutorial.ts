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

let numbersBox: number[] = [22, 66, 99, 68];

let colors: string[] = ['red', 'green', 'yellow'];

// mixed array assignment
let mixedArray: (number | string) [] = [1, 'two', 3, 'four'];


//****************************************************************************************************** */


                        // OBJECTS

let car:{brand: string, year: number} = { brand: 'Ford', year: 2000 };

car.brand = 'Toyota';
car.year = 2006;



let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost: 10 };
let notebook = {title: 'notebook'};

//!array whit objects inside whit described structure. 'cost?' is optional
let items:{ title: string, cost?: number }[] = [book, pen, notebook];

//restricted access 'readonly' on title (can not be changed)
let readItems: { readonly title: string, cost?: number }[] = [book, pen, notebook];
// readItems[0].title = 'new name'; //not working

//********************************************************************************************************** */


let bike: {brand: string, year: number} = {brand: 'yamaha', year: 2004};
// bike.year = 'random year'; //incorrect

let product1 = { title: 'shirt', price: 10 };
let product2 = { title: 'pants' };
let products: { title: string, price?: number } [] = [product1, product2];
products.push({ title: 'shoes', price: 5 });

//******************************************************************************************************** */


                // Functions


function seyHi(name: string){
    console.log(`Hello ${name.toUpperCase()}!`);    
}

seyHi('Mimi');

//************************************************************ */

//!by set "( price: number): number {.." sey to TS i need to return NUMBER! from function
function calculateDiscount( price: number): number {
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

//************************************************************** */
