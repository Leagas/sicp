/**
 * Fib recursion:
 * T transforms a b, producing the requested fib number,
 * by applying T to the nth power.
 */

  function T(a, b, n) {
	  console.log(a,b,n)
    if (n === 0)
      return b
    return T(a+b, a, n-1)
  }

 /**
  * Fib iterative:
  * Illustrating the transform for T(a,b)
  */

  function I(n) {
	  let a = 0
	  let b = 1

	  for (let i = 0; i<= n; i++) {
      a = a+b
      b = a-b
	  }

	  return console.log(b)
  }

  // I(8)

 /**
  * Now consider the special case,
  * T p=0 and q=1, where T(p,q) transforms (a,b)
  *
  * Alter the following transformations:
  *
  * a <- a + b becomes a <- b * q + a * q + a * p
  *	b <- a becomes b <- b * p + a * q
  *
  * Show that applying T(p,q) twice is the same as
  * a single transformation.
  *
  * This will allow us to use successive sqauring and
  * complete the procedure which will run in logarithmic time.
  */

  /**
   * Fib iteration showing the new transformation above
   */
  function Ipq(n) {
    let a = 0
    let b = 1
    let p = 0
    let q = 1

    let h
	  for (let i = 0; i<= n; i++) {
      h = a
      a = (b*q)+(a*q)+(a*p)
      b = (b*p)+(h*q)
	  }

	  return console.log(b)
  }

  // Ipq(8)

  /**
   *
   * Solution below:
   *
   * Tpq has the same transformation as Tab:
   *
	 * We are solving for Transformation Tpq(Tpq(a, b)) ** hint from the internet FML
	 *
	 * See image for 19.js
	 *
	 * p = q² + p²
	 * q = 2pq + q²
   *
   */

  function fib(n) {
	  console.log(fibiter(1, 0, 0, 1, n))
  }

  function fibiter(a, b, p, q, n) {
	  console.log(a,b,p,q,n)
	  if (n === 0) return b
	  if (n%2 === 0) {
			let o = p
			p = Math.pow(q, 2) + Math.pow(p, 2)
			q = 2*o*q + Math.pow(q, 2)
		  return fibiter(a, b, p, q, n/2)
	  } else {
		  return fibiter((b*q)+(a*q)+(a*p), (b*p)+( a*q), p, q, n-1)
	  }
  }

  fib(17)
