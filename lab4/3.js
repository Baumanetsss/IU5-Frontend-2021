/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let counter = 1;
    let ultramegafinal = "";
    for (let i = 0; i < str.length; i++) {
        while (str[i + 1] == str[i]) {
            counter++;
            i++;
        }
        ultramegafinal += str[i];
        if (counter != 1) {
            ultramegafinal += counter.toString();
        }
        counter = 1;
    }
    return ultramegafinal;
}
module.exports = rle;
