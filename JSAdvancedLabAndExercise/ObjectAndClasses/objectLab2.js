const isNotEmptyString = x => x !== "";
const trimMyStrings = x => x.trim();
const parseIfNumber = x => (Number(x) ? Math.floor(Number(x) * 100) / 100 : x);

function deserializeStringToArrayOfValues(str) {
  return str
    .split("|")
    .filter(isNotEmptyString)
    .map(trimMyStrings)
    .map(parseIfNumber);
}

function TownsToJSon(data) {
  let keys = deserializeStringToArrayOfValues(data[0]);

  return data
    .slice(1)
    .map(deserializeStringToArrayOfValues)
    .map(x =>
      x.reduce((res, val, i) => {
        res[keys[i]] = val;
        return res;
      }, {})
    );
}

console.log(
  TownsToJSon([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |"
  ])
);

function scoreToHTML(inputArr) {
  function escapeHTML(str) {
    "use strict";
    str = str
      .replace(/&/g, "&amp;")
      .replace(/>/g, "&gt;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
    return str;
  }

  inputArr = JSON.parse(inputArr);
  let result = "<table>\n";

  result += "  <tr><th>name</th><th>score</th></tr>\n";

  for (let line of inputArr) {
    result += `  <tr><td>${escapeHTML(
      line.name
    )}</td><td>${+line.score}</td></tr>\n`;
  }
  result += "</table>";
  console.log(result);
}

scoreToHTML(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']);

function SumByTown(arr) {
  let townsAndSums = {};

  for (let i = 0; i < arr.length; i += 2) {
    let town = arr[i];
    let townSum = Number(arr[i + 1]);

    if (!townsAndSums.hasOwnProperty(town)) {
      townsAndSums[town] = townSum;
    } else {
      townsAndSums[town] += townSum;
    }
  }
  console.log(townsAndSums);
}

SumByTown(["Sofia", "20", "Varna", "3", "sofia", "5", "varna", "4"]);

function PopulationsInTowns(input) {
  let populations = {};

  for (let line of input) {
    let [town, population] = line.split(" <-> ");
    population = Number(population);

    if (!populations.hasOwnProperty(town)) {
      populations[town] = population;
    } else {
      populations[town] += population;
    }
  }

  console.log(populations);
}

PopulationsInTowns([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000"
]);

function CityMarkets(input) {
  let cityMarkets = {};

  for (let line of input) {
    let [town, product, details] = line.split("->");
    let [amountOfSales, priceForUnit] = details.split(":");
    amountOfSales = Number(amountOfSales);
    priceForUnit = Number(priceForUnit);

    if (!cityMarkets.hasOwnProperty(town)) {
      cityMarkets["Town"] = town;
    }
    if (!cityMarkets["Town"].hasOwnProperty(cityMarkets[product])) {
      cityMarkets[product] = amountOfSales * priceForUnit;
    } else {
      cityMarkets[product] += amountOfSales * priceForUnit;
    }
  }

  for (let property in cityMarkets) {
    console.log(`${property} - ${cityMarkets[property]}`);
  }
}

CityMarkets([
  "Sofia -> Laptops HP -> 200 : 2000",
  "Sofia -> Raspberry -> 200000 : 1500",
  "Sofia -> Audi Q7 -> 200 : 100000",
  "Montana -> Portokals -> 200000 : 1",
  "Montana -> Qgodas -> 20000 : 0.2",
  "Montana -> Chereshas -> 1000 : 0.3"
]);
