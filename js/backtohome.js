const backhomebutton = document.querySelector(".backtohomebutton");

function backtohome(){
    window.location.href = "index.html";
}
backhomebutton.addEventListener("click", backtohome);