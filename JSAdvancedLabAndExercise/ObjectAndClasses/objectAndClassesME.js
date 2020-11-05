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

        