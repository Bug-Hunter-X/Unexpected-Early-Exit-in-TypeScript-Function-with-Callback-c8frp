# Unexpected Early Exit in TypeScript Function with Callback

This repository demonstrates a subtle bug in a TypeScript function that uses a callback. The function unexpectedly exits early when a certain condition is met, preventing the callback from executing for all intended iterations.

## Bug Description

The `printNumbersWithCallbackAndEarlyExit` function iterates from 1 to `n`, calling a provided callback function for each iteration.  However, if the loop counter `i` reaches 3, the function prematurely returns, cutting off further executions of the callback.

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the compiled JavaScript file using Node.js: `node bug.js`.
4. Observe that the output only includes 1 and 2, instead of 1, 2, 3, 4, and 5.

## Solution

The solution involves avoiding premature exits inside the loop and instead using a conditional to control the callback execution.