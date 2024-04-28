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