let buttonBuy = document.getElementById("button-buy") as HTMLButtonElement;
let snackbar = document.getElementById("snackbar");

buttonBuy.addEventListener("click", () => {
    snackbar.classList.add("show");
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
});
