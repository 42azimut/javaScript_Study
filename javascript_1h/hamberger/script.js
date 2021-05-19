const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

// classList.toggle();  
// 클래스값이 있는지 체크하고 없으면 더하고 있으면 제거한다.
btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});