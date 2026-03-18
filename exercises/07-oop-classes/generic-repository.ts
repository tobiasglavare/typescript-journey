// Exercise: Generic Repository
//
// Practice: generic classes, constraints, interfaces, CRUD operations.
//
// 1. Define an interface HasId with a readonly id: string property.
//
// 2. Create a class Repository<T extends HasId> with:
//    - A private Map to store items by id
//    - add(item: T): void — stores the item (overwrites if id exists)
//    - get(id: string): T | undefined — retrieves by id
//    - getAll(): T[] — returns all items as an array
//    - remove(id: string): boolean — deletes by id, returns true if found
//    - count: a getter that returns the number of items
//
// Example:
//   interface User extends HasId { id: string; name: string; email: string }
//
//   const repo = new Repository<User>();
//   repo.add({ id: "1", name: "Alice", email: "alice@test.com" });
//   repo.add({ id: "2", name: "Bob", email: "bob@test.com" });
//   repo.count          // 2
//   repo.get("1")       // { id: "1", name: "Alice", ... }
//   repo.remove("1")    // true
//   repo.remove("999")  // false
//   repo.getAll()       // [{ id: "2", name: "Bob", ... }]

// Your code here


// Test your implementation:
// interface User extends HasId { id: string; name: string; email: string }
// const repo = new Repository<User>();
// repo.add({ id: "1", name: "Alice", email: "alice@test.com" });
// repo.add({ id: "2", name: "Bob", email: "bob@test.com" });
// console.log(repo.count);       // 2
// console.log(repo.get("1"));    // { id: "1", name: "Alice", ... }
// console.log(repo.remove("1")); // true
// console.log(repo.getAll());    // [{ id: "2", ... }]
