const btns = document.querySelectorAll(".button");
const submit = document.getElementById("submit");
const displayMessage = document.getElementById("message");
const question = document.getElementById("question");
const modal = document.getElementById("modal");
const btnReturn = document.getElementById("return");

let selected;

submit.addEventListener("click", function () {
  if (selected) {
    question.classList.add("hidden");
    modal.classList.remove("show");
    displayMessage.innerHTML = `You selected ${selected} out of 5`;
    selected = "";
  } else {
    question.style.border = "1px solid #ff8585";
    setTimeout(() => {
      question.style.border = "none";
    }, 1500);
  }
});

function chooseNumber() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      selected = e.currentTarget.innerHTML;
    });
  }
}
chooseNumber();

btnReturn.addEventListener("click", function () {
  modal.classList.add("show");
  question.classList.remove("hidden");
});
