const task2 = require('./task_2.js')

test('Task 2', () => {
    const data = [['a', 1], ['b', 2]]
    expect(task2(data)).toEqual({ a: 1, b: 2 })
})