// The largest prime factor of the number 600851475143

function largestprimefactor(number) {
    let factor = 2;

    while (factor <= number) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }

    return factor;
}

console.log("Largest prime factor of 600851475143:", largestprimefactor(600851475143));
