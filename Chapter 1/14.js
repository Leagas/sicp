/**
 * Counting Change Function
 *
 * We keep decreasing the number of coins subtracted, starting with the largest,
 * each coin is then subtracted from the amount, until we hit 0 or fail our assertions.
 * If we are able to hit 0, this consitutes a successfull attempt to "make change".
 *
 * Orders of growth
 *
 * let n be the size of the problem
 * let R(n) be the amount of resources required
 *
 * R(n) has 𝛩(f(n)) orders of growth
 *
 * k₁f(n) <= R(n) <= k₂f(n)
 *
 * The order of growth for this is n to the power of c
 * where c is the number of types of coins
 *
 */

function main(amount) {
	const result = cc(amount, 5)

	console.log(`
	result: ${result}`)
}

function cc(amount, koc) {
	if (amount === 0) {
		return 1
	}

	if (amount < 0 || koc === 0) {
		return 0
	}

	return cc(amount, koc-1) + cc(amount - fd(koc), koc)
}

function fd(koc) {
	switch (koc) {
		case 1:
			return 1
		case 2:
			return 5
		case 3:
			return 10
		case 4:
			return 25
		case 5:
			return 50
		default:
			break
	}
}

main(11)
