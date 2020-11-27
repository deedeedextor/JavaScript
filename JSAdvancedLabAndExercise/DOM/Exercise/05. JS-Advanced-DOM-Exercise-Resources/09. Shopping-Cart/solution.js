function solve() {
   let buttons = document.getElementsByTagName("button");
   let textArea = document
    .getElementsByTagName("textarea")[0];
 
    let products = {};
 
    Array.from(buttons).map(b =>
        b.addEventListener("click", (e) => {
            if (e.target.className === "add-product") {
                let currentElement = e.target.parentElement;
 
                let brand = currentElement.previousElementSibling.children[0].innerHTML;
                let price = Number(currentElement.nextElementSibling.innerHTML);
 
                if (!products[brand]) {
                  products[brand] = 0
                }
                products[brand] += price
 
                textArea.innerHTML += `Added ${brand} for ${price.toFixed(2)} to the cart.\n`
            } else {
 
                let totalPrice = Number(Object.values(products)
                .reduce((a, b) => a + b, 0))                
                textArea.innerHTML += `You bought ${Object.keys(products)
                  .join(', ')} for ${totalPrice.toFixed(2)}.`
                
                Array.from(buttons).map(b => b.disabled = true)
 
            }
        })
    )
}