/**
 * Use the smallest-divisor procedure to find the smallest
 * divisor of each of the following numbers: 199, 1999, 19999.
 */

 const smallest = require("./lib/smallest_divisor")

 const numbers = [199, 1999, 19999]

 const result = numbers.map(x => smallest(x))

 console.log(result)
