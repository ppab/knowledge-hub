# Types of Errors

## Syntax Errors:

These occur when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the
language.

```js
console.log('Hello World'  // Missing closing parenthesis and semicolon
```

## Runtime Errors:

These occur during the execution of the script, usually due to illegal operations like referencing an undefined
variable.

```js
console.log(undefinedVariable); // ReferenceError: undefinedVariable is not defined
```

## Logical Errors:

These are the most difficult to track because the program runs without throwing any errors, but the output is not as
expected.

```js
let total = 10;
let discount = 5;
let finalPrice = total + discount; // Logical error: should be subtraction
```

## Common Error Types in JavaScript

### Error: A generic error type.

```js
throw new Error('Something went wrong');
```

### SyntaxError: Thrown when a syntax error occurs.

```js
JSON.parse("{ bad json }"); // SyntaxError: Unexpected token b in JSON at position 2
```

## ReferenceError: Thrown when an invalid reference is made.

```js
console.log(nonExistentVariable); // ReferenceError: nonExistentVariable is not defined
```

## TypeError: Thrown when a value is not of the expected type.

```js
null.f(); // TypeError: Cannot read property 'f' of null
```

## RangeError: Thrown when a number is out of range.

```js
let arr = new Array(-1); // RangeError: Invalid array length
```

## URIError: Thrown when there is an error in encoding or decoding URI.

```js
decodeURIComponent('%'); // URIError: URI malformed
```

## Handling Errors

### JavaScript uses try...catch...finally for error handling.

#### try block: Wraps the code that might throw an error.

#### catch block: Executes when an error is thrown.

#### finally block: Executes after try and catch, regardless of whether an error was thrown or not.

```js

try {
// Code that may throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
// Code to handle the error
    console.error('An error occurred:', error.message);
} finally {
// Code that will always execute
    console.log('This will always run');
}
```

### Custom Errors

You can create custom error classes by extending the built-in Error class.

```js
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('This is a custom error');
} catch (error) {
    console.error(error.name); // CustomError
    console.error(error.message); // This is a custom error
}
```

### Promises and Async/Await

Error handling with Promises uses .catch(), while async/await uses try...catch.

#### Using Promises:

```js
someAsyncFunction()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
``` 

#### Using Async / Await:

```js
javascript
Copiar
código

async function asyncFunction() {
    try {
        let result = await someAsyncFunction();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

asyncFunction();
```

Understanding these error types and handling mechanisms will help you write more robust JavaScript code.