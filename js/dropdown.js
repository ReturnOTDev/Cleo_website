const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");
dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
