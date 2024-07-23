const task1 = require('./task_1.js')

test('Test 1', () => {
    const str = 'one.two.three';

    const result = { one: { two: { three: {} } } }

    expect(task1(str)).toEqual(result);
})