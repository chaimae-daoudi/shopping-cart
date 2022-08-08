const plus = document.getElementsByClassName('item-plus');
const moin =  document.getElementsByClassName('item-moin');
const heart = document.getElementsByClassName('item-heart');
const x = document.getElementsByClassName('item-x');
const total = document.querySelectorAll('.item-price');
const totalButton = document.querySelector('.total-button');
const itemTotal = document.querySelector('.item-total');
// Increase the price of items
 
for (let y = 0; y < plus.length; y++) {
    let parentPlus = plus[y].parentElement;
    let pricePlus= parentPlus.parentElement.querySelector('.item-price');
    let numberPlus= Number(pricePlus.textContent)
    plus[y].addEventListener('click', function(){
   pricePlus.textContent = Number(pricePlus.textContent)+ numberPlus;
    })
  
}
// Reduce the price of items
for (let i = 0; i < moin.length; i++) {
    let parentMoin = moin[i].parentElement;
    let priceMoin = parentMoin.parentElement.querySelector('.item-price');
    let numberMoin = Number(priceMoin.textContent)
    moin[i].addEventListener('click', function(){
        if(  Number(priceMoin.textContent) !== numberMoin) {
 priceMoin.textContent = Number(priceMoin.textContent)- numberMoin;
        }else {
          priceMoin.textContent =   numberMoin
        }
  
    })
  
}

//Change color of the heart

for(let z = 0; z < heart.length ; z++){
    heart[z].onclick = function(){
        let heartIcon = heart[z].querySelector('.fa-heart');
        heartIcon.classList.toggle('change-color');
    }
}

//Delete items from the cart
for(let t=0 ;t<x.length; t++){
    x[t].onclick = function(){
        let div = x[t].parentElement.parentElement;
        div.style.display ='none';
    }
}
//Total

totalButton.addEventListener('click', function(){
    let s = 0;
for (let u =0; u<total.length; u++){
    s+= Number(total[u].textContent);   
}
    itemTotal.textContent = s;
})