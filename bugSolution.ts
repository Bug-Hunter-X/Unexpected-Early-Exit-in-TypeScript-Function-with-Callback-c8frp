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

// The Solution:
function printNumbersWithCallbackAndEarlyExitFixed(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    if (i === 3) {
      // Do not return early, instead conditionally call the callback
    } else {
      callback(i);
    }
  }
}

printNumbersWithCallbackAndEarlyExitFixed(5, (i) => {
  console.log(i); // This prints 1, 2, 4, 5
});
//Alternative solution
function printNumbersWithCallbackAndEarlyExitFixed2(n: number, callback: (i: number) => void): void {
  for (let i = 1; i <= n; i++) {
    if (i !== 3) {
      callback(i);
    }
  }
}
printNumbersWithCallbackAndEarlyExitFixed2(5, (i) => {
  console.log(i); // This prints 1, 2, 4, 5
});