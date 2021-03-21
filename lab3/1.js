/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    if (!str) return str;
    str = str.toLowerCase().split(" ");
    strResult = "";
    for (let i = 0; i < str.length; i++) {
        strResult += str[i][0].toUpperCase() + str[i].slice(1) + " ";
    }
    return strResult.substring(0, strResult.length - 1);
}

module.exports = capitalize;