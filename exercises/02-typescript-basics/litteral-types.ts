// Literal types: Create a type for HTTP methods and a function that only accepts valid methods.

type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

function makeRequest(method: httpMethod, url: string): void {
     console.log(`${method} ${url}`);
}

makeRequest("GET", "/api/users");
makeRequest("POST", "/api/users");