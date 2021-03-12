/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let min = str[0];
    let max = min;
    for (i = 1; i < str.length; ++i) {
        if (str[i] > max) max = str[i];
        if (str[i] < min) min = str[i];
    }
    let result = {min: min, max: max}; 
    return result;
}

module.exports = getMinMax;