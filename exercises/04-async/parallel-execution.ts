// Exercise: Parallel Execution
// 
// You manage multiple services and need to check their health in parallel.
// Checking them one by one is too slow — you want to hit them all at once.
//
// Tasks:
// 1. Implement checkAllServices() using Promise.all
//    - Takes an array of URLs
//    - Fetches all of them in parallel
//    - Returns all responses (or throws if ANY fail)
//
// 2. Implement checkAllServicesSafe() using Promise.allSettled
//    - Same input, but never throws
//    - Returns a summary: { healthy: string[], down: string[] }
//
// 3. Implement fastestResponse() using Promise.race
//    - Returns whichever URL responds first
//
// Hints:
// - Promise.all fails fast: if one rejects, the whole thing rejects
// - Promise.allSettled waits for ALL to finish, never rejects
// - Promise.race returns the first to settle (resolve OR reject)
//
// Think about: when would you use each one in real infrastructure work?

interface ServiceStatus {
    url: string;
    status: "healthy" | "down";
    responseTime: number;
}

interface HealthSummary {
    healthy: string[];
    down: string[];
}

// Simulates checking a service (use this instead of real fetch for testing)
function checkService(url: string): Promise<ServiceStatus> {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 2000;
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve({ url, status: "healthy", responseTime: delay });
            } else {
                reject(new Error(`${url} is unreachable`));
            }
        }, delay);
    });
}

// Task 1: Check all services — fail if any are down
async function checkAllServices(urls: string[]): Promise<ServiceStatus[]> {
    return Promise.all(urls.map(url => checkService(url)));
}

// Task 2: Check all services — return summary even if some fail
async function checkAllServicesSafe(urls: string[]): Promise<HealthSummary> {
    const status = await Promise.allSettled(urls.map(url => checkService(url)));
    const summary: HealthSummary = {healthy: [], down: [] };
    status.forEach((result, index) => {
        if (result.status === "fulfilled") {
            summary.healthy.push(result.value.url);
        } else {
            summary.down.push(urls[index]);
        }
    });
    return summary;
}

// Task 3: Return the fastest responding service
async function fastestResponse(urls: string[]): Promise<ServiceStatus> {
    return Promise.race(urls.map(url => checkService(url)))
}

const services = [
    "https://api.example.com",
    "https://db.example.com",
    "https://cache.example.com",
    "https://auth.example.com",
];
