/**
 *
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 */

const data = [['a', 1], ['b', 2]]


function task2(array) {
    const obj = {}

    for (let i = 0; i < array.length; i++) {
        const elem = array[i];
        obj[i] = elem;
    }

    return obj
}

console.log(task2(data))

module.exports = task2;