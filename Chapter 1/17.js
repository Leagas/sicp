/**
 * design a multiplication procedure analogous
 * to the below procedure that uses a logarithmic
 * number of steps.
 */

 /**
  * Below function grows linearly with n,
  * time complexity 𝛩(n)
  *
  * @param { base } a
  * @param { exponent } b
  */
 function multiplication(a, b) {
	if (b === 0)
		return 0
	return a + (multiplication(a, b-1))
 }

 /**
  * Assume that we cannot multiply,
  * add the functions double and halve.
  */

  function double(a) {
	  return a*2
  }

  function halve(a) {
	  return a/2
  }

  /**
   * Below function grows logarithmically
   * time complexity 𝛩(log n)
   *
   * @param { base } a
   * @param { exponent } b
   */

  function multi(a, b) {
	if (b === 0)
		return 0
	if (b === 1)
		return a
	if (b%2 === 0)
		return multi(double(a), halve(b))
	return a + (multi(a, b-1))
  }

  console.log(multi(6,5))
