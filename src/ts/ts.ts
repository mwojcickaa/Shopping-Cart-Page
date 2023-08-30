const incrementButton = document.getElementsByClassName("increment");
const decrementButton = document.getElementsByClassName("decrement");
const quantityInput: HTMLCollectionOf<Element> = document.getElementsByClassName("quantity");

for (let i = 0; i < 3; i++) {
    let valueInput = quantityInput[i] as HTMLInputElement;
    let buttonIncrement = incrementButton[i] as HTMLButtonElement;
    let buttonDecrement = decrementButton[i] as HTMLButtonElement;

    buttonIncrement.style.cursor = "pointer";

    buttonIncrement.addEventListener("click", () => {
        if (valueInput.value == "1") {
            buttonDecrement.disabled = false;
            buttonDecrement.style.cursor = "pointer";
        } else if (valueInput.value == "19") {
            buttonIncrement.disabled = true;
            buttonIncrement.style.cursor = "default"
        }
        valueInput.value = String(parseInt(valueInput.value) + 1);
    });

    buttonDecrement.addEventListener("click", () => {
        if (valueInput.value == "2") {
            buttonDecrement.disabled = true;
            buttonDecrement.style.cursor = "default";
        } else if (valueInput.value == "20") {
            buttonIncrement.disabled = false;
            buttonIncrement.style.cursor = "pointer";
        }
        valueInput.value = String(parseInt(valueInput.value) - 1);
    })
};




