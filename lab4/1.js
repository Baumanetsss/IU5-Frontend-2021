/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let sortedAnagramms = arr.map(
        function(element, i) {
            return {
                index: i,
                value: element.toLowerCase().split("").sort().join("")
            }
        }
    );
    let finalAnagramms = [];
    while (sortedAnagramms.length > 0) {
        let temp = [];
        temp.push(arr[sortedAnagramms[0].index]);
        for (let i = 1; i < sortedAnagramms.length; i++) {
            if (sortedAnagramms[i].value === sortedAnagramms[0].value) {
                temp.push(arr[sortedAnagramms[i].index]);
                sortedAnagramms = sortedAnagramms.slice(0, i).concat(sortedAnagramms.slice(i+1));
            }
        }
        sortedAnagramms = sortedAnagramms.slice(1);
        finalAnagramms.push(temp);
    }
    return finalAnagramms;
}
module.exports = getAnagramms;
