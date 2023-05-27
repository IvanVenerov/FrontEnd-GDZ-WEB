function scrollToElement(event, targetElement) {
  event.preventDefault(); // Отменяем стандартное действие ссылки

  const element = document.getElementById(targetElement); // Получаем элемент, к которому нужно прокрутить

  if (element) {
    element.scrollIntoView({ behavior: "smooth" }); // Прокручиваем до элемента с плавной анимацией
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Прокручиваем наверх страницы с плавной анимацией
}
function redirectToPage1() {
  window.location.href = "index_2.html";
}

function redirectToPage2() {
  window.location.href = "index_3.html";
}
function redirectToPage3() {
  window.location.href = "index_4.html";
}

function redirectToPage4() {
  window.location.href = "index_5.html";
}
