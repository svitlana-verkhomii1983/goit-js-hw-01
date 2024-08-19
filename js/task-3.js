function getElementWidth(content, padding, border) {
  // Функція для видалення суфікса "px" і перетворення рядка в число
  function extractValue(value) {
    return parseFloat(value); // parseFloat для обробки як цілих, так і дробових чисел
  }

  // Отримання значень з рядків
  const contentWidth = extractValue(content);
  const paddingWidth = extractValue(padding);
  const borderWidth = extractValue(border);

  // Розрахунок загальної ширини
  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);

  return totalWidth;
}

// Тестування функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200