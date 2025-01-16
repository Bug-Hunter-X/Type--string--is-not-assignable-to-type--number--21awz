# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error: Type 'string' is not assignable to type 'number'. This error arises when a function expecting a numerical argument receives a string instead.  The example shows how this might occur, and offers a solution. 

## Bug
The `bug.ts` file contains simple addition and subtraction functions with type annotations.  The issue is that there's no validation or handling of potential string inputs. Attempting to perform arithmetic with a string would cause a runtime error in JavaScript, but TypeScript catches this type mismatch during compilation.

## Solution
The `bugSolution.ts` file shows a solution involving input validation using `typeof` checks and explicit type assertion or error handling. It illustrates how robust functions handle various inputs and prevent type errors. 