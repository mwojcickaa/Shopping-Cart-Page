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
        } else if (valueInput.value == "4") {
            buttonIncrement.disabled = true;
        }
        valueInput.value = String(parseInt(valueInput.value) + 1);
    });

    buttonDecrement.addEventListener("click", () => {
        if (valueInput.value == "2") {
            buttonDecrement.disabled = true;
        } else if (valueInput.value == "5") {
            buttonIncrement.disabled = false;
        }
        valueInput.value = String(parseInt(valueInput.value) - 1);
    })

    valueInput.addEventListener("input", () => {
        let convertedNumberInput = Number(valueInput.value)

        if (valueInput.value == "") {
            valueInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
            valueInput.style.borderRadius = "3px"
            return;
        } else if (convertedNumberInput < 1) {
            valueInput.value = "1"
            buttonIncrement.disabled = false;
            buttonDecrement.disabled = true;
            valueInput.style.backgroundColor = "#F0F0F0"
        } else if (convertedNumberInput >= 5) {
            valueInput.value = "5"
            buttonIncrement.disabled = true;
            buttonDecrement.disabled = false;
            valueInput.style.backgroundColor = "#F0F0F0"
        } else if (convertedNumberInput > 1 && convertedNumberInput < 5) {
            buttonIncrement.disabled = false;
            buttonDecrement.disabled = false;
            valueInput.style.backgroundColor = "#F0F0F0"
        }
    })
};


