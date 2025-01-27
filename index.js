const headerOne = document.querySelector('h1');

const myButton = document.createElement("button");
myButton.textContent = "Click me!";
myButton.addEventListener("click", function() {
  alert("Button clicked!");
});
document.body.appendChild(myButton);
