// Exercise: Generic Functions
//
// Generics let you write functions that work with ANY type
// while still keeping type safety. Think of <T> as a "type variable"
// — it gets filled in when you call the function.
//
// Tasks:
// 1. Implement identity() — returns whatever you pass in, with the type preserved
// 2. Implement firstElement() — returns the first item of a typed array
// 3. Implement merge() — combines two objects into one
// 4. Implement wrapInArray() — wraps any value in an array
//
// For each task, think about: what would happen if you used "any" instead of <T>?

// Task 1: Identity function
// Should return exactly what you pass in, with the type preserved
// Example: identity("hello") returns "hello" (typed as string)
// Example: identity(42) returns 42 (typed as number)
function identity<T>(value: T): T{
    return value;
}

const result = identity("hey");
const result2 = identity(37);

// Task 2: First element
// Should return the first item of an array, or undefined if empty
// Example: firstElement([1, 2, 3]) returns 1 (typed as number)
// Example: firstElement(["a", "b"]) returns "a" (typed as string)
function firstElement<T>(arr: T[]): T | undefined{
    return arr[0];
}
const first = firstElement([1,2,3]);
const second = firstElement(["a", "b"]);

// Task 3: Merge two objects
// Should combine two objects into one (like spread: {...a, ...b})
// Example: merge({ name: "API" }, { port: 3000 }) returns { name: "API", port: 3000 }
function merge<T, U>(a: T, b: U): T & U { 
    return {...a, ...b}
}
const merged = merge({name: "API"}, {port: 3000});


// Task 4: Wrap in array
// Should take any value and return it inside an array
// Example: wrapInArray("hello") returns ["hello"] (typed as string[])
// Example: wrapInArray(42) returns [42] (typed as number[])
function wrapInArray<Z>(value: Z): Z[] {
    return [value]
}
const wrappididoo = wrapInArray("gudomlig")
// Test your implementations:
// const str = identity("hello");    // should be typed as string
// const num = identity(42);         // should be typed as number
// const first = firstElement([1, 2, 3]);  // should be typed as number
// const merged = merge({ name: "API" }, { port: 3000 });  // should have both properties
// const wrapped = wrapInArray("test");  // should be typed as string[]
