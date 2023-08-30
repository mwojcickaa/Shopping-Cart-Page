const incrementButton = document.getElementsByClassName("increment");
const decrementButton = document.getElementsByClassName("decrement");
const quantityInput: HTMLCollectionOf<Element> = document.getElementsByClassName("quantity");

for (let i = 0; i < 3; i++) {
    let valueInput = quantityInput[i] as HTMLInputElement;
    let buttonIncrement = incrementButton[i] as HTMLButtonElement;
    let buttonDecrement = decrementButton[i] as HTMLButtonElement;

    buttonIncrement.addEventListener("click", () => {
        if (valueInput.value == "1") {
            buttonDecrement.disabled = false;
        } else if (valueInput.value == "19") {
            buttonIncrement.disabled = true;
        }
        valueInput.value = String(parseInt(valueInput.value) + 1);
    });

    buttonDecrement.addEventListener("click", () => {
        if (valueInput.value == "2") {
            buttonDecrement.disabled = true;
        } else if (valueInput.value == "20") {
            buttonIncrement.disabled = false;
        }
        valueInput.value = String(parseInt(valueInput.value) - 1);
    })
};




