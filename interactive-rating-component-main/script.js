const ratingBtns = document.querySelectorAll(".rating-btn");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const ratingScore = document.getElementById("selectedRating");
const submitBtn = document.querySelector('.submit-btn');

let selectedRating = null;

function handleSubmit() {
  if (!selectedRating) {
    return alert("Please select a rating.");
  }
  ratingCard.classList.add('hidden');
  ratingScore.textContent = selectedRating;
  thankYouCard.classList.remove('hidden');
}

function handleRating({ target }) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  
  target.classList.add('active');
  
  selectedRating = target.textContent;
}

submitBtn.addEventListener('click', handleSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', handleRating);
});