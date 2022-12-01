
const closeBtn = document.querySelector('.modal-close-btn');
const modal = document.querySelector('.modal-background');
 
if(!localStorage.modalShowed){
    modal.classList.add('active');
}

document.body.classList.add('modal-open');


const closeModal = ()=>{
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    localStorage.modalShowed = 1;

}
closeBtn.addEventListener('click',closeModal);