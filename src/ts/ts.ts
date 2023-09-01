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
        } else if (valueInput.value == "") {
            valueInput.value = "0";
            valueInput.classList.remove("empty-input");
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

    valueInput.addEventListener('keypress', detectSigns);

    function detectSigns(e: KeyboardEvent) {
        if (e.key == "e" || e.key == "," || e.key == "." || e.key == "-" || e.key == "+") {
            e.preventDefault();
        };
    };

    valueInput.addEventListener("input", () => {
        let convertedNumberInput = Number(valueInput.value)

        if (valueInput.value == "") {
            valueInput.classList.add("empty-input");
            buttonDecrement.disabled = true;
            buttonIncrement.disabled = false;
            return;
        } else if (convertedNumberInput <= 1) {
            valueInput.classList.remove("empty-input");
            valueInput.value = "1"
            buttonIncrement.disabled = false;
            buttonDecrement.disabled = true;
        } else if (convertedNumberInput >= 5) {
            valueInput.classList.remove("empty-input");
            valueInput.value = "5";
            buttonIncrement.disabled = true;
            buttonDecrement.disabled = false;
        } else if (convertedNumberInput >= 1 && convertedNumberInput <= 5) {
            valueInput.classList.remove("empty-input");
            valueInput.classList.add("full-input");
            buttonIncrement.disabled = false;
            buttonDecrement.disabled = false;
        };
    });
};


