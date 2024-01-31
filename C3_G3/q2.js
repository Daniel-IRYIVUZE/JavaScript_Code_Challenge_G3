
n sumfibonacci(limit) {
    let sum = 0;
    let a = 1, b = 2;

    while (a <= limit) {
        if (a % 2 === 0) {
            sum += a;
        }

        let temp = a;
        a = b;
        b = temp + b;
    }

    return sum;
}

console.log("Sum of even Fibonacci numbers below 4 million:", sumfibonacci(4000000));

