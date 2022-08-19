const hoverImg = document.querySelector('.hover_images');
const name1 = document.querySelector('.name1');
const name2 = document.querySelector('.name2');
const name3 = document.querySelector('.name3');
const name4 = document.querySelector('.name4');
const name5 = document.querySelector('.name5');
const name6 = document.querySelector('.name6');
const name7 = document.querySelector('.name7');
const name8 = document.querySelector('.name8');
const name9 = document.querySelector('.name9');
const name10 = document.querySelector('.name10');

function imgChange(name, url) {
    name.addEventListener('mouseover', () => {
        hoverImg.style.background = `url(${url})`;
    });
}
imgChange(name1, 'images/rugby.jpg');
imgChange(name2, 'Images/basketball.jpg');
imgChange(name3, 'Images/basketball2.jpg');
imgChange(name4, 'Images/soccer.jpg');
imgChange(name5, 'Images/yoga.jpg');
imgChange(name6, 'Images/running.jpg');
imgChange(name7, 'Images/athelet1.jpg');
imgChange(name8, 'Images/basketball3.jpg');
imgChange(name9, 'Images/bodybuilder4.jpg');
imgChange(name10, 'Images/bodybuilder5.jpg');