const form = document.querySelector('.entre-em-contato');
const overlayForm = document.querySelector('.overlay-form');

function mostrarForm() {
   
    form.style.visibility = 'visible';
    form.style.opacity = '1'; 
    form.style.left = '50%';  
    form.style.transform = 'translateX(-50%)';  

    overlayForm.style.visibility = 'visible';
    overlayForm.style.opacity = '1';  
}


overlayForm.addEventListener('click', function() {
    form.style.visibility = 'visible';
    form.style.opacity = '1';  
    form.style.left = '-100%'; 

    overlayForm.style.visibility = 'hidden';
    overlayForm.style.opacity = '0';  
});
