const agreementCheckbox = document.getElementById("agreementCheckbox");
const myLink = document.getElementById("myLink");

myLink.addEventListener("click", function (event) {
  if (!agreementCheckbox.checked) {
    event.preventDefault();
    alert("Ви не погодились з користувальницькою угодою !");
  }
});
