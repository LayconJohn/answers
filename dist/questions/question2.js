function isPerfectSquare(value) {
    const s = Number(Math.sqrt(value));
    return (s * s === value);
}
export function Question2(num) {
    const isFibonacciNumber = isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
    if (!isFibonacciNumber) {
        console.log(`Questão 2: ${num} is NOT a Fibonacci number`);
    }
    else {
        console.log(`Questão 2: ${num} is a Fibonacci number`);
    }
}
