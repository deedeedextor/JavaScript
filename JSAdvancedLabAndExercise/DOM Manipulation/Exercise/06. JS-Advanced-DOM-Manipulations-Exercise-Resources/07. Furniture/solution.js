function solve() {
  let input = document.getElementsByTagName('textarea')[0];
  let output = document.getElementsByTagName('textarea')[1];
  let genBtn = document.getElementsByTagName('button')[0];
  let buyBtn = document.getElementsByTagName('button')[1];
  let tableBody = document.getElementsByTagName('tbody')[0];

  genBtn.addEventListener('click', () => {
    let products = JSON.parse(input.value);

    for (const furniture of products) {
      let {name, img, price, decFactor} = furniture;
      let row = document.createElement('tr');

      let image = document.createElement('td');
      image.innerHTML = `<img src = ${img}>`;
      row.appendChild(image);

      let nameFurnature = document.createElement('td');
      let p1 = document.createElement('p');
      p1.innerHTML = name;
      nameFurnature.appendChild(p1);
      row.appendChild(nameFurnature);

      let priceE = document.createElement('td');
      let p2 = document.createElement('p');
      p2.innerHTML = price;
      priceE.appendChild(p2);
      row.appendChild(priceE);

      let decFactorE = document.createElement('td');
      let p3 = document.createElement('p');
      p3.innerHTML = decFactor;
      decFactorE.appendChild(p3);
      row.appendChild(decFactorE);

      let markE = document.createElement('td');
      let inputE = document.createElement('input');
      inputE.type = 'checkbox';
      markE.appendChild(inputE);
      row.appendChild(markE);

      tableBody.appendChild(row);
    }
    input.value = '';
  });

  let checkedFurniture = [];
  let totalPrice = 0;
  let decorationFactor = 0;
  let count = 0;

  buyBtn.addEventListener('click', () => {
    let trElements = Array.from(document
      .getElementsByTagName('tr'));

      for (let i = 1; i < trElements.length; i++) {
        if (trElements[i].children[4].children[0].checked) {
          checkedFurniture.push(trElements[i].children[1].textContent);
          totalPrice += +trElements[i].children[2].textContent;
          decorationFactor += +trElements[i].children[3].textContent;
          count++;
        }
      }
      output.value = `Bought furniture: ${checkedFurniture.join(', ')}.\nTotal price: ${totalPrice.toFixed(2)}.\nAverage decoration factor: ${decorationFactor/count}`;
  })
}