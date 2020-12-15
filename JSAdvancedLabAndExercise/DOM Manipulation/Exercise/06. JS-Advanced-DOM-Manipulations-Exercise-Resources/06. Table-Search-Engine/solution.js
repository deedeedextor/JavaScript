function solve() {
  let dataTr = Array.from(document.querySelectorAll("tbody > tr"));
  let searchField = document.querySelector("#searchField");
  let searchBtn = document.querySelector("#searchBtn");

  searchBtn.addEventListener("click", () => {
    let regex = new RegExp(searchField.value, "gim");

    if (searchField.value !== "") {
      dataTr.map((e) => {
        e.classList.remove("select");

        if (e.innerHTML.match(regex) !== null) {
          e.className = 'select';
        }
      });
      searchField.value = '';
    }
  });
}
