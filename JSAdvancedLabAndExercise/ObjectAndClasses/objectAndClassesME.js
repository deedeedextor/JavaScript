class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}
let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

function scoreToHMTL(input) {
 
    String.prototype.htmlEscape = function(){
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
 
    let result = "<table>\n  <tr><th>name</th><th>score</th></tr>\n";
    let table = JSON.parse(input);
 
    for (let record of table) {
        result += `  <tr><td>${record.name.htmlEscape()}</td><td>${record.score}</td></tr>\n`;
    }
 
    result += "</table>";
    return result;
}
console.log(
    scoreToHMTL(
        ['[{"name":"Pesho & Kiro","score":479 }, {"name":"Gosho, Maria & Viki","score":205}]']
        ));

function countWords(str) {
    let wordCounts = new Map();

    str.toString().split(/[\s.,-]+/).forEach(word => {
      let currentWordCount = wordCounts.get(word) || 0
      wordCounts.set(word, currentWordCount+1)
    })
  
    const obj = Object.fromEntries(wordCounts);
    console.log(JSON.stringify(obj));
  
}      
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);  

function cityMarkets(input){
    let products = new Map();

    for (const line of input) {
      let [town, product, countAndPrice] = line
      .split('->');
      let [soldCount, unitPrice] = countAndPrice
      .split(':');
      let totalIncome = +soldCount * +unitPrice;

      if (!products.has(town)) {
        products.set(town, new Map());
      }
      if (!products.get(town).hasOwnProperty(product)) {
        products.get(town).set(product, 0);
      }
      products.get(town)
      .set(product, products.get(town).get(product) + totalIncome);
    }

    for (let [town] of products) {
        console.log(`Town – ${town}`);

        for (let [product, totalIncome] of products.get(town)) {
            console.log(`$$$${product} : ${totalIncome}`);
        }
    }
}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);   

function sortFunc(a, b) {
    if (a.length != b.length) {
        return a.length - b.length;
    }
    else {
        return a.localeCompare(b);
    }
}

function usernames(arr){
    let uniqueSet = new Set(arr);
    let usernames = [...uniqueSet.keys()]
    .sort((a, b) => sortFunc(a, b));

    console.log(usernames);
}
usernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);

class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats(){
        return console.log(JSON.stringify(this.unitedRats));
    }

    toString(){
        console.log(this.name);

        this.unitedRats.forEach(rat => {
            console.log(`##${rat.name}`)
        });
    }
}

let firstRat = new Rat("Peter");
let secondRat = new Rat("George");
firstRat.toString();
firstRat.getRats();
firstRat.unite(secondRat);
firstRat.unite(new Rat("Alex"));
secondRat.unite(new Rat("Alex"));
firstRat.getRats();
firstRat.toString();

function uniqueSequences(data) {
    let arrays = new Map;

    for (let line of data) {
        let array = JSON.parse(line).map(Number)
        .sort((a, b) => b - a);
        let toStore = `[${array.join(', ')}]`;
        if (!arrays.has(toStore))
            arrays.set(toStore, array.length);
    }

    console.log([...arrays.keys()]
    .sort((a, b) => arrays.get(a) - arrays.get(b))
    .join('\n'));
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", 
"[10, 1, -17, 0, 2, 13]", 
"[4, -3, 3, -2, 2, -1, 1, 0]"]);
uniqueSequences(["[7.14, 7.180, 7.339, 80.099]", 
"[7.339, 80.0990, 7.140000, 7.18]", 
"[7.339, 7.180, 7.14, 80.099]"]);

let result = (function(){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['♠', '♥', '♦', '♣'];
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };
 
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
 
        get face() {
            return this._face;
        }
 
        set face(face) {
            if (!validFaces.includes(face)) {
                throw new Error('Invalid Card Face!');
            }
            this._face = face;
            return;
        }
 
        get suit() {
            return this._suit;
        }
 
        set suit(suit) {
            if (!validSuits.includes(suit)) {
                throw new Error('Invalid Card Suit!');
            }
            this._suit = suit;
            return;
        }
    }
 
    return {
        Suits: Suits,
        Card: Card
    }
}());
/*
let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let card2 = new Card('1', Suits.DIAMONDS);
*/

class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
    }

    set clientId(clientId){
        if(clientId.length < 6){
            throw new TypeError('Client ID must be a 6-digit number')
        }
        return this._clientId = clientId
    }
    get clientId(){
        return this._clientId
    }

    set email(email){
        let emailPatern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g

        if(!emailPatern.test(email)){
            throw new TypeError('Invalid e-mail')
        }
        return this._email = email
    }
    get email(){
        return this._email
    }

    set firstName(firstName){
        if(!(firstName.length >= 3 && firstName.length <= 20)){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }

        let pattern =/[a-zA-Z]/g
        if(!pattern.test(firstName)){
            throw new TypeError('First name must contain only Latin characters')
        }
        return this._firstName = firstName
    }
    get firstname(){
        return this._firstName
    } 

    set lastName(lastName){
        if(!(lastName.length >= 3 && lastName.length <= 20)){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }
        let pattern =/[a-zA-Z]/g
        if(!pattern.test(lastName)){
            throw new TypeError('Last name must contain only Latin characters')
        }
        return this._lastName = lastName
    }
    get lastName(){
        return this._lastName
    }
}
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');

function arenaTier(arr) {
    let list = {};

    for (let line of arr) {
      if (line === 'Ave Cesar') {
        break;
      }
      else if (line.includes(' -> ')) {
        add(line);
      }
      else if (line.includes(' vs ')) {
        battle(line);
      }
    }

    let tier = Object.entries(list);
    let array = [];

    for (let elem of tier) {
      let name = elem[0];
      let pow = Object.entries(elem[1]);
      let sum = pow.map(a => a[1]).reduce((a, b) => a + b);
      array.push([name, pow, sum]);
    }

    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]));

    for (let part of array) {
      console.log(`${part[0]}: ${part[2]} skill`);
      part[1]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`- ${x[0]} <!> ${x[1]}`));
    }
   
    function add(line) {
      let [gladiator, skill, power] = line.split(' -> ')
      power = Number(power);

      if (!list.hasOwnProperty(gladiator)) {
        list[gladiator] = {};
        list[gladiator][skill] = power;
      }
      else {
        if (!list[gladiator].hasOwnProperty(skill)) {
          list[gladiator][skill] = power;
        }
        else {
          let oldPow = list[gladiator][skill];

          if (power > oldPow) {
            list[gladiator][skill] = power
          }
        }
      }
    }

    function battle(line) {
      let [gladiatorA, gladiatorB] = line.split(' vs ');

      if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
        let skillA = list[gladiatorA];
        let skillB = list[gladiatorB];
        
        for (let elA in skillA) {
          for (let elB in skillB) {
            if (elA === elB) {
              if (skillA[elA] > skillB[elB]) {
                delete list[gladiatorB]
              }
              else if (skillA[elA] < skillB[elB]) {
                delete list[gladiatorA]
              }
            }
          }
        }
      }
    }
}

console.log(arenaTier(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]));
