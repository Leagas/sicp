/**
 * Design a procedure that evolves an iterative exponentiation
 * process that uses successive squaring and uses a logarithmic number of
 * steps as does fast-expt...
 *
 * Procedure is solving for exponentiation.
 * Must be iterative not recursive.
 * Must use successive squaring
 * State unchanged by abⁿ
 * Answer given by a, a starts at 1
 */

// recursive exponentiation

function fastexpt(b, n) {
	if (n === 0){
		return 1
	}
	if (n%2) {
		// if odd
		return b*fastexpt(b, n-1)
	} else {
		// if even
		return Math.pow(fastexpt(b, n/2),2)
	}
}

// fastexpt(2,3)

// iterative exponentiation, with 𝛩(log n)

function iterexpt(b,n) {
	let r = 1

	for (let i = n; i != 0; i=step) {
		if (i%2) {
			step = i - 1
			r = r*b
			console.log(`Odd Step: ${r} i: ${i}`)
		} else {
			step = i - 2
			r = r*Math.pow(b, 2)
			console.log(`Even Step: ${r}, i: ${i}`)
		}
	}

	return r
}
