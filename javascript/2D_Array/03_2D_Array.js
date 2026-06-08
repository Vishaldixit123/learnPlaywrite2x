let testDetails = [
    ['Login', 'Pass', 200],
    ['DashBord', 'Fail', 404],
    ['Cart', 'Pass', 201]
]

for (let row of testDetails) {
    for (let cell of row) {
        console.log(cell)
    }
}