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


//! problems using 'ANY' type in function!
function addThree(number: any){
    let myCustomHardNumber: number = 3;
    return number + myCustomHardNumber; //3 + 3 
}

const result = addThree(3); // functions return type 'ANY' and i can du everything!
const someValue = result;
//!result is from type 'ANY' and dat cant stop me use staff not passible to be used (.myMethod(); ,.toLowerCase(); ...)!
// someValue.myMethod();// tutorial.ts:171 Uncaught TypeError: someValue.myMethod is not a function
// someValue.toLowerCase(); // incorrect will throw error in code when runs


//*********************************************************************************************************** */


// Create a new array of names.
// Write a new function that checks if a name is in your array. 
// This function should take a name as a parameter and return a boolean.

const userNames: string[] = ['Pepi', 'Mimi', 'Ana', 'Gogo', 'Tasho', 'Petar'];

function isNameInList(name: string): boolean {
    return userNames.includes(name);
};

let nameToCheck = 'Pepi';

if (isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is ON the list!`); 
} else {
    console.log(`${nameToCheck} is NOT the list!`);
}


//********************************************************************************************************* */


//! default & optional parameters

//example for optional parameters
function calculatePrice( price: number, discount: number): number {
    return price - (discount || 0); // work whit optional parameters in TS using '||' --> (discount || 0)
};

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);


//example for default parameter (penaltyPoints: number = 0)
function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
    return initialScore - penaltyPoints; //if not 'penaltyPoints' number is pass default is '0'
};

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300)


//******************************************************************************************************** */

// rest operator example
function sum(message: string, ...numbers: number []) :string {
    const doubled = numbers.map( (num) => num * 2);
    console.log(doubled);

    let total_1 = numbers.reduce((prev, current) => {
        return prev + current;
    }, 0);
    return`${message} ${total_1}`;
    
};

let sumResult = sum('Total is: ', 1,2,3,4,5);
console.log(sumResult);



//************************************************************************************ */

// What type to return from function if no data or result is return??
//! ': void' is function that don't returns anything
function logMessage(message: string): void {
    console.log(message);
};

logMessage('Hello TS?');

//******************************************************************************************************* */

// Using Union Types as Function Parameters
// type guard logic for different types!
function processInput(input: string | number) {
    if (typeof input === 'number'){
        console.log(input);
    } else {
        console.log(input.toUpperCase());     
    }
    
};

processInput(10);
processInput('Hello');

//**************************************************************************************************** */



//Functions - Using Objects as Function Parameters

function createEmployee({ id }: { id:number }): { id:number; isActive:boolean; }{
    return {id, isActive: id % 2 === 0};
};

const first1 = createEmployee({ id:1 });
const second1 = createEmployee({ id:2 });
console.log(first1, second1);


//alternative
function createStudent( student: {id:number, name:string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);  
};

const newStudentObject = { id: 5, name: 'anna', email: 'anna@gmail.com' };
//Excess Property Checks
//! in case when object is pass directly in function TS NOT spam ERROR! (extra email)
// createStudent(newStudentObject);
//! in case pass OBJ whit props TS match expected params in function & spam ERROR for 'email'!
// createStudent({id: 6, name: 'kamen', email: 'kamen@gmail.com'}); 


//*************************************************************************************************** */


// The first parameter, input, should be a union type that can be either a string or a number.
// The second parameter, config, should be an object with a reverse property of type boolean, 
// by default it "reverse" should be false.

function processData( input: string | number, config: {reverse: boolean} = {reverse:false}): string | number {
    if (typeof input === 'number') {
        return input * input
    } else { // text
        return config.reverse? input.toUpperCase().split('').reverse().join('') : input.toUpperCase();
    }
}

console.log(processData(10));
console.log(processData('Hello'));
console.log(processData('Hello', {reverse: true}));



//******************************************************************************************************************** */


                            // Type Alias

type User_X = { id: number; name: string; isActive: boolean}

const susan: User_X = {
  id: 1,
  name: 'mimi',
  isActive: false,
};

const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'gogo',
  isActive: true,
};

function createUserFull(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

function createUserShort(user: User_X): User_X {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
}
  



type StringOrNumber = string | number;

let value_x: StringOrNumber;
value_x = 'Hello!';
value_x = 123;




type Theme = 'light' | 'dark';
let customTheme: Theme;
customTheme = 'dark';
customTheme = 'light';

function setTheme(themeProp: Theme) {
    customTheme = themeProp;
};
setTheme('dark');

//***************************************************************************************************** */

// Challenge - Type Alias

type Employee = {id: number, name: string, department: string};
type Manager = {id: number, name: string, employees: Employee[] };

const alice: Employee = {id: 1, name: 'Alice', department: 'Sales'};
const steve: Employee = {id: 1, name: 'Steve', department: 'HR'};

const bob: Manager = {id: 1, name: 'Bob', employees: [alice, steve]};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void{
    if('employees' in staff){ // check is Manager (content list of Employees)
        console.log(`${staff.name} is local Manager!`);       
    } else { // Employees
        console.log(`${staff.name} is an employee in the ${staff.department}`);        
    }
};

printStaffDetails(alice);
printStaffDetails(bob);


//*********************************************************************************************************** */


// Intersection Types  -  combine more props in object schema (expanded if is in)!

type Book = {id: number; name: string; price: number};
// type DiscountedBook = Book & {discount: number};

const book1: Book = {
    id:1,
    name: 'how to fly free!',
    price: 19.99,
};

const book2: Book = {
    id:2,
    name: 'open city road map',
    price: 9.99,
};

//! add more options --->  '& {discount: number}' 
//! same as ---> type DiscountedBook = Book & {discount: number};
const discountedBook: Book & {discount: number} = {
    id: 3,
    name: 'Warrior of east',
    price: 10.00,
    discount: 0.15,
};

//*********************************************************************************************************** */