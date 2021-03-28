/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:  
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let brackets = "[]<>()";
    let arr = [];
    let temp = arr.pop();
    for (let bracket of str) {
        console.log(arr);
        let bracketsIndex = brackets.indexOf(bracket)
        if (bracketsIndex % 2 === 0) {
            arr.push(bracketsIndex + 1)
        } else {
            if(arr.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return arr.length === 0
}
module.exports = checkBrackets;
