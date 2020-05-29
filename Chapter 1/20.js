/**
 * Greatest common divisor, show the process for the gcd function,
 * indicate the number of remainder operations performed for both,
 * normal-oredr eval, and for applicative-order eval.
 */

let count = 0
function gcd(a, b) {
	console.log(a,b)
	if (b === 0)
		return a
	count++
	return gcd(b, a%b)
}

const res = gcd(1456,12)
console.log(res)
console.log(count)

/**
 * When the GCD is 2 we often see a fibonacci like pattern in the growth of the remainders,
 * the number of remainder calculations is always n-1, where n is the GCD.
 */
