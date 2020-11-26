function solve() {
    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    let firstLetter = '';

    button.addEventListener('click', function(){
        let name = input.value;

        firstLetter = name[0].toUpperCase();
        let index = firstLetter.charCodeAt(0) - 65;

        let orderedList = document.querySelectorAll('ol li');
        if (orderedList[index].innerHTML === '') {
            orderedList[index].innerHTML += firstLetter + 
            name.slice(1).toLowerCase();
        } else {
            orderedList[index].innerHTML += ", " + 
            firstLetter + 
            name.slice(1).toLowerCase();
        }

        input.value = '';
    })


}