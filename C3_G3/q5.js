// The smallest positive number that is evenly divisible by all of the numbers from 1 to 20

function smallestmultiple() {
    let number = 2520; // Starting from the known example
    while (true) {
        let divisible = true;
        for (let i = 11; i <= 20; i++) {
            if (number % i !== 0) {
                divisible = false;
                break;
            }
        }
        if (divisible) {
            return number;
        }
number += 2520; // Increment by the smallest number divisible by 1 to 10
    }
}

console.log("Smallest positive number divisible by all numbers from 1 to 20:", smallestmultiple());
