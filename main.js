
const optionMenu = document.querySelector(".select"),
  selectBtn = optionMenu.querySelector(".select__btn"),
  options = optionMenu.querySelectorAll(".select__option"),
  selectText = optionMenu.querySelector(".select__text");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".select__option-text").innerText;
    selectText.innerText = selectedOption;

    optionMenu.classList.remove("active");
  });
});


const sliderEl = document.querySelector("#range"),
  sliderValue = document.querySelector(".range-slider__value")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #3E9CDC ${progress}%, rgba(255, 255, 255, 0.85) ${progress}%)`;
})
