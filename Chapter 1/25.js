/**
 * Exercise 1.25: Alyssa P. Hacker complains that we went to a lot of extra work in writing expmod.
 * After all, she says, since we already know how to compute exponentials,
 * we could have simply written
 *
 	(
		 define (expmod base exp m)
		 	(remainder (fast-expt base exp) m)
	)
 *
 */

 /**
  * Fast expt uses successive squaring on even
  * numbers, we would end up checking every single number and running in
  * linear vs log time.
  */
