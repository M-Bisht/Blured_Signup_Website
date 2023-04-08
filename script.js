let pass = document.querySelector("#password");
let photo = document.querySelector(".photo");
pass.addEventListener("keydown", (e) => {
    let passw = e.target.value.length;
    let cac = 30 - passw * 3;
    photo.style.filter = `blur(${cac}px)`;
});
