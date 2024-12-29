function fibs(n) {
    let fibs = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    }
    return fibs.slice(0, n + 1);
}

function fibsRecursive(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    }
    const fibs = fibsRecursive(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
}

// For running the code from the command line
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

if (!isNaN(n)) {
  console.log(`Fibonacci(${n}) = ${fibs(n)}`);
    console.log(`Fibonaccirec(${n}) = ${fibsRecursive(n)}`);  
} else {
  console.log('Please provide a valid number as an argument.');
}