let spin = document.getElementById("spinner");
// console.log(spin);
function closeSpin() {
    spin.style.display = "block";
    setTimeout(() => {
        spin.style.display = "none";
    }, 2000);
};
closeSpin();