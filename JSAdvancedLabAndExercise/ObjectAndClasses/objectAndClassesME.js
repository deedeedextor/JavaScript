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
        

        