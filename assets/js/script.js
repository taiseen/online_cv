// 5-May-2021
// 10-Feb-2022

const themeToggler = document.getElementById('themeBtn');
const body = document.body;

themeToggler.addEventListener('click', () =>{
    themeToggler.classList.toggle('fa-sun');
    body.classList.toggle('userClick');
});