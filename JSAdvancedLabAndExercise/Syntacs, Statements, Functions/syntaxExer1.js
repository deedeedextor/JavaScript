function Fruit(fruit, weight, price){
    let weightInKg = weight / 1000;
    let sum = weightInKg * price;

    return `I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} 
    kilograms ${fruit}.`
}

console.log(Fruit('orange', 2500, 1.80));

function GreatestCommonDivisor(x, y){
    while(y){
        let temp = y;
        y = x % y;
        x = temp;
    }

    return x;
}

console.log(GreatestCommonDivisor(2154, 458));

function SameNumbers (x){
    let numberOfArray = String(x).split("");
    let firstDigit = numberOfArray[0];
    let isSame = true;

    numberOfArray.forEach(element => {
     if(element != firstDigit){
         isSame = false;
     }   
    });

    let sum = numberOfArray.reduce((acc, cur) => acc + Number(cur));
    console.log(isSame);
    console.log(sum);
}

SameNumbers(2222222);

function TimeToWalk(arg1, arg2, arg3) {
    let stepsNumber = Number(arg1);
    let stepsMetersHr = Number(arg2);
    let studentSpeed = Number(arg3);
  
    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);
  
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
  
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + 
    (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + 
    (timeSec < 10 ? "0" : "") + timeSec);
  
}
  
TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);

function CalorieObject(array){
    let obj = {};

    for(let i = 0; i < array.length; i+=2){
        let element = array[i];
        let value = array[i + 1];

        obj[element] = value;
      }

      console.log(obj);
}

CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
CalorieObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);

const areasMap = {
    "motorway": 130,
    "interstate": 90,
    "city": 50,
    "residential" : 20,
}

function RoadRadar(array){
    if(array){
        
        let limit = areasMap[array[1]];

        if(array[0] > limit){
            let diff = array[0] - limit;
            
            if(diff <= 20 ){
                console.log('speeding');
            }else if(diff <= 40){
                console.log('excessive speeding');
            }else{
              console.log('reckless driving');
            }   
        }
    }
}

RoadRadar([40, 'city']);
RoadRadar([21, 'residential']);
RoadRadar([120, 'interstate']);
RoadRadar([200, 'motorway']);

function CookingByNumbers(array){
    let number = Number(array.shift());

    let operations = {
        chop: x => { return (x / 2) },
        dice: x => { return (Math.sqrt(x)) },
        spice: x => { return ++x },
        bake: x => { return x *= 3 },
        fillet: x => { return x *= 0.80 },
    }

    for (let index = 0; index < array.length; index++) {
        number = operations[array[index]](number);
        console.log(number);
    }
}

CookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
CookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

function ValidityChecker(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
 
    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }
 
    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

ValidityChecker([3, 0, 0, 4]);
ValidityChecker([2, 1, 1, 1]);

function CoffeeMachine(stringArray) {
    const productsPrices = {
        "coffee caffeine": 0.80,
        "coffee decaf": 0.90,
        "tea": 0.80
    };

    const milkPercentPrice = 0.1,
        sugarPrice = 0.1;

    function getProductPrice(drinkType, coffeeType) {
        let product = drinkType;

        if (drinkType === "coffee") {
            product = `${drinkType} ${coffeeType}`;
        }

        return productsPrices[product];
    }

    let totalIncome = 0;

    for (let order of stringArray) {
        let orderArr = order.split(", "),
            coins = Number(orderArr[0]),
            drinkType = orderArr[1],
            coffeeType = "",
            drinkPrice = 0,
            milkPrice = 0;

        if (drinkType === "coffee") {
            coffeeType = orderArr[2];
        }

        drinkPrice = getProductPrice(drinkType, coffeeType);

        if (orderArr.indexOf("milk") !== -1) {
            milkPrice = Number((drinkPrice * milkPercentPrice).toFixed(1));
        }

        let orderPrice = drinkPrice + milkPrice;

        if (orderArr[orderArr.length - 1] > 0) {
            orderPrice += sugarPrice;
        }

        let coinsOrderPriceDifference = coins - orderPrice;

        if (coinsOrderPriceDifference >= 0) {
            totalIncome += orderPrice;
            console.log(`You ordered ${drinkType}. Price: $${orderPrice.toFixed(2)} Change: $${coinsOrderPriceDifference.toFixed(2)}`)
        } else {
            console.log(`Not enough money for ${drinkType}. Need $${Math.abs(coinsOrderPriceDifference).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

CoffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
CoffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
