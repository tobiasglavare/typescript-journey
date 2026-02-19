// Type narrowing: Write a function that handles 
// string | string[] input and always returns a
//  string.

function print(value: string | string[]): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value.join(", ").toUpperCase();
    }
}