function solve() {
  const inputText = document.getElementById('input').innerText;
  const outputElement = document.getElementById('output');

  inputText
    .match(/(?:\s*)([^.!?]+[.!?]+)/g)
    .map(sentence => sentence.trim())
    .reduce((acc, sentence, index) => {
      if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
      return acc;
    }, [])
    .forEach(paragraph => {
      let pHTML = document.createElement('p');
      pHTML.textContent = paragraph;
      outputElement.appendChild(pHTML);
    });
}