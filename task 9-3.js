// Получаем ссылки на элементы input, button и div
const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

// Обработчик клика на кнопку
submitBtn.addEventListener("click", function () {
  // Получаем введенное число
  const number = parseInt(numberInput.value);

  // Проверяем, попадает ли число в диапазон от 1 до 10
  if (number < 1 || number > 10) {
    resultDiv.innerText = "Число вне диапазона от 1 до 10";
    return;
  }

  // Создаем объект XHR
  const xhr = new XMLHttpRequest();

  // Устанавливаем обработчик ответа на запрос
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Проверяем успешность запроса
      if (xhr.status === 200) {
        // Получаем массив изображений и выводим их на страницу
        const images = JSON.parse(xhr.responseText);
        images.forEach(function (image) {
          const img = document.createElement("img");
          img.src = image.download_url;
          resultDiv.appendChild(img);
        });
      } else {
        // Выводим сообщение об ошибке
        resultDiv.innerText = "Ошибка при загрузке изображений";
      }
    }
  };

  // Отправляем запрос на сервер
  xhr.open("GET", `https://picsum.photos/v2/list?limit=${number}`);
  xhr.send();
});
