const range = document.getElementById("range");
range.oninput = change;
function change(){
    pic.style.opacity = this.value / 50;
}