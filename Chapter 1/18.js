/**
 * An iterative version of the solutions from
 * 16,17
 *
 * time complexity 𝛩(n)
 */

function double(a) {
	return a*2
}

function halve(a) {
	return a/2
}

function multi(b, e) {
	for (let i = e; i != 1; i=step) {
		console.log(b, i)
		if (i%2) {
			step = i - 1
			b += b
		} else {
			step = halve(i)
			b = double(b)
		}
	}

	console.log(b)
}

multi(3,8)
