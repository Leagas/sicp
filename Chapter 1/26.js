/**
 * Louis Reasoner is having great difficulty do- ing Exercise 1.24.
 * His fast-prime? test seems to run more slowly than his prime? test.
 * Louis calls his friend Eva Lu Ator over to help.
 * When they examine Louis’s code, they find that he has rewritten the expmod procedure
 * to use an explicit multiplication, rather than calling square:
 *
	(define (expmod base exp m) (cond ((= exp 0) 1)
			((even? exp)
			(remainder (* (expmod base (/ exp 2) m)
						(expmod base (/ exp 2) m))
						m))
	(else
	(remainder (* base
						(expmod base (- exp 1) m))
						m))))

 */

 /**
  * If we view this in terms of the function of transformation for the value exp.
  * We can see that by using explicit multiplication i.e the transform exp*2. The growth of
  * our step is exponential, 2, 4, 8, 16, 32 but is slower than the original 2, 4, 16, 256
  *
  * My above answer is wrong, as i didn't see that this is calling the expmod
  * procedure twice doubling the number of calls resulting in a binary tree like call structure (2n time).
  */
