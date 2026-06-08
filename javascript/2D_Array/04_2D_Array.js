let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

let gridSum = grid.map(row => row.reduce((a, b) => a + b, 0));

console.log(gridSum)