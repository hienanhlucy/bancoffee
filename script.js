let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    carItem.classList.remove('active')
    seachForm.classList.remove('active')
}


let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    carItem.classList.toggle('active')
    navbar.classList.remove('active')
    seachForm.classList.remove('active')
}


let seachForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    seachForm.classList.toggle('active')
    navbar.classList.remove('active')
    carItem.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    carItem.classList.remove('active')
    seachForm.classList.remove('active')
}