const button = document.querySelector(".share-button");
const imgButton = document.querySelector(".share-button img");
const socialLinks = document.querySelector(".social-links");

button.addEventListener("click", () => {
  socialLinks.classList.toggle("active");
  button.classList.toggle("share-button-active");
  imgButton.classList.toggle("share-button-img-active");
});
