const input = document.querySelector(".input-veld");
const nextbtn = document.querySelector(".nextbtn");

function answer() {
  if (input.value == 3425) {
    window.location.href = "liftontsnapt.html";
  } else {
    alert("helaas, de code is onjuist");
  }
}

nextbtn.addEventListener("click", answer);
