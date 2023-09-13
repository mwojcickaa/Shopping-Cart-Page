function calculateSubtotal(index: number) {
    let quantity = document.getElementsByClassName("quantity")[index] as HTMLInputElement;
    let subtotalsLabel = document.getElementsByClassName("calculate-subtotal")[index] as HTMLElement;

    let quantityValue = quantity.value;
    let price = arr[index].price;

    let totalPrice = Number(quantityValue) * Number(price);
    subtotalsLabel.innerHTML = `$${totalPrice}`;
    calculateTotalOrder()
};


function calculateTotalOrder() {
    let subtotalsLabel = document.getElementsByClassName("calculate-subtotal");
    let priceSummary = document.getElementById("cell-subtotal");
    let totalPriceWithTax = document.getElementById("cell-total-price");
    let totalPrice = 0;
    for (let i = 0; i < subtotalsLabel.length; i++) {
        let convertedSubtotalsLabel = subtotalsLabel[i].innerHTML;
        let subtotalLabelWithoutDolar = convertedSubtotalsLabel.replace("$", "");
        totalPrice += Number(subtotalLabelWithoutDolar);
    }
    priceSummary.innerHTML = "$" + totalPrice;

    let priceAndTax = totalPrice + 20;
    totalPriceWithTax.innerHTML = "$" + priceAndTax;
};
calculateTotalOrder();