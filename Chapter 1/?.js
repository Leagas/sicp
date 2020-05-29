function cubes(x, y) {
	let guess = ((x/Math.pow(y, 2)) + (2*y))/3
	let diff = y%guess
	// console.log(y, guess, diff)
	if (diff < 0.001) {
		return Math.floor(guess)
		// return console.log(Math.floor(guess), ' is the cube, with a variance of ', diff)
	}
	return cubes(x, guess)
}

let nums = [1,8,27,64,125,216,343,512,729,1000]

nums.forEach(item => {
	console.log(cubes(item, 1))
})
