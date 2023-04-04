let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");
console.dir(productNameInputElement);
let maxAllowedChars = productNameInputElement.maxLength;
console.log(maxAllowedChars);

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLenght = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLenght;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters );



