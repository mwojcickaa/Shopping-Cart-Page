let arr = [
    {
        id: 1,
        title: "1",
        price: "5",
        image: "./src/img/product-tshirt-top.jpg"
    },
    {
        id: 2,
        title: "2",
        price: "10",
        image: "./src/img/product-tshirt-top.jpg"
    },
    {
        id: 3,
        title: "3",
        price: "30",
        image: "./src/img/product-tshirt-top.jpg"
    }
];

let quantityArr = [
    {
        id: 1,
        quantity: 1
    },
    {
        id: 2,
        quantity: 1
    },
    {
        id: 3,
        quantity: 1
    }
]


let tbody = document.querySelector("tbody");

function insertItemsFromArr() {
    tbody.innerHTML = "";

    for (let parameters = 0; parameters < arr.length; parameters++) {
        let findId = quantityArr.find(obj => obj.id == arr[parameters].id)

        let buttonDecrement = "";
        if (findId.quantity == 1) {
            buttonDecrement = "disabled";
        }
        let buttonIncrement = "";
        if (findId.quantity == 5) {
            buttonIncrement = "disabled";
        }

        tbody.insertAdjacentHTML("beforeend", `
            <tr class="row">
                <td class="cell-product" rowspan="3">
                    <img class="cell__img img" src="${arr[parameters].image}">
                </td>
                <td class="cell-product-details title">
                    <div class="cell-product-details__title">
                        ${arr[parameters].title}
                    </div>
                </td>
                <td class="cell-quantity" rowspan="3" colspan="2">
                    <span class="cell-quantity-input">
                        <button class="cell-quantity-input__button cell-quantity-input__button--minus decrement" id="buttonDecrement_${arr[parameters].id}"
                        ${buttonDecrement}>-</button>
                        <input type="number" value="${findId.quantity}" class="quantity" maxlength="2" min="1" max="5" id="valueInput_${arr[parameters].id}"/>
                        <button
                            class="cell-quantity-input__button cell-quantity-input__button--plus increment" id="buttonIncrement_${arr[parameters].id}"
                            ${buttonIncrement}>+</button>
                    </span>
                </td>
                <td class="cell-subtotal" rowspan="3">
                    <div class="cell-subtotal__text calculate-subtotal">$${arr[parameters].price}</div>
                </td>
            </tr>
            <tr class="row">
                <td class="cell-product-details">
                    <div class="cell-product-details__price">
                            Price: $${arr[parameters].price}
                    </div>
                </td>
            </tr>
            <tr class="row">
                <td class="cell-product-details remove">
                    <button id="item_button_remove_${arr[parameters].id}" class="cell-product-details__remove">
                        Remove
                    </button>
                </td>
            </tr>
            `);
        calculateSubtotal(parameters);

        const removeButtons = document.getElementById(`item_button_remove_${arr[parameters].id}`);
        removeButtons.addEventListener("click", () => {
            arr.splice(parameters, 1)

            if (arr.length == 0) {
                tbody.innerHTML = "";
                calculateTotalOrder()
                tbody.insertAdjacentHTML("beforeend", `
                    <tr style="height: 350px">
                        <td colspan="5" style="text-align:center">
                            <h3>Your shopping cart is empty</h3>
                        </td>
                    </tr>
                `);
            } else {
                insertItemsFromArr()
            };
        });

        const valueInput = document.getElementById(`valueInput_${arr[parameters].id}`) as HTMLInputElement;
        const buttonMinus = document.getElementById(`buttonDecrement_${arr[parameters].id}`) as HTMLButtonElement;
        const buttonPlus = document.getElementById(`buttonIncrement_${arr[parameters].id}`) as HTMLButtonElement;

        buttonMinus.addEventListener("click", () => {
            if (valueInput.value == "2") {
                buttonMinus.disabled = true;
            } else if (valueInput.value == "5") {
                buttonPlus.disabled = false;
            }
            valueInput.value = String(parseInt(valueInput.value) - 1);
            let findId = quantityArr.find(obj => obj.id == arr[parameters].id)
            findId.quantity = Number(valueInput.value);
            calculateSubtotal(parameters)
        });

        buttonPlus.addEventListener("click", () => {
            if (valueInput.value == "1") {
                buttonMinus.disabled = false;
            } else if (valueInput.value == "4") {
                buttonPlus.disabled = true;
            } else if (valueInput.value == "") {
                valueInput.value = "0";
                valueInput.classList.remove("empty-input");
            }
            valueInput.value = String(parseInt(valueInput.value) + 1);
            let findId = quantityArr.find(obj => obj.id == arr[parameters].id)
            findId.quantity = Number(valueInput.value);
            calculateSubtotal(parameters)
        });

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
                buttonMinus.disabled = true;
                buttonPlus.disabled = false;
                return;
            } else if (convertedNumberInput <= 1) {
                valueInput.classList.remove("empty-input");
                valueInput.value = "1"
                buttonPlus.disabled = false;
                buttonMinus.disabled = true;
            } else if (convertedNumberInput >= 5) {
                valueInput.classList.remove("empty-input");
                valueInput.value = "5";
                buttonPlus.disabled = true;
                buttonMinus.disabled = false;
            } else if (convertedNumberInput >= 1 && convertedNumberInput <= 5) {
                valueInput.classList.remove("empty-input");
                valueInput.classList.add("full-input");
                buttonPlus.disabled = false;
                buttonMinus.disabled = false;
            };
            let findId = quantityArr.find(obj => obj.id == arr[parameters].id)
            findId.quantity = Number(valueInput.value);
            calculateSubtotal(parameters)
        });
        console.log(findId.quantity)
    };
};

insertItemsFromArr();
