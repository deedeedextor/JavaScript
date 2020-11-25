function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let selectElement = document.getElementById('menu');
    let optionElement = document.createElement('option');

    optionElement.innerHTML = inputText.value;
    optionElement.value = inputValue.value;

    selectElement.appendChild(optionElement);
    
    inputText.value = '';
    inputValue.value = '';
}