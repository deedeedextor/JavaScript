function solve() {
  let clickableElements = document.querySelectorAll("a");
 
  clickableElements.forEach(a => a.addEventListener("click", addCount));
 
  function addCount(event) {
    let clikedSite = event.target.parentElement.parentElement;
    let clikedSiteParagraph = clikedSite.querySelector("p");
    let clickCounter = clikedSiteParagraph.innerHTML.split(" ").map(e => Number(e)).filter(x => x)[0];
    clickCounter++;
 
    clikedSiteParagraph.innerHTML = `visited ${clickCounter} times `;
  }
}