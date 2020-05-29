const dim = 5
const table = []

for (let y = 0; y < dim; y++) {
	table[y] = []
	for (let x = 0; x < y+1; x++) {
		if (x === 0 || x === y) {
			table[y][x] = 1
		} else {
			table[y][x] = table[y-1][x-1] + table[y-1][x]
		}
	}
}

console.log(table)
