function lockedProfile() {
    [...document.getElementsByClassName('profile')].forEach((parent) => {
           let btn = parent.querySelectorAll('button')[0];

           btn.addEventListener('click', () => {
               let unlock = parent.querySelectorAll('input')[1].checked;
               let hiddenDiv = parent.querySelectorAll('div')[0];

               if (unlock) {
                if (btn.textContent == 'Show more') {
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else {
                 hiddenDiv.style.display = 'none';
                 btn.textContent = 'Show more';
                }
               }
           })
        }
    )
}