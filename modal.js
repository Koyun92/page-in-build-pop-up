const closeBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-background");

// Checking if modal hasn't been clicked in past already
if (!localStorage.modalShowed) {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
} else {
  document.body.classList.remove("modal-open");
}

const closeModal = () => {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
  // adding to local storage that modal has been clicked
  localStorage.modalShowed = 1;
};
closeBtn.addEventListener("click", closeModal);
