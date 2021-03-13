/**
 * Напишите функцию getMinMax(strArray),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    strArray = str.match(/[0-9]{1,3}/g);
    let minimum = strArray[0];
    let maximum = minimum;
    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i] > maximum) maximum = strArray[i];
        if (strArray[i] < minimum) minimum = strArray[i];
    }
    let result = {min: minimum, max: maximum}; 
    return result;
}

module.exports = getMinMax;