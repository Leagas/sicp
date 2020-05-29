
/**
 * This is the Fermat test in LISP for determining primality
 *
 *
	(define (expmod base exp m) (
		cond ((= exp 0) 1)
			((even ? exp)
				(remainder (square (expmod base (/ exp 2) m)) m))
			(else
				(remainder (* base (expmod base (- exp 1) m)) m))
	))

	(define (fermat-test n) (
		define (try-it a) (
			= (expmod a n n) a))
			(try-it (+ 1 (random (- n 1)))))


	(define (fast-prime? n times) (
		cond ((= times 0) true)
			((fermat-test n) (
				fast-prime? n
					(- times 1)))
				(else
					false)
	))
 *
 */

 /**
  * This function is used to compute the following when
  * testing for primality using the fermat test, and is
  * a translation of the above LISP function.
  *
  * @param {number} base any positive integer less than m
  * @param {number} exp the exponent base is being raised to
  * @param {number} m the number we are testing for primality
  */
function expmod(base ,exp, m) {
	if (exp == 0)
		return 1
	if (exp%2 == 0)
		return Math.pow(expmod(base, exp/2, m), 2)%m
	return base*(expmod(base, exp-1, m))%m
}

function random(n) {
	return Math.floor(Math.random() * Math.floor(n))
}

function try_it(a, n) {
	return expmod(a, n, n) == a
}

function fermat_test(n) {
	return try_it(random(n-1)+1, n)
}

function fast_prime(n, times) {
	if (times == 0)
		return true
	if (fermat_test(n))
		return fast_prime(n, times-1)
	return false
}

function run_timed_test(n) {
	let h = process.hrtime()
	const result = fast_prime(n, 1)
	console.log(result)
	hrend = process.hrtime(h)
	console.log(hrend[1]/1000000)
}

run_timed_test(1022531)

module.exports = fermat_test
