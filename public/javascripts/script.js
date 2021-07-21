'use strict'

// menu
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    
if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'close';
} else{
    btn.innerHTML = 'Menu';
}
});


// cafe
const cafe = document.querySelector('img.cafe');
const sabcafe = document.querySelector('.sabcafe');
cafe.addEventListener('mouseover', () =>{
    sabcafe.classList.toggle('open-sabcafe');
});
sabcafe.addEventListener('mouseleave', () => {
    sabcafe.classList.toggle('close-sabcafe')
});

// cooking
const cooking = document.querySelector('img.cooking');
const sabcooking = document.querySelector('.sabcooking');
cooking.addEventListener('mouseover', () =>{
    sabcooking.classList.toggle('open-sabcooking');
});
sabcooking.addEventListener('mouseleave', () => {
    sabcooking.classList.toggle('close-sabcooking')
});

// izakaya
const izakaya = document.querySelector('img.izakaya');
const sabizakaya = document.querySelector('.sabizakaya');
izakaya.addEventListener('mouseover', () =>{
    sabizakaya.classList.toggle('open-sabizakaya');
});
sabizakaya.addEventListener('mouseleave', () => {
    sabizakaya.classList.toggle('close-sabizakaya')
});

// live
const live = document.querySelector('img.live');
const sablive = document.querySelector('.sablive');
live.addEventListener('mouseover', () =>{
    sablive.classList.toggle('open-sablive');
});
sablive.addEventListener('mouseleave', () => {
    sablive.classList.toggle('close-sablive')
});