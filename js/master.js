const dropdownBtn = document.getElementById('nav__dpdn_btn');
const dropdownElmnts = document.getElementById('nav__dpdn_elmnts__active');

dropdownBtn.addEventListener('click',() => {
   dropdownElmnts.classList.toggle('active');
  
} )


var crsr = document.querySelectorAll(".diamond_img");

function moveImagesTowardsCursor() {
    window.addEventListener("mousemove", function(event) {
        crsr.forEach(function(elem) {

            var rect = elem.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;
            var distanceX = event.clientX - centerX;
            var distanceY = event.clientY - centerY;

            var moveX = distanceX * 0.05; 
            var moveY = distanceY * 0.05;

            elem.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
        });
    });
}




const openModal = document.querySelectorAll('.modal-open')

openModal.forEach(function(card){
    card.onclick = function(){
        var modal = card.getAttribute('data-modal');

        document.getElementById(modal).style.display = "block";
    }
})

const closeBtn = document.querySelectorAll('.modal-close');

closeBtn.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest(".modal").style.display = "none";
    }
})






moveImagesTowardsCursor();
