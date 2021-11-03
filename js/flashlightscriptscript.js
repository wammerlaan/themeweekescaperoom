function update(e) {
  let x = e.clientX || e.touches[0].clientX;
  let y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

const key = document.querySelector(".key");

function keyFound() {
  console.log("test");
  alert("nice, je hebt de key gevonden");
  window.location.href = "puzzlecomplete.html ";
}

key.addEventListener("click", keyFound);
