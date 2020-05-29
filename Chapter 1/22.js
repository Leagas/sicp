/**
 * This is LISP text book function for recording the execution time
 * when searching for consecutive odd primes
 *
	(
		define (timed-prime-test n)
			(newline)
			(display n)
			(start-prime-test n (runtime))
	)

	(
		define (start-prime-test n start-time)
			(
				if (prime? n)
				(report-prime (- (runtime) start-time))
			)
	)

	(
		define (report-prime elapsed-time)
			(display " *** ")
			(display elapsed-time)
	)
 *
 */

 const fermat_test = require("./lib/fermat_test")

 function timed_prime_test(n) {
	const isPrime = start_prime_test(n)
	// report_prime(h)

	return isPrime
 }

 function start_prime_test(n) {
	return fermat_test(n)
 }

 function search_for_primes(s, e, arr) {
	let h = process.hrtime()
	let count = 0

	do {
		if (s%2 > 0) {
			const isPrime = timed_prime_test(s)
			if (isPrime && count < 3) {
				hrend = process.hrtime(h)
				count += 1
				arr.push({
					number: s,
					time: hrend[1]/1000000
				})
			}
		}
		if (count === 3 && e*10 <= 10000000) {
			return search_for_primes(s*10,e*10, arr)
		}
		s++
	} while(s <= e)

	console.log(JSON.stringify(arr, null, 4))
 }

//  function report_prime(h) {
// 	hrend = process.hrtime(h)

// 	console.info('Execution time (hr): %dms', hrend[1] / 1000000)
//  }

 search_for_primes(1000,10000, [])

 /**
  *
  * All the primes request in the exercise, note that all the times
  * afte the 1st time are incorrect due to a bug in my recording method.
  *
	[
		{
			"number": 1009,
			"time": 0.232294
		},
		{
			"number": 1013,
			"time": 0.310558
		},
		{
			"number": 1019,
			"time": 0.322514
		},
		{
			"number": 10193,
			"time": 0.00439
		},
		{
			"number": 10211,
			"time": 0.020669
		},
		{
			"number": 10223,
			"time": 0.031453
		},
		{
			"number": 102233,
			"time": 0.005509
		},
		{
			"number": 102241,
			"time": 0.01633
		},
		{
			"number": 102251,
			"time": 0.028992
		},
		{
			"number": 1022513,
			"time": 0.006262
		},
		{
			"number": 1022519,
			"time": 0.015578
		},
		{
			"number": 1022531,
			"time": 0.033567
		}
	]
  */
