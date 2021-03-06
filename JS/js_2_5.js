"use strict";

// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true (булеан), если запрещенных слов нет функция возвращает false (булеан). Слова в строке могут быть в произвольном регистре.

function checkForSpam(str) {
  // Write code under this line
  const keyWord1 = "spam";
  const keyWord2 = "sale";

  return (
    str.toLowerCase().includes(keyWord1) || str.toLowerCase().includes(keyWord2)
  );
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
