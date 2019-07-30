// math PI

console.log(Math.PI);

// Eulers constant

console.log(Math.E);

// LN2

console.log(Math.LN2);

// LN10

console.log(Math.LN10);

// SQRT2

console.log(Math.SQRT2);

// max();

console.log(Math.max(10,66,23));

// min();

console.log(Math.min(34,45,23));

// random();

console.log(Math.random());

function randomNumber(min,max){
    // return Math.random()*(max-min)+min;
    return parseInt(Math.random()*(max-min)+min);
}

console.log(randomNumber(1,50));

// floor() rounds down
// ceil() rounds up
// round() nearest value

console.log(Math.floor(10.76));

console.log(Math.ceil(10.76));


console.log(Math.round(10.76));

// pow()

console.log(Math.pow(2,4));

// sqrt()

console.log(Math.sqrt(9));