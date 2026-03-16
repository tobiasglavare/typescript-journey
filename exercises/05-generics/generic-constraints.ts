// Exercise: Generic Constraints
//
// Sometimes you need to restrict what types can be used with a generic.
// That's where "extends" comes in — it says "T must be at least this shape."
//
// Think of it like: "I don't care what type you give me, as long as it has X."
//
// Tasks:
// 1. Implement getLength() — works with anything that has a .length property
// 2. Implement getProperty() — safely gets a property from an object by key
// 3. Implement filterByProperty() — filters an array of objects by a property value
// 4. Implement createLookup() — turns an array of objects with "id" into a Record

// Task 1: Get length
// Should accept strings, arrays, or any object with a length property
// Constraint: T must have a "length" property that's a number
//
// Example: getLength("hello") returns 5
// Example: getLength([1, 2, 3]) returns 3
// Example: getLength({ length: 42 }) returns 42
// Example: getLength(123) should NOT compile — number has no length
function getLength<T extends { length: number}>(item: T): number{
    return item.length
}
const howlong = getLength("herro")

// Task 2: Get property
// Should safely get a property value from an object using a key
// You need TWO type parameters: one for the object, one for the key
// Hint: K extends keyof T means "K must be a valid key of T"
//
// Example: getProperty({ name: "API", port: 3000 }, "name") returns "API"
// Example: getProperty({ name: "API", port: 3000 }, "port") returns 3000
// Example: getProperty({ name: "API" }, "missing") should NOT compile
function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q]{
    return obj[key];
}
const prop = getProperty({name: "API", port: 1337}, "name")
// Task 3: Filter by property
// Given an array of objects, filter where a specific property equals a value
// You need to constrain T to be an object type
//
// Example:
//   const servers = [
//     { name: "web", region: "us-east-1" },
//     { name: "api", region: "eu-west-1" },
//     { name: "db", region: "us-east-1" },
//   ];
//   filterByProperty(servers, "region", "us-east-1")
//   // returns [{ name: "web", region: "us-east-1" }, { name: "db", region: "us-east-1" }]
function filterByProperty<T, Q extends keyof T>(items: T[], key: Q, value: T[Q]) {
    return items.filter(item => item[key] === value);
}

// Task 4: Create lookup
// Turn an array of objects (that have an "id" property) into a Record keyed by id
// Constraint: T must have an "id" property of type string
//
// Example:
//   const users = [
//     { id: "1", name: "Alice" },
//     { id: "2", name: "Bob" },
//   ];
//   createLookup(users)
//   // returns { "1": { id: "1", name: "Alice" }, "2": { id: "2", name: "Bob" } }
function createLookup<T extends {id: string }>(items: T[] ) {
    return items.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {} as Record<string, T>);
}

// Test your implementations:
// console.log(getLength("hello"));           // 5
// console.log(getLength([1, 2, 3]));         // 3
// console.log(getProperty({ name: "API", port: 3000 }, "name"));  // "API"
// console.log(filterByProperty(
//   [{ name: "web", region: "us-east-1" }, { name: "api", region: "eu-west-1" }],
//   "region", "us-east-1"
// ));
// console.log(createLookup([{ id: "1", name: "Alice" }, { id: "2", name: "Bob" }]));
