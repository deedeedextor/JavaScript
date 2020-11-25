function toggle() {
    let buttonElement = document
    .getElementsByClassName('button')[0];
    let pElement = document.getElementById('extra');
    
    if (buttonElement.innerHTML == 'More') {
        buttonElement.innerHTML = "Less"

        pElement.style.display = 'block';
    }
    else{
        buttonElement.innerHTML = 'More'
        pElement.style.display = 'none';
    }
}