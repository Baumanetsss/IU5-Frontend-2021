/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    if (!str) return str;
    String.prototype.firstLetterCaps = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
      let arr = str.split(' ')
    let out = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
        out += arr[i].firstLetterCaps()
        } else {
        out += arr[i].firstLetterCaps() + ' '
        }
    }
}

module.exports = capitalize;