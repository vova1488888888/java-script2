console.log('hello!!!!!!!!!');

// Саня покажи телефон
const sania = document.querySelector('#sania');
// ---------------

// покажи телефон
const phone = document.querySelector('#phone');

// Саня каже: если скажеш пожалуйста
// для кнопки це коли нажимаеш на нее - click
//  пож    сделай-покажи
sania.addEventListener("click", function () {

  // Он говорит Ок)))))
  //  показывает phone а затем прячет toggle это показать и спрятать
  phone.classList.toggle('phone-hidden');

  // ---------------------
  // Дальше Саня :) if - если телеф показывает: phone-hidden говорит ну ладно смотри- open......

  if (phone.classList.contains('phone-hidden')) {
    sania.textContent = "На cмотри";
    // -----------------------------

    // Если ты посмотрел Ты говоришь Саня прячь-close я посмотрел
  } else {
    sania.textContent = 'прячь';
  }

});

const headers = document.querySelectorAll("[data-name='accordeon-title']");
headers.forEach(function (item) {
  item.addEventListener('click', showContent);
})
function showContent() {
  this.nextElementSibling.classList.toggle('hidden');
}

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item){
  item.addEventListener('click', function() {
    contentBoxes.forEach(function (item) {
      item.classList.add('hidden');
    });
   const contentBox = document.querySelector('#' + this.dataset.tab);
   contentBox.classList.remove('hidden');
   
  })
})