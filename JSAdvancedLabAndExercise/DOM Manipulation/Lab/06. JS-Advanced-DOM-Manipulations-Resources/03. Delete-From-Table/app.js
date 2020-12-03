function deleteByEmail() {
  let emails = document
  .querySelectorAll("table tr td:nth-child(2)");
  let deleted = false;

  for (let email of emails) {
    if (email.textContent == document
        .getElementsByName("email")[0].value) {
        email.parentNode.parentNode
        .removeChild(email.parentNode);

        deleted = true;
    }
  }

  document.getElementById("result").textContent = deleted
    ? "Deleted."
    : "Not found.";
}
