let paragraphElement = document.querySelector('p');


function changeParagraphText() {
    paragraphElement.textContent = "Clicked!"
}
paragraphElement.addEventListener('click',changeParagraphText);

let inputElement = document.querySelector('input');

function retriveUserInput() {
    let enteredText = inputElement.value;
    console.log(enteredText);

}
inputElement.addEventListener('input', retriveUserInput);
