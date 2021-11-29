

const input = document.querySelector(".add");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const modal = document.querySelector('.modal');
const btnModalClose = document.querySelector('.modal__close-img');

btn.addEventListener('click', function () {
   let newText = input.value;
   if (newText == '') {
      modal.classList.add('modal-active');
   } else {
      let li = document.createElement('li');
      let liBtn = document.createElement('button');
      liBtn.classList.add('basket');
      li.innerHTML = newText;
      list.insertBefore(li, list.childNodes[0]);
      li.append(liBtn);
      input.value = '';
      modal.classList.remove('modal-active');

      // проверить нажатые элементы
      liBtn.addEventListener('click', function (e) {
         if (e.target.localName === "button") {
            li.classList.toggle("checked");
         }

      });
   }

});

// удаление модального окна 
btnModalClose.addEventListener('click', function () {
   modal.classList.remove('modal-active');


});