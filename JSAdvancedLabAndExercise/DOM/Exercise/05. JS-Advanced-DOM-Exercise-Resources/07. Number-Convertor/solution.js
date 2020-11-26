function solve() {
    let selectTo = document.getElementById('selectMenuTo');
    let binary = document.createElement('option');
    binary.innerHTML = 'Binary';
    binary.value = 'binary';
    let hexadecimal = document.createElement('option');
    hexadecimal.innerHTML = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';

    selectTo.appendChild(binary);
    selectTo.appendChild(hexadecimal);

    let input = document
    .getElementById('input');
    let button = document
        .getElementsByTagName('button')[0];
    let result = document
        .getElementById('result');

    const selectMap = {
        'binary' : num => num.toString(2),
        'hexadecimal' : num => num.toString(16).toUpperCase()
    }

    button.addEventListener('click', function(){
        result.value = selectMap[selectTo.value](+input.value);
    })
}