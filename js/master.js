const dropdownBtn = document.getElementById('nav__dpdn_btn');
const dropdownElmnts = document.getElementById('nav__dpdn_elmnts__active');

dropdownBtn.addEventListener('click',() => {
   dropdownElmnts.classList.toggle('active');
  
} )