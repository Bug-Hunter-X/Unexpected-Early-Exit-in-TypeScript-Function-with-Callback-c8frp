function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbersWithCallback(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    callback(i);
  }
}

printNumbersWithCallback(5, (i) => {
  console.log(i); // This also works fine
});

// The Bug:
function printNumbersWithCallbackAndEarlyExit(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    if (i === 3) {
      return; // Unexpected early exit
    }
    callback(i);
  }
}

printNumbersWithCallbackAndEarlyExit(5, (i) => {
  console.log(i); // this only prints 1 and 2
});