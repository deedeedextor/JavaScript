class Person{
    constructor(fName, lName, age, email){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName}
        (age: ${this.age}, email: ${this.emial})`
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    set diameter(diameter){
        this.radius = diameter/2;
    }
    get area(){
        return Math.PI * this.diameter;
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2){
        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

function heroicInventory(arr){
    let heroes = [];

    arr.map(x => x.split(' / '))
    .map(x => heroes.push({name: x[0], level: +x[1], 
        items: x[2] ? x[2].split(', ') : []
        .sort((a, b) => a.localeCompare(b))
        .join(', ')}))

    /*heroes.sort((a, b) => a.level - b.level)
    .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))*/

    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

function jsonTable(data) {
    let parsedData = data.map(x => JSON.parse(x));
    let createTable = content => `<table>${content}\n</table>`;
    let createRow = content => `\n\t<tr>${content}\n\t</tr>`;
    let createData = content => `\n\t\t<td>${content}</td>`;
 
    let result = parsedData.reduce((accRows, row) => {
        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createData(td);
        }, '');
        return accRows + createRow(tdForPerson);
    }, '');
    return createTable(result);
}
console.log(jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']));

function cappyJuice(arr){
    let totalJuice = new Map;
    let totalBottles = new Map;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split('=>');

        let fruit = current[0];
        let quantity = Number(current[1]);

        if (!totalJuice.has(fruit)) {
            totalJuice.set(fruit, 0);
        }
        let cuurentQuantity = totalJuice.get(fruit);
        cuurentQuantity += quantity;

        if (cuurentQuantity >= 1000) {
            let juiceLeft = cuurentQuantity % 1000;

            let bottlesToStore = (cuurentQuantity - juiceLeft) / 1000;

            if (!totalBottles.has(fruit)) {
                totalBottles.set(fruit, 0)
            }
            totalBottles.set(fruit, totalBottles.get(fruit) + bottlesToStore);
            quantity = juiceLeft;
        }
        totalJuice.set(fruit, totalJuice.get(fruit) + quantity);

    }
    for (let [juicee,bottles]of totalBottles) {
        console.log(juicee + "=> " + bottles);
    }
}
cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);

function storageCatalogue(arr){
    let catalogue = [];

    arr.map(x => x.split(':'))
    .map(x => catalogue.push({name: x[0], price: +x[1], letter: x[0][0]}));

    let letter = '';
    for (const obj of catalogue
        .sort((a, b) => a.name.localeCompare(b.name))) {
            if (letter !== obj.letter) {
                letter = obj.letter;
               console.log(letter);
            }
        console.log(`  ${obj.name}: ${obj.price}`);
        
    }
}
storageCatalogue(['Banana : 2',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);

function autoCompany(input){
    let mapCars = new Map();
    
    for (const line of input) {
        let [brand, model, produced] = line.split(' | ');
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        let mapModels = mapCars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(produced));
    }
    for (const brand of mapCars.keys()) {
        console.log(brand);
        let mapModels = mapCars.get(brand);
        for (const model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}
autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);

function systemComponents(input){
    let mapSystems = new Map();

    for (const line of input) {
        let[system, component, subcomponent] = line.split('|');

        if (!mapSystems.has(system)) {
            mapSystems.set(system, new Map());
        }
        if (!mapSystems.get(system).hasOwnProperty(component)) {
            mapSystems.get(system)[component] = [];
        }
        mapSystems.get(system)[component].push(subcomponent);
    }
    
    let sortedSystems = [...mapSystems.keys()]
    .sort(lengthAndAlpabeticalSort);
    
    for (const systemName of sortedSystems) {
        console.log(systemName);

        let currSystem = mapSystems.get(systemName);
        let sortedComponents = Object.keys(currSystem)
        .sort((a, b) => {
            return currSystem[a].lenght < currSystem[b].lenght
        })
        for (const component of sortedComponents) {
            console.log(`|||${component}`);

            for (const subcomponent of currSystem[component]) {
                console.log(`||||||${subcomponent}`)
            }
        }
    }

    function lengthAndAlpabeticalSort(a, b) {
    if(Object.keys(mapSystems.get(a)).length === Object.keys(mapSystems.get(b)).length) {
        if(a > b) return 1
        if(a < b) return -1
    } else {
        return Object.keys(mapSystems.get(a)).length < Object.keys(mapSystems.get(b)).length
    }

}
}
systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);

class Request{
    constructor(method, uri, version, message){
        this.method = method;
        this.uri = uri;
        this.version = version; 
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);

function tickets(input, filterCrearia){
    let tickets = [];

    for (const line of input) {
        let[destination, price, status] = line.split('|');
        price = +price;
        tickets.push({destination, price, status});
    }

    let sorted;
    if (filterCrearia === 'destination') {
        sorted = tickets.sort((curr, next) => 
        curr.destination.localeCompare(next.destination));
    } else if (filterCrearia === 'price'){
        sorted = tickets.sort((curr, next) => 
        curr.price - next.price);
    }else{
        sorted = tickets.sort((curr, next) =>
        curr.status.localeCompare(next.status));
    }
    
    sorted.forEach(obj => {
        console.log(`Ticket { destination: ${obj.destination},
    price: ${obj.price.toFixed(2)},
    status: ${obj.status}}`)
    });
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');

class List{
    constructor(){
        this.arr = [];
        this.size = 0
    }

    add(element){
        this.arr.push(element)
        this.size += 1;
        return this.arr.sort((a, b) => {
            return a - b;
        })
    }

    remove(index){
        if (this.arr.length > index && index >= 0) {
            this.arr.splice(index, 1);
            this.size--;
        } else {
            throw new Error;
        }
        return this.arr.sort((a, b) => {
            return a - b;
        })
    }

    get(index){
        if (this.arr.length > index && index >= 0) {
            return this.arr[index];
        } else {
            throw new Error;
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length){
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString(){
        if (this.innerLength == 0) {
            return '...';
        }

        if (this.innerString.length > this.innerLength) {
            this.innerString = this.innerString.substr(0, this.innerLength) + '...';
        }

        return this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

