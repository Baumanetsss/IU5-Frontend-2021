/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    if (!str) return str;
    str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        str[i][0].toUpperCase();
    }
    return str.join(" ");
}

module.exports = capitalize;