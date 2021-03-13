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
    for (let i = 0; i < str.length; i++) {
        str[i][0] = str[i][0].toUpperCase();
    }
    str = str.join(" ");
    return str;
}

module.exports = capitalize;