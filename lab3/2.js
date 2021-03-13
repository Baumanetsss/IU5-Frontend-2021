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
    strArray = str.match(/[\d-.]{1,10000000}/g);
    let minimum = Number(strArray[0]);
    let maximum = minimum;
    for (let i = 1; i < strArray.length; i++) {
        if (Number(strArray[i]) > maximum) maximum = Number(strArray[i]);
        if (Number(strArray[i]) < minimum) minimum = Number(strArray[i]);
    }
    let result = {min: minimum, max: maximum}; 
    return result;
}

module.exports = getMinMax;