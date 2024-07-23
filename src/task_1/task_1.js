/**
 *
 * Ожидаемый результат: 'one.two.three' => { one: { two: { three: {} } } }
 */


const str = 'one.two.three';

function task1(str){
    const arrStr = str.split('.');
    let obj = {};

    for (let i = 0; i < arrStr.length; i++) {
        const val = arrStr[i];
        obj = {[val]: i};
    }

    return obj
}

console.log(task1(str));

module.exports = task1;