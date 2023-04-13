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

    if (remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    }else {
        remainingCharsElement.classList.remove('warning', 'error');
        productNameInputElement.classList.remove('warning', 'error');
       
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters );



