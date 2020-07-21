let btn = document.getElementById('btn2');

btn.addEventListener('click', function(e){
        let price = document.getElementById('price').value
        let discount = document.getElementById('discount').value

        let deducted = document.getElementById('deducted')
        let newPrice = document.getElementById('newPrice')

        deducted.innerHTML = ' $' + (price * discount / 100) 
        newPrice.innerHTML = ' $' + (price - (price * discount / 100)) 



})

// let body = document.getElementsByClassName('.body')

// body.classList.add('.body')