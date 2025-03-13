for (let i = 1; i <= 4; i++) {
  let qsnContainer = document.querySelector(`.qsn-container-${i}`);
  qsnContainer.addEventListener("click", function () {
    let answer = document.querySelector(`.ans-${i}`);
    if (answer.classList.contains("hidden")) deactiveAll();
    toggleDisplay(i);
  });
}

function toggleDisplay(i) {
  let plusIcon = document.querySelector(`.plus-icon-${i}`);
  let minusIcon = document.querySelector(`.minus-icon-${i}`);
  minusIcon.classList.toggle("hidden");
  plusIcon.classList.toggle("hidden");
  let answer = document.querySelector(`.ans-${i}`);
  answer.classList.toggle("hidden");
}

function deactiveAll() {
  for (let i = 1; i <= 4; i++) {
    let answer = document.querySelector(`.ans-${i}`);
    answer.classList.add("hidden");
    let plusIcon = document.querySelector(`.plus-icon-${i}`);
    let minusIcon = document.querySelector(`.minus-icon-${i}`);
    minusIcon.classList.add("hidden");
    plusIcon.classList.remove("hidden");
  }
}
