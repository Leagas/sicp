/**
 * This is the text book LISP fucntion for determining primality
 *
 * 	complexity: 𝛩(√n)
 *
 * 	(define (smallest-divisor n) (find-divisor n 2))

	(define (find-divisor n test-divisor)
		(cond ((> (square test-divisor) n) n)
			((divides? test-divisor n) test-divisor)
			(else (find-divisor n (+ test-divisor 1)))))

	(define (divides? a b) (= (remainder b a) 0))

	(define (prime? n)
		(= n (smallest-divisor n)))
 *
 *
 */

function divides(a, b) {
	return b%a == 0
}

function square(x) {
	return x**2
}

function find(n, test) {
	if (square(test) > n)
		return n
	if (divides(test, n)) {
		return test
	}
	return find(n, test+1)
}

function smallest(n) {
	return find(n, 2)
}

function prime(n) {
	return n == smallest(n)
}

module.exports = smallest
