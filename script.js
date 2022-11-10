let loader = document.querySelector('.loader');
setTimeout(() => {
    loader.style.display = 'none';
    
}, 3000);

let hamburger = document.querySelector('.ham');
let navbar =  document.querySelector('.navbar')
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('active');
    navbar.style.color = 'black';
})
