// The largest palindrome made from the product of two 3-digit numbers

function palindrome(num) {
    const strNum = num.toString();
    return strNum === strNum.split("").reverse().join("");
}

function largestpalindromeproduct() {
    let largestpalindrome = 0;

    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            const product = i * j;
            if (palindrome(product) && product > largestpalindrome) {
                largestpalindrome = product;
		    }
        }
    }

    return largestpalindrome;
}

console.log("Largest palindrome product of two 3-digit numbers:", largestpalindromeproduct());
