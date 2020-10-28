function solve(number){
    if(number > 0){
        console.log('1')
    }else if(number < 0){
        console.log('-1')
    }else{
        console.log('0');
    }
}
solve(-12);

function solve1(number){
    while(number){
        console.log(`${number}!`)
        number--;
    }
}
solve1(3);

function min(x, y){
    console.log(Math.min(x, y))
}
min(10, 8);

function pow(x, y){
    console.log(Math.pow(x, y))
}
pow(2, 2);

function createObject(name, age, isAdmin){
    let object = {
        name,
        age,
        isAdmin,
    };

    if(object){
        console.log(`Hello, my name is ${object.name}. I'm ${object.age} and ${object.isAdmin}.`);
    }
}

createObject("George", 30, true);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }

  multiplyNumeric(menu);
  console.log(`The menu has w: ${menu.width} and h: ${menu.height}`);

  function convertion(){
      console.log(menu);
  }

  convertion();


