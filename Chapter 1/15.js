/**
 * Angle of sine function
 *
 * The sine of an acute angle is defined in the context of a right triangle: for the specified angle,
 * it is the ratio of the length of the side that is opposite that angle to the length of the longest side of the triangle (the hypotenuse).
 */

 function cube(x) {
	return Math.pow(x, 3)
 }

 function p(x) {
	console.log('call p ', x)
	return (3*x) - (4 * cube(x))
 }

 function sine(angle) {
	console.log('call sine ', angle)
	if (angle < 0.1)
		return angle
	return p(sine(angle/3))
 }

const result = sine(12.15)

console.log(result)

/**
 *	a. how many times is the procedure p applied when sine(12.15) is evaluated?
 		5
 *	b. what is the order of growth for sine a?
 *	 	a is divided by 3 each time, 𝛩(log₃a)
 */
