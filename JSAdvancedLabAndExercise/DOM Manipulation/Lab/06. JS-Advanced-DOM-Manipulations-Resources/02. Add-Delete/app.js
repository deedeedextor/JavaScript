function addItem() {
    let button = document
    .getElementsByTagName('input')[1];


    button.addEventListener('click', () => {
    let inputText = document
    .getElementById('newText');
    let listItems = document.getElementById('items');

    if (inputText.value !== '') {
        let newItem = document.createElement('li');
        newItem.innerHTML = inputText.value;
        let deleteElement = document.createElement('span');
        deleteElement.innerHTML = '          [Delete]';
        deleteElement.style.cursor = 'pointer';
        newItem.appendChild(deleteElement);

        deleteElement.addEventListener('click', (e) => {
            let parentElement = e.target.parentElement;
            parentElement.remove();

        })
        listItems.appendChild(newItem);
        inputText.value = '';
    }
})
}