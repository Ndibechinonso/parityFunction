/* Challenge: Create a user input which accepts numbers
The value should be saved in an array and the array list items printed underneath the input
Delete a clicked item from the list both on the array and interface,
Have two buttons Which says “Show Odd” and “Show Even”
Upon clicking the Show Odd button, display the total count of odd numbers within the array
Upon clicking the Show Even button, display the total count of even numbers within the array
*/



let html = document.querySelector("html");

let field = document.createElement("div");
field.setAttribute("class", "workfield");
html.appendChild(field);

let inputField = document.createElement("input");
inputField.setAttribute("type", "number");
field.appendChild(inputField);

let inputSubmit = document.createElement("input");
inputSubmit.setAttribute("type", "submit");
inputSubmit.setAttribute("id", "button");
field.appendChild(inputSubmit);

let textField = document.createElement("ul");
field.appendChild(textField);
textField.setAttribute("class", "list");

let showOdd = document.createElement("input");
showOdd.setAttribute("type", "submit");
showOdd.setAttribute("value", "Show Odd");
showOdd.setAttribute("id", "button2");
field.appendChild(showOdd);

let showEven = document.createElement("input");
showEven.setAttribute("type", "submit");
showEven.setAttribute("value", "Show Even");
showEven.setAttribute("id", "button3");
field.appendChild(showEven);

let parityCount = document.createElement("p");
field.appendChild(parityCount);

let inputNumber = Number(inputField.value);
let array = [];

function addInput() {
  let inputNumber = inputField.value;
  if (inputField.value !== "") {
    array.push(inputNumber);
  } 

  inputField.value = "";
inputField.focus();
  let li = document.createElement("li");
  li.innerText = inputNumber;
  textField.appendChild(li);
  li.addEventListener("click", function () {
    let index = li.parentNode.removeChild(li);
    array.splice(index, 1);
  });

  showOdd.addEventListener("click", function () {
    let odd = 0;
    for (i = 0; i < array.length; i++)
      if (array[i] % 2 !== 0) {
        odd++;
      }
    parityCount.innerHTML = odd;
    parityCount.style.color = "purple";
  });

  showEven.addEventListener("click", function () {
    let even = 0;
    for (i = 0; i < array.length; i++)
      if (array[i] % 2 === 0) {
        even++;
      }
    parityCount.innerHTML = even;
    parityCount.style.color = "orange";
  });
 } 

inputSubmit.addEventListener("click", addInput);
