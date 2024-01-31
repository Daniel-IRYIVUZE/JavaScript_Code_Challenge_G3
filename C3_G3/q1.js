// The sum of all the multiples of 3 or 5 below 1000

function totalnumbers(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("Sum of multiples of 3 or 5 below 1000:", totalnumbers(1000));

