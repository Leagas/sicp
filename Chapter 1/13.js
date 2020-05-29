function fib(n) {
	// only adds when n is 1 *
	if (n <= 1) {
		return n
	}
	return fib(n-1) + fib(n-2)
}

// let result = fib(9)
// console.log(result)

/**
 * the fib value for the nth number 9, is equal to the sum of branches ending in 1 for each
 * number as we iterate down from 9, branches end in 1 and 0 which is were we stop recursion.
 * Exponential time O(2^n) is bad...
 */

let psi, phi

let root = (n) => Math.sqrt(n)
let pow = (b, n) => Math.pow(b, n)

/**
 * Golden ratio: (1 + √5)/2
 */

psi = (1 + root(5))/2
phi = (1 - root(5))/2

const n = 9

const fibN = fib(n)
const psiN = pow(psi, n)
const phiN = pow(phi, n)

let result = (fibN === (psiN - phiN)/root(5))
console.log(
`
	fibⁿ		: ${fibN}
	φⁿ		: ${psiN}
	ψⁿ		: ${phiN}
	(φⁿ - ψⁿ)/√5	: ${(psiN - phiN)/root(5)}
`)
console.log(result)
