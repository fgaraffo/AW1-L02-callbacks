'use strict';

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b)
console.log(numbers);

const market = [
    { name: 'GOOG', var: -3.2 },
    { name: 'AMZN', var: 2.2 },
    { name: 'MSFT', var: -1.8 }
];

const bad = market.filter(stock => stock.var < 0);
const good = market.filter(stock => stock.var > 0);
// CONST: qui vuol dire che il riferimento all'array non può essere riassegnato
// ma l'array si può modificare

console.log(bad);
console.log(good);

const letters = [...'hello'];
let uppercase = '';
letters.forEach(letter => { uppercase += letter.toUpperCase() });
console.log(uppercase);

/*
SCONSIGLIATO modificare l'array nella callback
const letters2 = [...'hello2'];
let uppercase2 = '';
letters2.forEach( (x, index) => { letters2[index] = x.toUpperCase() });

console.log(uppercase2);
console.log(letters2);
*/

const a = [1, 2, 3];
const b = a.map(x => x * x);
console.log(b);

//.filter()
//non è necessario usare tutti i parametri, qui solo index ad es
const c = [5, 4, 3, 2, 1];

// elementi < 3
console.log(c.filter(x => x < 3));

// indici pari
console.log(c.filter((element, index) => index % 2 == 0));

// .reduce()
// accumulator è il valore di ritorno ad ogni iterazione
const e = [5, 4, 3, 2, 1];

// somma gli elementi partendo da 5 (5 è il valore iniziale dell'acc)
const f = e.reduce((accumulator, currentValue) => accumulator + currentValue, 5)
console.log(f);

// Trovare il massimo
const g = [5, 4, 3, 2, 1];
const h = g.reduce((acc, val) => (acc > val) ? acc : val);
console.log('Massimo: ' + h);

const vehicles = [
    { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
    { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
    { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
    { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
    { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
    { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
    { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
    { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
    { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 }
];

const averageSUVPrice = vehicles
    .filter(v => v.type === 'suv') // ritorna NUOVO array solo con i SUV
    .map(v => v.price) // prendi solo i prezzi
    .reduce((sum, price, i, array) => sum + price / array.length, 0);

console.log('Prezzo medio SUV: '+averageSUVPrice); // 33399

debugger;