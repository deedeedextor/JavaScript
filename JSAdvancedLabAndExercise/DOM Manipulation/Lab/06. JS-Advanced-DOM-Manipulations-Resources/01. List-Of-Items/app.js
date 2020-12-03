function addItem() {
    let button = document.getElementsByTagName('input')[1];


    button.addEventListener('click', () => {
        let inputText = document
        .getElementById('newItemText');
        let listItems = document.getElementById('items');

        if (inputText.value !== '') {
            let newItem = document.createElement('li');
            newItem.innerHTML = inputText.value;
            listItems.appendChild(newItem);
            inputText.value = '';
        }
    })
}