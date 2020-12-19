function solve() {
   let p1CardValue = null;
   let p2CardValue = null;
   let p1CardIndex = null;
   let p2CardIndex = null;
   let cardHistory = [];

   let result = document.getElementById('result');
   let images = document.getElementsByTagName('img');

   for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', (e) => {
         let currentImg = e.target;
         currentImg.src = 'images/whiteCard.jpg';
         let imgName = +currentImg.name;

         if (currentImg.parentElement.id === 'player1Div') {
            result.firstChild.textContent = imgName;
            p1CardValue = imgName;
            p1CardIndex = i;
         }
         if(currentImg.parentElement.id === 'player2Div') {
            result.lastChild.textContent = imgName;
            p2CardValue = imgName;
            p2CardIndex = i;
         }

         if (p1CardIndex !== null && p2CardIndex !== null) {
            if (p1CardValue > p2CardValue) {
               images[p1CardIndex].style.border = '2px solid green';
               images[p2CardIndex].style.border = '2px solid red';
            } else if (p1CardValue < p2CardValue){
               images[p1CardIndex].style.border = '2px solid red';
               images[p2CardIndex].style.border = '2px solid green';
            }

            cardHistory.push(`[${p1CardValue} vs ${p2CardValue}]`);
            p1CardValue = null;
            p2CardValue = null;
            p1CardIndex = null;
            p2CardIndex = null;

            let history = document.getElementById('history');
            history.textContent = cardHistory.join(' ') + ' ';
            console.log(cardHistory);
         }   
      })
      
   }
}