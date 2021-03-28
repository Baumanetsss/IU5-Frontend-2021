/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    let temp = arr[0]
    for (i = 0; i < arr.length-1; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i].from === arr[j].to) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                i = 0;
                continue
            }
        }
    }
    return arr
}
// test = 
// [
//     { from: 'L', to: 'M' },
//     { from: 'M', to: 'N' },
//     { from: 'A', to: 'L' },
//     { from: 'B', to: 'A' },
//     { from: 'N', to: 'Z' }, //LMNABZ
// ];
// console.log(makeRoute(test))
// makeRoute(test)
module.exports = makeRoute;