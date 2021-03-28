/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    var arity = f.length
    return function f1(...args) {
        //console.log('f1 args', args)
        if (args.length >= arity) {
        //console.log('enough arguments')
            return f(...args)
        } else {
        //console.log('need more arguments')
            return function f2(...moreArgs) {
                var newArgs = args.concat(moreArgs)
                return f1(...newArgs)
            }
        }
    }
}
// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(curry(add)(1)(2)(3)); //6
// console.log(curry(add)(1)(2, 3)); //6
// console.log(curry(add)(1, 2, 3)); //6
module.exports = curry;