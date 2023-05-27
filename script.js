function scrollToElement(event, targetElement) {
  event.preventDefault(); // Отменяем стандартное действие ссылки
  
  const element = document.getElementById(targetElement); // Получаем элемент, к которому нужно прокрутить
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем до элемента с плавной анимацией
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручиваем наверх страницы с плавной анимацией
}
function redirectToPage1() {
      window.location.href = "softdownload.html";
    }

    function redirectToPage2() {
      window.location.href = "softscreanshot.html";
}
    function redirectToPage3() {
      window.location.href = "techdownload.html";
    }

    function redirectToPage4() {
      window.location.href = "techscreanshot.html";
    }