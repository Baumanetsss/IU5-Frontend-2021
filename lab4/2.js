/**
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
    for (let i = 0; i < str.lenght / 2; i++) {
        if (str[i] != str [str.lenght-1-i]) {
            return false;
        }
    }
    return true;
}

module.exports = isPalindrome;
